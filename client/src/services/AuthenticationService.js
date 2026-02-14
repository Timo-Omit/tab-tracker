//Hitting a future "register" endpoint
import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

/* AuthenticatonService.register({
    email: 'testing@gmail.com',
    password: '123456'
})  */