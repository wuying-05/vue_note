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