/* Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

let pepper = { name: 'перец', price: 20 };
let cinnamon = { name: 'корица', price: 40 };
let coriander = { name: 'кориандр', price: 60 };
let salt = { name: 'Соль', price: 10 };



let inBasket1 = [];

const basket = {
    inBasket: inBasket1,

    basketPriceCounter: function () {
        let basketPrice = 0;

        for (i = 0; i < this.inBasket.length; i++) {
            basketPrice = basketPrice + this.inBasket[i].price;
        }
        return basketPrice;
    },

    basketReview: function () {
        console.log('В корзине:');
        for (i = 0; i < this.inBasket.length; i++) {
            console.log(this.inBasket[i].name + ' — ' + this.inBasket[i].price + ' руб');
        }
        console.log('Стоимость заказа: ' + this.basketPriceCounter());
    },

    toBasket: function (product) {
        this.inBasket.push(product);
        return this.basketReview();
    },

    fromBasket: function (product) {
        this.inBasket.pop();
        return this.basketReview();
    },
};
