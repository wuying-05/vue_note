var name = "小明";

function sum(num1, num2) {
    return num1 + num2;
}
var flag = true;
if (flag) {
    console.log(sum(13, 14));
}
export { //导出一个对象，它包含变量或函数等数据，准备让其它模块导入后使用（常用）
    flag,
    sum
}
/* 其它的一些导出 */
export var height = 1.77; //导出变量
export function add_num(num1, num2) { //导出函数
    return num1 + num2;
}
export class Person { //导出类
    run() {
        console.log("运行");
        return "运行";
    }
}
/* 某些情况下，一个中包含某个的功能，我们并不希望这个功能命名，而且让导入者可以自己来命名，这时候就使用export default */
//export default 匿名导出，每个模块最多存在一个匿名导出，匿名导出可供导入时自定义变量名
const author = "沉木";
export default author;