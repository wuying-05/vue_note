// 位置：./network/request.js
import axios from 'axios'

export function request(config) {
    //1,创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 2,拦截器
    instance.interceptors.request.use(config => {
        // 1，比如config中的一些信息不符合服务器的要求
        // 2，比如每次发送网络 请求时， 都希望在界面 中显示一个请求的图标
        // 3，某些网络 请求(比如登录Token),必须携带一些特殊的信息
        return config;
    }, err => {
        console.log("发送请求错误！");
        console.log(err);
    })
    instance.interceptors.response.use(res => {

        return res.data;
    }, err => {
        console.log("接收响应错误！");
        console.log(err);
    })

    // 3,发送真正的网络请求,容器的是一个Promise对象
    return instance(config);
    // 在.vue组件中被使用：request({url:'XXX'}).then(res=>{}).catch(err=>{})

}
/* 
# 网络请求封装（axios:ajax i/o system）
    - 在浏览器中发送XMLHttpRequests请求
    - 在node.js中发送http请求
    - 支持Promise API
    - 拦截请求和响应
    - 转换请求各响应数据
    - 等等
## 安装 axios 网络请求插件
    - 终端：npm i axios --save
## axios对象常见的配置选项
    - 请求地址
      + url:'/user' 
    - 请求类型
      + method:'get'
    - 请求路径
      + baseURL:'http://www.mt.com/api'
    - 请求前的数据处理
      + transformRequest:[function(data){}] 
    - 请求后的数据处理
      + transformResonse:[function(data){}] 
    - 自定义的请求头
      + headers:{'x-Requested-With':'XMLHttpRequest'}
    - URL查询对象
      + params:{id:12} 
    - 查询对象序列化函数
      + paramsSerializer(params){}  
    - request body
      + data:{key:'aa'}  
    - 超时设置ms
      + timeout:5000  
    - 跨域是否带Token
      + withCredentials:false
    - 自定义请求处理
      + adapter:function(resolve,reject,config){}
    - 身份验证信息
      + auth:{uname:'',pwd:'123'}  
    - 响应的数据格式 json/blob/document/arraybuffer/text/stream
      + responseType:'json'
*/