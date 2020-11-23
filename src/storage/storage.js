export class SessionData {
    constructor() {

    }

    static getItem(key) {
        if (window.sessionStorage.getItem(key)) {
            return JSON.parse(window.sessionStorage.getItem(key))
        } else {
            return false
        }
    }

    static removeItem(key) {
        if (window.sessionStorage[key]) {
            window.sessionStorage.removeItem(key)
        } else {
            console.log(new Error('key不存在'))
        }
    }

    static setItem(key, value) {
        value = JSON.stringify(value)
        window.sessionStorage.setItem(key, value)
    }
}

export class LocalData {
    constructor() {

    }

    static getItem(key) {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        } else {
            return false
        }
    }

    static removeItem(key) {
        if( window.localStorage[key]){
            window.localStorage.removeItem(key)
        }else {
            console.log(new Error('key不存在'))
        }
    }

    static setItem(key, value) {
        value = JSON.stringify(value)
        window.localStorage.setItem(key, value)
    }
}

