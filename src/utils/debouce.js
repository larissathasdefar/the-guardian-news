export function debounce(fn, delay) {
    let timer = 0
    return function(arg) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(arg), delay)
        return timer
    }
}
