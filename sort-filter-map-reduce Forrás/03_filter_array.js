var szoveg = ["Joe", "Hi", "Ferike", "Ottó", "Béklácska"];

//Akik nevében van k betű
console.log("\nAkik nevében van k betű");
// let filteredSzoveg = szoveg.filter(function (a) {
//     // console.log(a)
//     return a.indexOf("k") >= 0;
// });
let filteredSzoveg = szoveg.filter( a => a.indexOf("k") >= 0);

console.log(filteredSzoveg);

//Rövid nevek: hossza <= 3
console.log("\nRövid nevek");
filteredSzoveg = szoveg.filter( a => a.length <= 3)
console.log(filteredSzoveg);
