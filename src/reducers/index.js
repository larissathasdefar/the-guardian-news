import { combineReducers } from 'redux'
import home from './home'
import notification from './notification'

export default combineReducers({
    home,
    notification,
})