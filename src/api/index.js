import {request} from './request'
import {
    IsRegister,
    SendVerificationCode,
    CaptchaVerify,
    RegisterCellPhone,
    InitProfile,
    LoginCellphone,
    LoginStatus,
    GetLyric,
    GetSongURL,
    Search,
    RecentPlay,
    Banner,
    SearchHotDetail,
    DefaultSearchWord,
    Album,
    ArtistCategoryList,
    HotSong,
    SingerIntroduction,
    AlbumContent,
    SingleMV,
    MVUrl,
    MVComment,
    MVData,
    RelatedMVData,
    LikeList,
    SongDetail,
    LikeMusic,
    CollectSinger,
    SingerList,
    MVList,
    AllMV,
    SearchSuggest,
    DragonBar,
    RecommendPlayList,
    RecommendSong,
    RecommendMV,
    NeteaseMV, AlbumNewSt, TopList, PlayListDetail, HighqualityTags, TopPlayList, UserPlayList, UserDetail
} from "./resource";
import {fuchsia} from "color-name";
import PlaylistHighQuality from "../views/PlaylistHighQuality";

//@phone 手机号码 判断手机号码是否已注册
export function isRegister(phone) {
    return request({
        url: IsRegister,
        params: {
            phone,
            timestamp: new Date()
        }

    })
}

//@phone 手机号码 发送验证码
export function sendVerificationCode(phone) {
    return request({
        method: 'post',
        url: SendVerificationCode,
        data: {
            phone,
            //timestamp:new Date()
        }
    })
}

// @phone 手机号码
// @captcha 用户输入的验证码 检查验证码是否正确
export function captchaVerify(phone, captcha) {
    return request({
        url: CaptchaVerify,
        params: {
            phone,
            captcha
        }
    })
}

//账号注册
// @phone 手机号
// @captcha 验证码
// @password 密码
// @nickname 昵称
export function registerCellPhone(registerData) {
    console.log(registerData);
    return request({
        method: 'post',
        url: RegisterCellPhone,
        data: {
            phone: registerData.phone,
            captcha: registerData.securityCode,
            password: registerData.pwd,
            nickname: registerData.nickname
        }
    })
}

//@nickname昵称
//传入昵称初始化昵称
export function initProfile(nickname) {
    return request({
        url: InitProfile,
        params: {
            nickname
        }
    })
}

//@phone:电话号码
//@password:密码
//验证号码与密码进行登录
export function loginCellphone(phone, password) {
    return request({
        method: 'post',
        url: LoginCellphone,
        data: {
            phone,
            password,
            timestamp: new Date().getTime()
        }
    })
}

//获取用户登录状态
export function loginStatus() {
    return request({
        url: LoginStatus, params: {}
    })
}

//获取用户详细信息
//@id 用户id
export function getUserDetail(uid) {
    return request({
        url:UserDetail,
        params:{uid}
    })
}
//获取歌词
// @lyricID:音乐id
export function getLyric(lyricID) {
    return request({
        url: GetLyric,
        params: {
            id: lyricID
        }
    })
}

//获取音乐url
//@songID:音乐id
export function getSongURL(songID) {
    return request({
        url: GetSongURL,
        params: {
            id: songID
        }
    })
}

//获取用户最近播放
// 必选参数 : uid : 用户 id
// 可选参数 : type : type=1 时只返回 weekData, type=0 时返回 allData
export function getRecentPlay(uid, type = 0) {
    return request({
        url: RecentPlay,
        params: {
            uid,
            type,
        }
    })
}

//获取轮播图
// type:资源类型,对应以下类型,默认为 0 即PC
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
export function getBanner(type = 2) {
    return request({
        url: Banner,
        params: {
            type
        }
    })
}

//搜索
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；
// 默认为 1 即单曲 ,
// 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户,
// 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
export function search(keywords, limit = 30, type = 1, offset = 0) {
    return request({
        url: Search,
        params: {
            keywords, limit, type, offset,
        }
    })
}

//获取热搜榜记录
export function getSearchHotDetail() {
    return request({
        url: SearchHotDetail, params: {}
    })
}

//获取默认搜索关键词
export function getDefaultSearchWord() {
    return request({
        url: DefaultSearchWord, params: {}
    })
}

//获取搜索建议列表
//@type mobile为移动端
//@keywords 搜索关键字
export function getSearchSuggest(keywords, type = 'mobile') {
    return request({
        url: SearchSuggest,
        params: {type, keywords, timestamp: new Date()}
    })
}

//获取歌手专辑信息
// @id:歌手id,@limit:数据量 默认30
export function getAlbum(id, limit = 30) {
    return request({
        url: Album,
        params: {
            id, limit
        }
    })
}

