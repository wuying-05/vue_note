// 位置：./store/index.js
// 1,引入插件
import Vue from "vue"
import Vuex from "vuex"

// 2，安装插件
Vue.use(Vuex);

// 3，创建对象
const store = new Vuex.Store({
    //【state:状态】------ ----- ---- ---【state:状态】 --- ---- ----- ------ 【state:状态】
    state: {//状态
        num: 18
        , students: [
            {
                name: "小白",
                age: 11
            }
            , {
                name: "小黑",
                age: 22
            }
            , {
                name: "小红",
                age: 33
            }
        ]
    }
    //【mutations:改变状态】------ ----- ---- ---【mutations:改变状态】 --- ---- ----- ------ 【mutations:改变状态】
    , mutations: {//改变状态的方法，其中的每个方法默认传入state
        // 被所有组件调用唯一方式：this.$store.commit("change_num"[,对象参数])
        // 一般要先初始化再使用，但也可以用Vue.set(对象,键,值)方法响应式添加属性，Vue.delete(对象,属性名)响应式删除对象属性
        change_num() {
            state.num++;
        },
        aUpdateInfo() {
            state.students[0].name = "老王"
        }
    }
    , actions: {//有异步操作的方法，其中的方法默认传入context（上下文，环境，语境）
        // 被所有组件调用唯一方式：this.$store.disqatch("change_num"[,对象参数])
        aUpdateInfo(context) {
            // 有时完成异步后可以用Promis回调.then()
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit("updateInfo")
                }, 1000);
            })
        }
    }
    //【getters:计算属性】------ ----- ---- ---【getters:计算属性】 --- ---- ----- ------ 【getters:计算属性】
    , getters: {//计算属性，对状态需要处理后的数据
        // 被组件使用：$store.getters.more20stu
        more20stu(state) {
            return state.students.filter(n => n.age > 20);
        }
        , more20stu(state, getters) {//第二个参数固定为getters
            return getters.more20stu.length;
        }
        , more20stu(state) {
            return function name(age) {//需要其它参数时可返回成一个函数
                return state.students.filter(n => n.age > age);
            }
        }
    }
    //【modules:子管家模块】------ ----- ---- ---【modules:子管家模块】 --- ---- ----- ------ 【modules:子管家模块】
    , modules: {//相当于大管家的子管家,子管家有自己的独立作用域,它保存在大管家的state中，
        // 被.vue组件调用小仓库:this.$store.state.mod_a.age
        // 而其它属性同大管家一样调用 this.$store.commit("change_age_2"[,对象参数])
        mod_a: {
            state: {
                age: 10
            }
            , mutations: {
                change_age_2() {
                    state.age++;
                }
            }
            , actions: {}
            , getters: {} // 默认传入context，contxt.rootGetters可访问大管家的getters,同理context.rootState也是
        },
        mod_b: {

        }
    }
});

// 最后，导出到main.js然后注册
export default store;

// 补充：对象的解构
//  const {name ,heigth ,age} = obj // 定义常量name,heigth,age分别取出对象中对应属性值 