export function debounce(fn, dealy=3000,params) {
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(params)
        }, dealy)
    }
}
