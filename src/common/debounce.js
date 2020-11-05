export function debounce(fn, dealy=3000) {
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, dealy)
    }
}
