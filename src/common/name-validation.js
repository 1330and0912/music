export function checkName(nickname) {
    let regx = /[\u4e00-\u9fa5]{2,}|[a-zA-Z]{8,}/
    return regx.test(nickname)
}
