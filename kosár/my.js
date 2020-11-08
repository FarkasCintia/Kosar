//Elemek
let inputItemName = document.getElementById("itemName")
let inputItemCount = document.getElementById("itemCount")
let inputItemBasePrice = document.getElementById("itemBasePrice")
let buttonAdd = document.getElementById("buttonAdd")
let spanSum = document.getElementById("sum")
let spanItemNames = document.getElementById("itemNames")
let ulItemList = document.getElementById("itemList")
let Table = document.getElementById("table")


//változók
let oTomb = [
    {
        itemName: "kenyér",
        itemCount: 3,
        itemBasePrice: 200
    },
    {
        itemName: "tej",
        itemCount: 5,
        itemBasePrice: 190
    },
    {
        itemName: "vaj",
        itemCount: 2,
        itemBasePrice: 300
    }
]



//Feliratkozás
buttonAdd.addEventListener("click", OnButtonClicked)

//Esemény kezelők
function OnButtonClicked(){
    //Validálás: üres nem lehet
    if (
            inputItemName.value == "" ||
            inputItemCount.value == "" ||
            inputItemBasePrice.value == "" 
    
        ) {
            return;
        
    }

    //Áru hozzáadása
    console.log("xxx")
    let objT = {
        itemName: inputItemName.value,
        itemCount: inputItemCount.value,
        itemBasePrice: inputItemBasePrice.value
    }
    oTomb.push(objT);

    //input ürítés
    inputItemName.value = null;
    inputItemCount.value = null;
    inputItemBasePrice.value = null;
    RenderList();
}

//üzelti logika
//a kosárl listája
RenderList();

function RenderList(){


    // ulItemList.innerText = "";

    // let mappedItemList = oTomb.map(function(o){
    //     let ar = o.itemCount*o.itemBasePrice;
    //     return `${o.itemName} - ${o.itemCount} - ${o.itemBasePrice}Ft (${ar}Ft)`
    // })

    // mappedItemList.forEach((element) => {
    //     let newLi = document.createElement("li");
    //     newLi.innerText = element;
    //     ulItemList.appendChild(newLi);
    // });

    Table.innerText = "";

    let tablazatkesz = oTomb;
    
    tablazatkesz.forEach(element => {
        let sor = document.createElement("tr");
            let oszlopNev = document.createElement("td");
            oszlopNev.innerText = element.itemName;
            sor.appendChild(oszlopNev);

            let oszlopDarab = document.createElement("td");
            oszlopDarab.innerHTML = element.itemCount;
            sor.appendChild(oszlopDarab);

            let oszlopAr = document.createElement("td");
            oszlopAr.innerHTML = element.itemBasePrice + " Ft";
            sor.appendChild(oszlopAr);

            let oszlopTorles = document.createElement("td");
                let torlesGomb = document.createElement("button");
                    torlesGomb.innerHTML = "Törlés";
                    torlesGomb.onclick = function(){
                        let index = oTomb.indexOf(element);
                        console.log(index);
                        oTomb.splice(index, 1);
                        RenderList();
                    }
                oszlopTorles.appendChild(torlesGomb);
            sor.appendChild(oszlopTorles);
        Table.appendChild(sor);
    });
    

    //Összegek
    spanSum.innerText = GetSum();
    spanItemNames.innerText = GetNames();
    

}

function GetSum(){
    let sum = oTomb.reduce(function(acc, o){
        return acc + o.itemCount*o.itemBasePrice;
    },0);

    return sum;
}

function GetNames(){
    let oname = oTomb.map(item => item.itemName);
    return oname.join(", ");
}
    


