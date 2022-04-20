const vm = new Vue({
    el: "#app",
    data: {
        books: [{
                id: 1,
                name: "《算法导论》",
                date: "2006-9",
                price: 85.00,
                count: 1,
            },
            {
                id: 2,
                name: "《UNIX编程艺术》",
                date: "2006-2",
                price: 59.00,
                count: 1,
            },
            {
                id: 3,
                name: "《编程珠玑》",
                date: "2008-10",
                price: 39.00,
                count: 1,
            },
            {
                id: 4,
                name: "《代码大全》",
                date: "2006-3",
                price: 128.00,
                count: 1,
            }
        ]
    },
    methods: {
        /* 购买数量增加 */
        increment(index) {
            this.books[index].count++;
        },
        /* 购买数量减少 */
        decrement(index) {
            this.books[index].count--;
        },
        removeHandle(index) {
            this.books.splice(index, 1);
        }

    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            /* 第一种，for循环遍历 */
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count;
            }
            /* 第二种，for in 循环遍历 */
            // for(let i in this.books){//i取出的是每个数据的index
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            /* 第三种，for of 循环遍历 */
            for (let item of this.books) {
                totalPrice += item.price * item.count;
            }
            return totalPrice;
        }
    },
    filters: { //过滤器的使用:格式 参数 | 过滤器方法名
        /* 过滤器会把|前面的参数作为函数的参数传入方法，进行处理后传出处理后的值 */
        showPrice(price) {
            return "￥" + price.toFixed(2);
        }
    }
});
