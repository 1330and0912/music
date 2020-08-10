import _ from 'lodash'

export function throttle(callback, delay,) {
    return _.throttle(callback, delay, {
        leading: true,
        trailing: false
    })
}
