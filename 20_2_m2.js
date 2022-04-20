import { flag,sum } from "./20_2_m1.js";/* 导入指定模块导出的变量或函数
此处接收了./20_2_m1.js文件中导出的flag和sum */
/* 统一全部导入非匿名数据 ，导入数据太多时使用*/
import *as all_data from"./20_2_m1.js";//*通配符取到所有指定模块导出的数据（返回一个对象）并赋给all_data
    if (flag) {
        console.log("小明真帅!");
    } else {
        console.log("小明不帅...");
    }
    console.log("是否运行程序："+(new all_data.Person().run()=="运行"));