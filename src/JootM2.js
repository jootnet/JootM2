import { Images } from "./Images.js"

const image = new Images

async function init(resourcesJsonUrl) {
    try {
        const resp = await fetch(resourcesJsonUrl);
        if (resp.ok) {
            const data = await resp.json();
            for (const prop in data) {
                if (prop == "images") {
                    const baseUrl = resourcesJsonUrl.substring(0, resourcesJsonUrl.lastIndexOf("/") + 1)
                    for (const libName in data[prop]) {
                        const indexFileUrl = baseUrl + data[prop][libName]["x"]
                        const libraryFileUrl = baseUrl + data[prop][libName]["l"]
                        image.addLibrary(libName, indexFileUrl, libraryFileUrl)
                    }
                }
            }
        }
    } catch {
        return;
    }
}

export { init, image as Image }