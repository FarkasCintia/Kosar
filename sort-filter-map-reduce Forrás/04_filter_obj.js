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
        lakhely: "debrecen",
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

//Fiúk
console.log("\nFiúk")
let fTanulok = tanulok.filter(a => a.neme == "fiú");
console.log(fTanulok);

//15 éves fiúk
console.log("\n15 éves fiúk")
fTanulok = tanulok.filter(a => a.neme == "fiú" && a.eletkor == 15);
console.log(fTanulok);


//Fiúk száma
console.log("\nFiúk száma")
fTanulok = tanulok.filter(a => a.neme == "fiú");
console.log("Fiúk száma:",fTanulok.length);

//Mely városból jöttek
console.log("\nMely városokból jöttek")
let varosok = tanulok.map( tanulo => tanulo.lakhely );
let fVarosok = varosok.filter((varos,index) => varosok.indexOf(varos) == index);
console.log(fVarosok);


szamok = [1,2,3,4];
let duplazas = szamok.map(s => 2*s);
console.log(duplazas);