import axios from 'axios'

const instance = axios.create()

export const RequestAPI = {
    addValueCheckbox(checkboxValue: boolean) {
        return instance.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checkboxValue})
    }
}
