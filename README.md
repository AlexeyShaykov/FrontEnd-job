# Тестовое задание на позицию frontend-разработчик

> Задача №1 — code refactoring

Первое, что бросается в глаза — имя функции
и входные параметры

```
function func(s, a, b)
```

имя должно отображать суть происходящего: в данном примере
функция ищет в строке совпадения по входящим символам
и возвращает максимальный индекс совпадений.

далее внутри функции первым действием происходит проверка
на пустую строку

```
s.match(/^$/)
```
для этого можно использовать простую проверку
```
s === '' || s == null
```
далее стоит уйти от while со сложным условием остановки

```
while ((aIndex == -1) && (bIndex == -1) && (i > 0))
```
в пользу цикла для массива символов входящей строки

```
[...str].every((element, index) => {}
```
весь код функции

```
function getSignIndex(str, firstSign, secondSign) {
	if (str === '' || str == null) {
		return -1
	}

  let firstIndex = -1;
  let secondIndex = -1;

  [...str].every((element, index) => {
    if (element === firstSign) {
      firstIndex = index;
    }
    if (element === secondSign) {
      secondIndex = index;
    }
    if (firstIndex >= 0 && secondIndex >= 0) {
      return false;
    } else {
      return true;
    }
  })

  return Math.max(firstIndex, secondIndex);
}
```

-----

> Задача №2 — практическое задание

## :moneybag: Терминал оплаты услуг сотовой связи

## :hammer: Установка проекта
``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

## :muscle: В создании проекта принимали участие

[VueJS](https://vuejs.org/) | [Vuex](https://vuex.vuejs.org/en/) | [Vue-router](https://router.vuejs.org/en/) | [Vuetifyjs](https://vuetifyjs.com/en/) | [Vue-cli](https://github.com/vuejs/vue-cli) |
[Vue-toasted](https://github.com/shakee93/vue-toasted) |
[Webpack](https://webpack.js.org/) |
[es6](http://es6-features.org/)
