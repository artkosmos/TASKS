/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

const helloWorld = () => { // явное возвращение функции
  return 'Hello, World!'
}

console.log(helloWorld()) // вывод вконсоль

const anotherHelloWorld = () => 'Hello, World, again!'
/* неявный возврат результата функции
может быть использован только с простыми\примитивными выражениями */

console.log(anotherHelloWorld())