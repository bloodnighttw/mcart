import fetchAllServer from "./scripts/mc/vanilla";

console.log('Hello World');

fetchAllServer().then((e) => {
    // collect all java versions
    const java = new Set<number>();
    e.forEach((version) => {
        if (version && version.javaVersion) {
            java.add(version.javaVersion.majorVersion);
        }
    });

    console.log("Java versions:", Array.from(java).sort((a, b) => a - b));
}).catch(console.error);