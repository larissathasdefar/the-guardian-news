import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../constants'

export const showNotification = snack => ({
    type: SHOW_NOTIFICATION,
    snack
})

export const hideNotification = () => ({
    type: HIDE_NOTIFICATION
})