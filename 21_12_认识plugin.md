# 插件
    - 对vue某个功能进行扩充的高度封闭的代码
    - 插件需要下载=> 引入 => 初始化 => 注册
    - Vue.use()方法用于引入插件，插件大部分是中间件，所以重写时要调用next()
