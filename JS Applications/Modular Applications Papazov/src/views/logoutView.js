import * as authServices from '../services/authServce.js'

export const logoutView = (ctx) => {
    authServices.logout()
    .then(() => {
        ctx.page.redirect('/')
    })
}