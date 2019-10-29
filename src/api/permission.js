import axios from '@/config/httpConfig'

export function getTeSt() {
    return axios.get('/selectConfig')
}
export function getTeSt2() {
    return axios.get('/aduitResult')
}