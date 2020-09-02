// 1
console.log('HW#1:')
const getMaxDigit = getNumber => {
  const number = getNumber.toString().slice('')
  return Math.max(...number)
}
console.log(getMaxDigit(12312345678)); //<----- 8

// 2
// function getDegree(number, degree) {
//     let equally = 1;
//     for (let i = 1; i <= degree; i++) {
//         equally *= number;
//     }
    
//     return equally;
// }

// // console.log(getDegree(2, 5)); <-------- 32

// // 3

// function capitalize(name = 'paSHka9') {
//     name = name.toLowerCase().split('');
//     let a = name.shift().toUpperCase();
//     nameLowerCas = a + name.join('');
//     return nameLowerCas;
// }
// // console.log(capitalize()); <--------- Pashka9

// //4

// function a(zp = 1000, proc = 19.5) {
// 	return zp - (zp * proc / 100);
// }

// // console.log(a()); <--------- 805

// // 5

// function a (x, y){
//   return parseInt(x + Math.random()* (y + 1 - x))
// }

// // console.log(a(5,6)); <------------ [5,6]

// // 8

