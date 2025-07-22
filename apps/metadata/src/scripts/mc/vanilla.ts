import {z} from "zod/v4";
import retry from "../../utils/retry";

const MetadataURL = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";

const VersionMetadataSchema = z.object({
    latest: z.object({
        release: z.string(),
        snapshot: z.string().optional()
    }),
    versions: z.array(z.object({
        id: z.string(),
        type: z.enum(["release", "snapshot", "old_alpha", "old_beta"]),
        url: z.string(),
        // to date
        time: z.string().transform((val) => new Date(val)),
        releaseTime: z.string().transform((val) => new Date(val)),
    }))
});

const VersionServerJarSchema = z.object({
    id: z.string(),
    downloads: z.object({
        server: z.object({
            url: z.string(),
            sha1: z.string().optional(),
            size: z.number().optional()
        })
    }).transform((val) => val.server),
    type: z.enum(["release", "snapshot", "old_alpha", "old_beta"]),
    time: z.string().transform((val) => new Date(val)),
    releaseTime: z.string().transform((val) => new Date(val)),
    javaVersion: z.object({
        component: z.string(),
        majorVersion: z.number()
    }),
});


export default async function fetchAllServer() {

    const response = await fetch(MetadataURL);
    if (!response.ok) {
        throw new Error("Failed to fetch server versions");
    }
    const data = await response.json();
    const parsedData = VersionMetadataSchema.parse(data);
    let count = 0;
    
    const serverJar = await Promise.all(parsedData.versions.map(async (version) => {

        const fn = async () => {


            const versionResponse = await fetch(version.url);
            if (!versionResponse.ok) {
                throw new Error(`Failed to fetch version data for ${version.id}`);
            }
            count++;
            console.log(`Fetching version ${count}/${parsedData.versions.length}: ${version.id}`);
            const versionData = await versionResponse.json();
            try {
                return VersionServerJarSchema.parse(versionData);
            }
            catch (_error) {
                console.log(`Version ${version.id} does not have a valid server jar`);
                return null; // Skip versions that do not have a valid server jar
            }
        }

        const result = await retry(fn, 3, 1000);
        return result;
    }));

    // console.log("Fetched server versions:", serverJar);
    
    return serverJar;
}