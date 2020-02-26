import { evolve, mergeLeft } from 'ramda'
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../constants'

const initialState = {
    snack: { open: false },
}

const notification = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return evolve({
                snack: mergeLeft({ open: true, ...action.snack })
            }, state)
        case HIDE_NOTIFICATION:
            return evolve({
                snack: mergeLeft({ open: false })
            }, state)
        default:
            return state
    }
}

export default notification