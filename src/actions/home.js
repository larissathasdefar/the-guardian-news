import { START_LOAD_NEWS, END_LOAD_NEWS, SET_NEWS, ADD_NEWS } from '../constants'
import { showNotification } from './notification'
import { get } from '../utils/api'

export const startLoadNews = () => ({
    type: START_LOAD_NEWS,
})

export const endLoadNews = () => ({
    type: END_LOAD_NEWS,
})

export const setNews = news => ({
    type: SET_NEWS,
    news,
})

export const addNews = news => ({
    type: ADD_NEWS,
    news,
})

export const loadNews = page => {
    return dispatch => {
        dispatch(startLoadNews())
        return get('/search', { page })
            .then(({ response: { results, currentPage } }) => {
                if (currentPage === 1) {
                    dispatch(setNews(results))
                } else {
                    dispatch(addNews(results))
                }
            })
            .then(() => dispatch(endLoadNews()))
            .catch(err => {
                console.log(err.message)
                dispatch(showNotification({
                    type: 'error',
                    message: 'There was an error loading news, try again later.',
                }))
            })
    }
}
