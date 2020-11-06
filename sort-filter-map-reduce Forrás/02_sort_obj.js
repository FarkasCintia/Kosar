let tanulok = [{
        sorszam: 1,
        nev: "peti",
        neme: "fiú",
        eletkor: 15
    },
    {
        sorszam: 2,
        nev: "béla",
        neme: "fiú",
        eletkor: 17
    },
    {
        sorszam: 3,
        nev: "enikő",
        neme: "lány",
        eletkor: 13
    },
    {
        sorszam: 4,
        nev: "anna",
        neme: "lány",
        eletkor: 14
    },
    {
        sorszam: 5,
        nev: "áron",
        neme: "fiú",
        eletkor: 16
    }
]

//Sorszám szerint
console.log("\nSorszám szerint csökkenő")
tanulok.sort((a, b) => b.sorszam - a.sorszam);
console.log(tanulok);

//Név szerint
console.log("\nNév szerint")
tanulok.sort((a, b) => a.nev.localeCompare(b.nev));

// console.log(tanulok);

//Neme, azon belül név
console.log("\nNeme, azon belül név")
// tanulok.sort(function(a,b){
//     if (a.neme == b.neme) {
//         return a.nev.localeCompare(b.nev);
//     }else{
//        return a.neme.localeCompare(b.neme);
//     }
// });
tanulok.sort((a, b) => a.neme == b.neme ? a.nev.localeCompare(b.nev) : a.neme.localeCompare(b.neme));
console.log(tanulok);