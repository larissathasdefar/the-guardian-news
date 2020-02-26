import { evolve, concat, __ } from 'ramda'
import {
    START_LOAD_NEWS,
    END_LOAD_NEWS,
    SET_NEWS,
    ADD_NEWS,
} from '../constants'

const initialState = {
    news: [],
    loading: false,
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case START_LOAD_NEWS:
            return evolve({ loading: () => true }, state)
        case END_LOAD_NEWS:
            return evolve({ loading: () => false }, state)
        case SET_NEWS:
            return evolve({ news: () => action.news }, state)
        case ADD_NEWS:
            return evolve({ news: concat(__, action.news) }, state)
        default:
            return state
    }
}

export default home
