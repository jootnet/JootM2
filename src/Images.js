import { WIL } from "./WIL.js"

// 图片加载的类
class Images {
    constructor() {
        // 图片库的地址，每个图片库都有两个地址，wix/wzx和wil/wzl
        this.libUrls = new Map
        // 图片加载器，每一个图片库对应一个，可能是WIL，也可能是WZL
        this.loaders = new Map

        // 当异步加载图片成功时的回调函数（每幅图片都会回调一次）
        this.textureConsumer = null;
    }

    // 设置单个纹理加载成功的回调函数
    // 函数原型为 function callback(libName, no : Number, tex : M2Texture)
    // libName=>图片库名称，no=>纹理在图片库中的序号，tex=>纹理对象
    onTextureLoad(textureConsumer) {
        this.textureConsumer = textureConsumer;
    }

    addLibrary(libName, indexFileUrl, libraryFileUrl) {
        const libUrl = new Map
        libUrl.set("x", indexFileUrl)
        libUrl.set("l", libraryFileUrl)
        this.libUrls.set(libName, libUrl)
    }

    load(libName, imageNo) {
        if (!this.libUrls.has(libName)) {
            console.warn(`${libName} does not exists, please call addLibrary to set file address first`)
            return;
        }
        if (!this.loaders.has(libName)) {
            const libUrl = this.libUrls.get(libName)
            const indexFileUrl = libUrl.get("x")
            const libraryFileUrl = libUrl.get("l")
            if (indexFileUrl.toLowerCase().endsWith("wix")) {
                const wil = new WIL(indexFileUrl, libraryFileUrl)
                const imagesThis = this
                wil.onTextureLoad((no, tex) => {
                    if (imagesThis.textureConsumer != null) {
                        imagesThis.textureConsumer(libName, no, tex)
                    }
                })
                this.loaders.set(libName, wil)
            } // else TODO wzl
        }
        this.loaders.get(libName).load(imageNo)
    }
}

export { Images }