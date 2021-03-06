const axios = require('axios');
axios.defaults.withCredentials = true;

//登录
export function sign(params) {
    return axios.post('http://localhost:6788/sign',params)
}
//获取分类
export function getCatetory() {
    return axios.get('http://localhost:6788/catetory')
}
//获取文章列表
export function getArticle(params) {
    return axios.get('http://localhost:6788/article_list?aaa=1',{params})
}
//添加文章
export function addCatetory(params) {
    return axios.post('http://localhost:6788/addCatetory',params)
}
//删除分类
export function deleteCatetory(params) {
    return axios.post('http://localhost:6788/deleteCatetory',params)
}
//添加文章
export function addArticle(params) {
    return axios.post('http://localhost:6788/addArticle',params)
}
//获取文章详情
export function article_detail(params){
    return axios.get('http://localhost:6788/article_detail',{params})
}
//删除文章
export function deleteArticle(params){
    return axios.post('http://localhost:6788/deleteArticle',params)
}

//更新文章
export function updateArticle(params){
    return axios.post('http://localhost:6788/updateArticle',params)
}


