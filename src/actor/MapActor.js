import { Images } from "../image/Images.js"
import { Maps } from "../map/Maps.js"
import * as PIXI from "pixi.js"

// 已经加载完成的地图
const cachedGameMaps = new Map
// 地图名称
const mapNames = new Map
// 地图在游戏中的数据结构
class GameMap {

    constructor(width, height) {
        // 地图宽度
        this.width = width
        // 地图高度
        this.height = height
        // 地图可移动标记
        this.canWalk = []
        // 地图可飞跃标记
        this.canFly = []
        // 地图块大地砖所在文件及索引
        this.tilesTextureName = []
        // 地图块小地砖所在文件及索引
        this.smTilesTextureName = []
        // 地图对象层图片所在文件及索引
        this.objsTextureName = []

        // 坐标转换一下
        for (let w = 0; w < this.width; ++w) {
            this.canWalk[w] = []
            this.canFly[w] = []
            this.tilesTextureName[w] = []
            this.smTilesTextureName[w] = []
            this.objsTextureName[w] = []

            for (let h = 0; h < this.height; ++h) {
                this.canWalk[w][h] = false
                this.canFly[w][h] = false
                this.tilesTextureName[w][h] = null
                this.smTilesTextureName[w][h] = null
                this.objsTextureName[w][h] = null
            }
        }
    }
}

// 地图绘制类
class MapActor {

    /**
     * 创建地图绘制对象
     * @param {PIXI.Application} app 游戏绘制框架实例对象
     * @param {PIXI.Container} parent 地图要加入的容器
     */
    constructor(app, parent) {
        // 地图编号
        this.mapNo = null
        // 游戏地图
        this.map = null
        // 当前角色坐标（地图中心）
        this.roleX = 0
        this.roleY = 0
        // 当前角色绘制偏移量
        this.shiftX = 0
        this.shiftY = 0

        this.container = new PIXI.Container

        // 大地砖图层
        this.bngContainer = new PIXI.Container
        this.container.addChild(this.bngContainer)
        // 小地砖图层
        this.midContainer = new PIXI.Container
        this.container.addChild(this.midContainer)
        // 玩家图层（衣服、武器、翅膀）
        this.humContainer = new PIXI.Container
        this.container.addChild(this.humContainer)
        // 对象图层（树木、房屋）
        this.objContainer = new PIXI.Container
        this.container.addChild(this.objContainer)
        
        parent.addChild(this.container)

        // 像素尺寸
        this.width = app.view.width
        this.height = app.view.height

        // 是否需要更新节点信息
        this.dirty = false
    }

    /**
     * 设置地图的显示名称
     * @param {string} mapNo 地图编号
     * @param {string} mapName 地图名称
     */
    static setMapName(mapNo, mapName) {
        mapNames.set(mapNo, mapName)
    }

    /**
     * 进入地图
     * @param {string} mapNo 地图编号
     * @returns 当前对象
     */
    enter(mapNo) {
        if (mapNo != null && mapNo == this.mapNo) return this;
        this.mapNo = mapNo
        this.map = null
        this.roleX = -1
        this.roleY = -1
        this.shiftX = 0
        this.shiftY = 0
        this.dirty = true
        return this
    }

    /**
	 * 设置地图展示中心坐标
	 * 即是当前玩家游戏坐标
     * @param {number} roleX 游戏坐标x
     * @param {number} roleY 游戏坐标y
     * @returns 当前对象
     */
    setCenter(roleX, roleY) {
		this.roleX = roleX
		this.roleY = roleY
        this.shiftX = 0
        this.shiftY = 0
        this.dirty = true
		return this
	}