//获取歌手专辑内容
//@id 专辑id
export function getAlbumContent(id) {
    return request({
        url: AlbumContent,
        params: {
            id
        }
    })
}

//获取歌手分类列表
// @limit : 返回数量 , 默认为 30
// @offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 ,
// 默认为 0 initial: 按首字母索引查找参数,如 /artist/list?type=1&area=96&initial=b
// 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传0
// @type 取值:
// -1:全部
// 1:男歌手
// 2:女歌手
// 3:乐队
// @area 取值:
// -1:全部
// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他
export function getCategoryList(area = 7, type = 1, limit = 30, offset = 0) {
    return request({
        url: ArtistCategoryList,
        params: {
            area, type, limit, offset
        },
    })
}

//获取歌手热门五十首歌曲
//@id:歌手id
export function getHotSongTop50(id) {
    return request({
        url: HotSong,
        params: {
            id
        }
    })
}

//获取歌手简介信息
// @id:歌手id
export function getSingerIntroduction(id) {
    return request({
        url: SingerIntroduction,
        params: {id}
    })
}

//获取歌手mv
//@id 歌手id
export function getSingleMV(id) {
    return request({
        url: SingleMV,
        params: {id}
    })
}

//获取mv url
//@id mvid
export function getMVUrl(id) {
    return request({
        url: MVUrl,
        params: {id}
    })
}

//获取mv评论
//@id mvid
export function getMVComment(id) {
    return request({
        url: MVComment,
        params: {id}
    })
}

//获取mv数据
//@mvid
export function getMVData(mvid) {
    return request({
        url: MVData,
        params: {mvid}
    })
}

//获取相关mv数据
//@mvid
export function getRelatedMVData(mvid) {
    return request({
        url: RelatedMVData,
        params: {mvid}
    })
}

//获取喜欢的音乐列表数据
//@uid 用户id
export function getLikeList(uid) {
    return request({
        url: LikeList,
        params: {uid}
    })
}

//获取歌曲详细信息
//@ids 歌曲id
export function getSongDetail(ids) {
    return request({
        url: SongDetail,
        params: {ids}
    })
}

//喜欢音乐
//@id 音乐id @like true喜欢 false取消喜欢 默认为true
export function likeMusic(id, like = true) {
    return request({
        url: LikeMusic,
        params: {id, like}
    })
}

//收藏歌手
//@id 歌手id @t 1为收藏 其余为取消
export function collectSinger(id, t = 1) {
    return request({
        url: CollectSinger,
        params: {id, t}
    })
}

//收藏歌手列表
export function getCollectSingerList() {
    return request({
        url: SingerList, params: {}
    })
}

//收藏MV列表
export function getCollectMVList() {
    return request({
        url: MVList, params: {}
    })
}

// 全部 mv
// 说明 : 调用此接口 , 可获取全部 mv
//
// 可选参数 :
//     area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
//
// order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
//
// limit: 取出数量 , 默认为 30
//
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
export function getAllMV(limit = 30, offset = 0, area = '内地') {
    return request({
        url: AllMV,
        params: {limit, offset, area}
    })
}

//获取首页圆形列表图标
export function getDragonBar() {
    return request({
        url: DragonBar,
        params: {}
    })
}

//获取每日推荐歌单
// @limit 数据量
export function getRecommendPlayList(limit = 6) {
    return request({
        url: RecommendPlayList,
        params: {limit}
    })
}

//推荐音乐
export function getRecommendSong() {
    return request({
        url: RecommendSong,
        params: {}
    })
}

//推荐mv
export function getRecommendMV() {
    return request({
        url: RecommendMV,
        params: {}
    })
}

//获取网易出品mv
export function getNeteaseMV(limit = 8) {
    return request({
        url: NeteaseMV,
        params: {limit}
    })
}

//获取新专辑
export function getAlbumNewSt() {
    return request({
        url: AlbumNewSt,
        params: {}
    })
}

//获取网易出品mv
export function getTopList() {
    return request({
        url: TopList,
        params: {}
    })
}

//获取歌单详情
// 必选参数 : id : 歌单 id
// 可选参数 : s : 歌单最近的 s 个收藏者,默认为8
export function getPlayListDetail(id) {
    return request({
        url: PlayListDetail,
        params: {id}
    })
}

//获取精品歌单标签
export function getPlaylistHighQuality() {
    return request({
        url: HighqualityTags,
        params: {}
    })
}

//获取精品歌单列表
export function getTopPlayList(limit = 100) {
    return request({
        url: TopPlayList,
        params: {limit}
    })
}

//获取用户歌单列表
export function getUserPlayList(uid) {
    return request({
        url: UserPlayList,
        params: {uid}
    })
}
