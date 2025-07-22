export default async function retry<U>(promise: ()=>Promise<U>, retries = 3, delay = 1000): Promise<U> {
    let attempt = 0;

    while (attempt < retries) {
        try {
            return await promise();
        } catch (_) {
            attempt++;
            console.error(`Attempt ${attempt} failed!`);
            if (attempt >= retries) {
                throw new Error(`Failed after ${retries} attempts`);
            }
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw new Error("This should never be reached");
}