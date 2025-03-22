// Напиши функцію makeArray, яка приймає три параметри:
// firstArray (масив), secondArray (масив) і maxLength (число).
// Функція створює новий масив із усіма елементами
// з firstArray, а потім із secondArray.

// Якщо кількість елементів у новому масиві більше maxLength,
// функція повертає копію масиву з довжиною maxLength.
// В іншому випадку повертає весь новий масив.

function makeArray(firstArray, secondArray, maxLength) {
  const resultArray = firstArray.concat(secondArray);
  if (resultArray.length > maxLength) {
    return resultArray.slice(0, maxLength);
  } else {
    return resultArray;
  }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
