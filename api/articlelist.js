import axios from 'axios'
import request from '@/service'

//首页
export const getBlogList = (id,falge,size) => {
  return request.get(`lz/index/findArticleList.htm?falge=${falge}&id=${id}&size=${size}`);
}
export const getQueryBlogList = (title) => {
  return request.get(`lz/index/findQueryArticle.htm?title=${title}`);
}
//详情
export const getThisArticle = (id) => {
  return request.get(`lz/index/findthisArticle.htm?id=${id}`);
}
//阅读数增加
export const addReadNum = (id) => {
  return request.get(`lz/index/updateReadNum.htm?id=${id}`);
}
//点赞
export const addLoveNum = (id) => {
    return request.get(`lz/index/updateLoveNum.htm?id=${id}`);
}
//获取评论
export const getTalkList = (id) => {
  return request.get(`lz/index/findTalkList.htm?id=${id}`);
}
//增加评论
export const insertTalk = (talkJson) => {
  return request.get(`lz/index/insertTalk.htm?talkJson=${talkJson}`);
}
//建议搜索
export const getQueryString = (title) => {
  return request.get(`lz/index/findQueryString.htm?title=${title}`);
}

//留言板
export const getMessageList = () => {
  return request.get(`lz/index/findMessageList.htm`);
}
//增加留言
export const insertMessage = (content) => {
  return request.get(`lz/index/insertMessage.htm?content=${content}`);
}








