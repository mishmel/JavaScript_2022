// ДЗ 3
/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

// let num = 2;
// while (num <= 100) {
//         let flag = true;
//         for (let i = 2; i < num; i++) {
//                 if (num % i == 0) {
//                         flag = false;
//                         break;
//                 }
//         }
//         if (flag == true)
//                 console.log(num);
//         num++;
// }

/* С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины
в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. 
Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

let basket = [];

function addToBasket(a) {
        basket.push(a);
        return basket
}

addToBasket(['apples', '25', '2']);
addToBasket(['bananas', '50', '4']);
addToBasket(['cherry', '100', '2']);

function countBasketPrice() {
        let priceBasket = 0;
        for (let i = 0; i < basket.length; i++) {
                priceBasket += basket[i][1] * basket[i][2];
        }
        return priceBasket;
}

alert(countBasketPrice());
// addToBasket(['cherry', '100', '2']);
// alert(countBasketPrice());