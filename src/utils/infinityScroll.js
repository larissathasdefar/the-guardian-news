import { useCallback, useEffect, useRef } from 'react'
import { debounce } from './debouce'

const SCROLL_LIMIT = 300
const DEBOUNCE_TIME = 800

export const useScroll = (props) => {
    const documentElement = useRef(document.documentElement)
    const element = documentElement.current

    const handler = useCallback(() => {
        const { scrollHeight, scrollTop } = element
        const height = window.innerHeight
        const isBottom = (scrollHeight - (scrollTop + height)) < SCROLL_LIMIT
        const hasScroll = height !== scrollHeight
        if (isBottom
            && hasScroll
            && props.onReachEnd) {
            props.onReachEnd()
        }
    }, [element, props])

    const scroll = useCallback(debounce(handler, DEBOUNCE_TIME), [handler])

    useEffect(() => {
        window.addEventListener('scroll', scroll)

        return () => {
            window.removeEventListener('scroll', scroll)
        }
    }, [element, element.tagName, scroll])
}
