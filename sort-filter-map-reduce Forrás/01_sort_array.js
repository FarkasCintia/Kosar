var szoveg = ["Joe", "Hi", "Ferike", "Ottó", "Bélácska"];
var szamok = [6, 3, 23, 4, 7];

//Abc szerint
console.log("\nAbc szerint");

// szoveg.sort(function(a,b){
//     return a.localeCompare(b);
// });
szoveg.sort((a, b) => a.localeCompare(b));
console.log(szoveg);

//Méret szerint
console.log("\nMéret szerint");
szoveg.sort((a, b) => a.length - b.length);
console.log(szoveg);

//Számok
console.log("\nSzámok");
szamok.sort((a, b) => b - a);
console.log(szamok);

//Utolsó betü szerint
console.log("\nUtolsó betü szerint");
szoveg.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
console.log(szoveg);