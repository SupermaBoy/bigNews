// 这是基本 地址
var bassUrl = 'http://localhost:8000';
// user 相关的接口地址
var URL_LOGIN = bassUrl + '/admin/login';//登录页面接口地址
var URL_LOGOUT = bassUrl + '/admin/logout';//推出页面接口
var URL_GET_USER = bassUrl + '/admin/getuser';//获取管理员信息接口2条
var URL_USER_INFO = bassUrl + '/admin/userinfo_get';// 获取管理员信息接口5条
var URL_EDIT = bassUrl + '/admin/userinfo_edit'; // 管理员信息修改接口

// article 相关接口地址
var ARTICLE_CATE_GET = bassUrl + '/admin/category_search';//文章类型的获取
var ARTICLE_CATE_ADD = bassUrl +'/admin/category_add'; //文章类型的增加
var ARTICLE_CATE_EDIT = bassUrl +'/admin/category_edit';//文章类型的 编辑接口
var ARTICLE_CATE_DEL = bassUrl +'/admin/category_delete';//文章类型的删除