    /**
     * 设置(主)玩家角色当前绘制偏移量
     * @param {number} shiftX 角色绘制横向偏移量
     * @returns 当前对象
     */
    setShiftX(shiftX) {
		this.shiftX = -shiftX
        this.dirty = true
		return this
	}
    /**
     * 设置(主)玩家角色当前绘制偏移量
     * @param {number} shiftY 角色绘制纵向偏移量
     * @returns 当前对象
     */
    setShiftY(shiftY) {
		this.shiftY = -shiftY
        this.dirty = true
		return this
	}

    // 更新地图绘制实例
    // 将会加载地图、重设节点或偏移量
    update() {
        if (!this.dirty) return
        this.bngContainer.removeChildren()
        this.midContainer.removeChildren()
        this.humContainer.removeChildren()
        this.objContainer.removeChildren()
        this.container.x = 0
        this.container.y = 0

        // 先看看地图是否已加载
        if (this.map == null) {
            if (this.mapNo != null) {
                let _map = cachedGameMaps.get(this.mapNo)
                if (_map) {
                    this.map = _map
                } else {
                    _map = Maps.get(this.mapNo)
                    if (_map) {
                        // 静态地图转游戏中的动态地图
                        const gameMap = new GameMap(_map.getWidth(), _map.getHeight())
                        {
                            for (let w = 0; w < _map.getWidth(); ++w) {
                                for (let h = 0; h < _map.getHeight(); ++h) {
                                    const mi = _map.getTiles()[w][h]
                                    gameMap.canFly[w][h] = mi.isCanFly()
                                    gameMap.canWalk[w][h] = mi.isCanWalk()
                                    if (mi.isHasBng()) {
                                        var tileTextureName = "tiles";
                                        if (mi.getBngFileIdx() != 0) {
                                            tileTextureName += mi.getBngFileIdx();
                                        }
                                        tileTextureName += "/" + mi.getBngImgIdx();
                                        gameMap.tilesTextureName[w][h] = tileTextureName;
                                    }
                                    if (mi.isHasMid()) {
                                        var smTileTextureName = "smtiles";
                                        if (mi.getMidFileIdx() != 0) {
                                            smTileTextureName += mi.getMidFileIdx();
                                        }
                                        smTileTextureName += "/" + mi.getMidImgIdx();
                                        gameMap.smTilesTextureName[w][h] = smTileTextureName;
                                    }
                                    if (!mi.isHasAni() && mi.isHasObj()) {
                                        var objTextureName = "objects";
                                        if (mi.getObjFileIdx() != 0) {
                                            objTextureName += mi.getObjFileIdx();
                                        }
                                        objTextureName += "/" + mi.getObjImgIdx();
                                        gameMap.objsTextureName[w][h] = objTextureName;
                                    }
                                }
                            }
                        }
                        cachedGameMaps.set(this.mapNo, gameMap)
                        this.map = gameMap
                    }
                }
            }
        }
        if (this.map == null) return
        // 如果没有玩家，以地图中心为中央显示
        if (this.roleX == -1) {
            this.roleX = Math.round((this.map.width + 1) / 2)
            this.roleY = Math.round((this.map.height + 1) / 2)
        }

        // 计算显示区域（显示区域以游戏坐标为准）
        // 1.显示区域转换为像素尺寸应大于等于游戏画布
        // 2.如果玩家（主要角色）在移动，则需要朝反方向多绘制，不然有黑边
        // 3.下方应多延申一些显示区域，不然显示不完整
        //  这是由于因为传奇地图对象层图片的切片方式导致的
        //  我们可以浏览object*图片库，会发现图片大多是固定宽度（48），长度不定
        //  结合.map描述来看，会发现图片的anchor（锚点）是下方
        //  因此如果下方不多绘制，就会出现一些奇异现象，比如树木的中间是空的，往下走才会显示出来
        const rectPixel = new PIXI.Rectangle // 绘制区域（像素）
        const rectGame = new PIXI.Rectangle // 绘制区域（地图坐标）
        {
            // 画布横向可容纳的一半地图块数量（为了视觉效果更好，先减去一个用于绝对居中的块）
            const maxHalfCellH =  Math.ceil((this.width - 48) / 2 / 48);
            // 画布纵向可容纳的一半地图块数量（为了视觉效果更好，先减去一个用于绝对居中的块）
            const maxHalfCellV = Math.ceil((this.height - 32) / 2 / 32);
            
            // 从画布中间往左最多能延申的块数量（-10是冗余缓存量）
            let leftMinCell = this.roleX - maxHalfCellH - 10;
            for(;leftMinCell < 1;++leftMinCell); // 避免溢出，最小为1
            // 从画布中间往上最多能延申的块数量（-10是冗余缓存量）
            let topMinCell = this.roleY - maxHalfCellV - 10;
            for(;topMinCell < 1;++topMinCell);
            // 从画布中间往右最多能延申的块数量（-10是冗余缓存量）
            let rightMaxCell = this.roleX + maxHalfCellH + 10;
            for(;rightMaxCell > this.map.width;--rightMaxCell);
            // 从画布中间往下最多能延申的块数量（-50是冗余缓存量）
            let bottomMaxCell = this.roleY + maxHalfCellV + 50;
            for(;bottomMaxCell > this.map.height;--bottomMaxCell);
            
            rectGame.x = leftMinCell;
            rectGame.y = topMinCell;
            rectGame.width = rightMaxCell - leftMinCell + 1;
            rectGame.height = bottomMaxCell - topMinCell + 1;
            
            rectPixel.x = (this.width - 48) / 2 - (this.roleX - leftMinCell) * 48; 
            rectPixel.y = (this.height - 32) / 2 - (this.roleY - topMinCell) * 32;
            rectPixel.width = (rightMaxCell - leftMinCell + 1) * 48;
            rectPixel.height = (bottomMaxCell - topMinCell + 1) * 32;
        }

        // 查看是否所有纹理都加载完成
        let textureLoadCompleted = true
        // 绘制（构建节点列表）
        let drawingX = rectPixel.x
        let drawingY = rectPixel.y
        for (let w = 0; w < rectGame.width; ++w) {
            drawingY = rectPixel.y;
            for (let h = 0; h < rectGame.height; ++h) {
                const tileTextureName = this.map.tilesTextureName[rectGame.x + w][rectGame.y + h]
                if (null != tileTextureName) {
                    const tex = PIXI.utils.BaseTextureCache[tileTextureName]
                    if (!tex) {
                        textureLoadCompleted = false
                        Images.load(tileTextureName.split('/')[0], tileTextureName.split('/')[1])
                    } else {
                        // 添加大地砖节点到游戏区域
                        const sprite = new PIXI.Sprite(new PIXI.Texture(tex))
                        sprite.x = drawingX
                        sprite.y = drawingY
                        this.bngContainer.addChild(sprite)
                    }
                }
                drawingY += 32;
            }
            drawingX += 48;
        }
        
        drawingX = rectPixel.x;
        for (var w = 0; w < rectGame.width; ++w) {
            drawingY = rectPixel.y;
            for (var h = 0; h < rectGame.height; ++h) {
                const smTileTextureName = this.map.smTilesTextureName[rectGame.x + w][rectGame.y + h]
                if (null != smTileTextureName) {
                    const tex = PIXI.utils.BaseTextureCache[smTileTextureName]
                    if (!tex) {
                        textureLoadCompleted = false
                        Images.load(smTileTextureName.split('/')[0], smTileTextureName.split('/')[1])
                    } else {
                        // 添加小地砖节点到游戏区域
                        const sprite = new PIXI.Sprite(new PIXI.Texture(tex))
                        sprite.x = drawingX
                        sprite.y = drawingY
                        this.bngContainer.addChild(sprite)
                    }
                }
                drawingY += 32;
            }
            drawingX += 48;
        }

        // 所有纹理都加载完了，就修改标志
        if (textureLoadCompleted) this.dirty = false
    }
}

export { MapActor }