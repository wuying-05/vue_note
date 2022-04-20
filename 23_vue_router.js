// 位置：./router/index.js
// 1,配置路由/映射表
import VueRouter from "vue-router"
import Vue from "vue"

// 5,传入所有路由对应.vue组件  
// 【【【  主页页面
import Home from "../components/Home.vue"
import homeNews_1 from "../components/homeNews_1.vue"
import homeNews_2 from "../components/homeNews_2.vue"
// 关于页面    路由懒加载：当代码量过大时，先放在服务器，用时在请求
const About = () => import('../components/About')
// 用户页面
import User from "../components/User"
import Profile from "../components/profile"  // 】】】

// 2,通过Vue.use(插件)来安装插件
Vue.use(VueRouter);

// 4,映射表
const routers = [
    {// 【【【
        path: '/home',// 路由键
        component: Home // 路由值
        , children: [//子路由，Home.vue组件的dom中可使用<router-link>和<router-view>
            {
                path: 'news_1',// 被选择：<router-link to="/home/news_1">
                component: homeNews_1
            }
            , {
                path: 'news_2',
                component: homeNews_2
            }
            , {
                path: '/',
                redirect: homeNews_1 // 子路由重定向
            }

        ]
    }, {//~额，强迫征：先声明,再使用
        path: '/',
        redirect: "/home" // 重定向，路由默认路径

    }// 】】】
    , {
        path: '/about',
        component: About
    }
    //【【【
    , {
        path: '/user/:userId',// 动态路由，同时：<reouter-link :to="'/user/'+user_id">
        component: User
        , name: "User"  //仅用于被keep-alive组件排除保存重定向
        , meta: {
            title: "用户"//此参数用于改页面标题
        }
    }
    , {
        path: '/profile',// 被传递参数1：<reouter-link :to="{path:'/profile',query:{name:'暗音',age:18}}">,此参数在路由值中$route.query使用
        // 被传递参数方式2: this.$router.push({path:'/profile',query:{name:'kobe',age:19,height:1.87} }}),此参数在路由值中$route.query使用
        component: Profile
        , name: "Profile" //仅用于被keep-alive组件排除保存重定向
        , meta: {
            title: "文档"//此参数用于改页面标题
        }
    }
    // 】】】
];

// 3,创建VueRouter对象
const router = new VueRouter({
    routers//映射表注册
    , mode: "history"//浏览记录路由改变方式
    , linkActiveClass: "active"//路由键处于活跃状态对应router-link将添加的类名
});

// 6，前置导航守卫：
router.beforeEach((to, from, next) => {
    //从from跳转到to
    document.title = to.matched[0].meta.title;
    next();//必须调用
});
// 7，后置导航守卫：
router.afterEach((to, from) => {
    document.title = "\'" + to.matched[0].meta.title + "\'";
});

// 最后,传出到main.js文件Vue实例对象中new Vue({router:router})注册前端路由
export default router;

//     <router-view> 是一个占位标签
// 路由键如何改变：
//     1,<router-link to="/home" tag="button" replace>全局组件标签(vue-router已全局注册)
//     2,所有.vue组件导出实例内都有$router对象（其实就是本文件最后导出的对象）：this.$router.push("/home")
//     补充：所有.vue组件导出实例内都有$route对象,即当前活跃的路由对象，一般组件用this.$route.params.属性名 来取得当前活跃路由中保存的属性值
// 动态路由：
//     1，一个页面path路径不确定时临时变量占位
// URL的组成：
//        协议://主机:端口/路径?查询#片段
//     scheme://host:port/path?query#fragment
// next(路由路径/false/error)
// <router-view>被<keep-alive exclude="Profile">包住过的路由定向可被保存不被销除
// 子组件内导航：
//     {beforRouterLeave(to,from,next){ this.path=this.$route.path; next(); }}  //activated(){this.$router.push(this.path)}//记录子组件定向
//  <keep-alive exclude="Profile,User">