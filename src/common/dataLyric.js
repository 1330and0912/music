export function dataLyric(lyric) {
    let newLyric = lyric.replace(/\[.*?\]/g, '').trim().split('\n')
    let lyricDuration = lyric.replace(/[\u4e00-\u9fa5 | a-z|A-Z |\[|\]|:|,]/g, '').trim().split('\n')            // this.lyricDuration = res.lrc.lyric.replace(/[\u4e00-\u9fa5 | a-z|A-Z |\[|\]|:|,]/g, ',')
    //把时间转换为秒
    lyricDuration = lyricDuration.map(item => {
        return item.slice(0, 2) * 60 + Number(item.slice(2))
    })
    let lyricArr = []
    newLyric.forEach((item, index) => {
        lyricArr.push({
            lyricStr: item,
            duration: lyricDuration[index]
        })
    })
    return lyricArr
}
