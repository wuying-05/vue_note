# 前端路由(用于映射SPA单页面富应用中页面结构与渲染)
- href会请求后端并刷新页面，而前端路由不会请求后端也能改变页面
## 页面浏览记录用的栈结构保存的
- history.pushState({},"home")  加入新路由
- history.back()  返回上一路由
- history.replaceState({},"about")  替换当前路由
## 安装与使用
- 终端：npm install vue-router --save
- vue-router也是个插件，所以通过Vue.use()来安装路由功能
  + 导入 路由对象，并且main.js调用 Vue.use(VueRouter)
  + 创建 路由实例，传入路由映射配置
  + 在Vue实例中挂载合建的路由实例
