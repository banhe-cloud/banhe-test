const axios = require("axios");
axios.defaults.withCredentials = true;



//oss上传文件
export function upload(params) {
  return axios.post("/uploadImg", params, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

//登录
export function sign(params) {
  return axios.post("/sign", params);
}
//获取分类
export function getCatetory() {
  return axios.get("/catetory");
}
//获取文章列表
export function getArticle(params) {
  return axios.get("/article_list?aaa=1", { params });
}
//添加文章
export function addCatetory(params) {
  return axios.post("/addCatetory", params);
}
//删除分类
export function deleteCatetory(params) {
  return axios.post("/deleteCatetory", params);
}
//添加文章
export function addArticle(params) {
  return axios.post("/addArticle", params);
}
//获取文章详情
export function article_detail(params) {
  return axios.get("/article_detail", { params });
}
//删除文章
export function deleteArticle(params) {
  return axios.post("/deleteArticle", params);
}

//更新文章
export function updateArticle(params) {
  return axios.post("/updateArticle", params);
}
