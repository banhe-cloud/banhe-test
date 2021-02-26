const axios = require('axios');
axios.defaults.withCredentials = true;


export function sign(params) {
    return axios.post('http://localhost:6789/sign',params)
}


export function getCatetory() {
    return axios.get('http://localhost:6789/catetory')
}
export function getArticle(params) {
    return axios.get('http://localhost:6789/article_list')
}
export function addCatetory(params) {
    return axios.post('http://localhost:6789/addCatetory',params)
}
export function deleteCatetory(params) {
    return axios.post('http://localhost:6789/deleteCatetory',params)
}
export function addArticle(params) {
    return axios.post('http://localhost:6789/addArticle',params)
}


