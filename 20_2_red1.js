import{height}from"./20_2_m1.js";//接收时需用{},里面是所需数据
import love from "./20_2_m1.js"//导入并命名指定模块匿名导出的数据，不能加{},而要给匿名数据命名
var name = "小红";
    var flag = false;
    if (!flag) {
        console.log(name + "没及格：" + flag);
    }
    console.log("小明的高:"+height+"米");
    console.log("作者："+love);