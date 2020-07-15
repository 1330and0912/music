export function checkPhone(phone) {
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    return myreg.test(phone)
}
