export const getId = (url: string) => {
    const regex = /https:\/\/pokeapi.co\/api\/v2\/([\w-]+)\/([0-9]+)\//gm
    let match

    if ((match = regex.exec(url)) !== null) {
        // Return the id, match[1] is for the route
        return +match[2]
    }
}