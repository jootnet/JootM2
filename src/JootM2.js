import { Images } from "./image/Images.js"
import { Maps } from "./map/Maps.js"

async function init(resourcesJsonUrl) {
    try {
        const resp = await fetch(resourcesJsonUrl);
        const baseUrl = resourcesJsonUrl.substring(0, resourcesJsonUrl.lastIndexOf("/") + 1)
        if (resp.ok) {
            const data = await resp.json();
            for (const prop in data) {
                if (prop == "images") {
                    for (const libName in data[prop]) {
                        const indexFileUrl = baseUrl + data[prop][libName]["x"]
                        const libraryFileUrl = baseUrl + data[prop][libName]["l"]
                        Images.setLibraryUrl(libName, indexFileUrl, libraryFileUrl)
                    }
                } else if (prop == "maps") {
                    for (const mapNo in data[prop]) {
                        Maps.setMapUrl(mapNo, baseUrl + data[prop][mapNo])
                    }
                }
            }
        }
    } catch {
        return;
    }
}

export { init, Images as Image, Maps as Map }