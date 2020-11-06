let tanulok = [{
        sorszam: 1,
        nev: "peti",
        lakhely: "szolnok",
        neme: "fiú",
        eletkor: 15
    },
    {
        sorszam: 2,
        nev: "béla",
        lakhely: "szolnok",
        neme: "fiú",
        eletkor: 17
    },
    {
        sorszam: 3,
        nev: "enikő",
        lakhely: "budapest",
        neme: "lány",
        eletkor: 13
    },
    {
        sorszam: 4,
        nev: "anna",
        lakhely: "szolnok",
        neme: "lány",
        eletkor: 14
    },
    {
        sorszam: 5,
        nev: "áron",
        lakhely: "budapest",
        neme: "fiú",
        eletkor: 16
    }
]

//Nevek
console.log("\nNevek, és nevek vesszővel")
let nevekString = tanulok.map(tanulo => tanulo.nev)
    .join(": ");

console.log(nevekString);

//tanulok átalakító
console.log("\ntanulok átalakító")
let aTanulok = tanulok.map(tanulo =>
    ({
        sorszam: tanulo.sorszam,
        nev: NB(tanulo.nev),
        lakhely: NB(tanulo.lakhely),
        neme: tanulo.neme == "fiú",
        eletkor: tanulo.eletkor

    })
);

console.log(aTanulok);

function NB(szo){
    let elsoBetu = szo[0].toUpperCase();
    let tobbiBetu = szo.slice(1);
    return elsoBetu + tobbiBetu;

}