let egysegar = [200, 300, 500];
let mennyiseg = [1, 1, 2];
let aruk = ["kifli", "csemle", "cipó"];


//Összeadás: összesen háyn darab
console.log("\nÖsszeadás");
//reduce magyrázata
// let acc = 0;
// mennyiseg.forEach(element => {
//     acc =acc + element;
// });
// console.log(acc);
let osszmennyiseg = mennyiseg.reduce(function(acc, szam){
    return acc + szam;
})
console.log(osszmennyiseg);


//Összár
console.log("\nÖsszár")

let kosar = [{
        aru: "kifli",
        mennyiseg: 1,
        egysegar: 200
    },
    {
        aru: "zsemle",
        mennyiseg: 1,
        egysegar: 300
    },
    {
        aru: "cipó",
        mennyiseg: 2,
        egysegar: 500
    }
]

//Összár: objektumtömbbel
console.log("\nÖsszár: objektumtömbbel")
let osszar = kosar.reduce(function(acc, peksutemeny) {
    return acc + peksutemeny.mennyiseg * peksutemeny.egysegar;
},0)

console.log("összár:", osszar);
