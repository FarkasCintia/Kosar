let tanulok = [
    {
        sorszam: 1,
        nev: "peti",
        neme: "fiú",
        eletkor: 15
    },
    {
        sorszam: 2,
        nev: "joe",
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
        nev: "ben",
        neme: "fiú",
        eletkor: 16
    }
]

//rövid fiúnevek vesszővel felsorolva: hossz <= 3: ben, joe
console.log("rövid fiúnevek vesszővel felsorolva");
//rövidnevűek
//csak a nevek
//join
let rovidNevuTanulok = tanulok.filter(tanulo => tanulo.nev.length <= 3)
.map(tanulo => tanulo.nev)
.join(", ");

console.log(rovidNevuTanulok);

