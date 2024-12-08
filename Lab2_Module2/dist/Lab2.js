//variant 6
let arr = [1, 3, 5, 2, 10];
function arrMin(arrNum) {
    let min = 9999;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}
const arrN_2 = [
    ["oh", "my", "god"],
    ["incredible", "howitspossible", "wo"],
    ['its', "amazing", "idea"]
];
function arrMix(arrStr) {
    let arrBool = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (arrStr[i][j].length % 2 == 0) {
                arrBool[i][j] = false;
            }
            else {
                arrBool[i][j] = true;
            }
        }
    }
    return arrBool;
}
let BoolBoy = arrMix(arrN_2);
//cortege sum value numbers
let cortege = [132, 285];
function sumValueNumber(cor) {
    let sumfirst = 0;
    let sumSec = 0;
    let firstNum = cor[0];
    let secNum = cor[1];
    while (firstNum != 0) {
        sumfirst += firstNum % 10;
        firstNum /= 10;
    }
    while (secNum != 0) {
        sumSec += secNum % 10;
        sumSec /= 10;
    }
    return (firstNum == sumSec);
}
var AzotFundForRNK;
(function (AzotFundForRNK) {
    AzotFundForRNK["Adenin"] = "A";
    AzotFundForRNK["Uracil"] = "U";
    AzotFundForRNK["Guanin"] = "G";
    AzotFundForRNK["Citozin"] = "C";
})(AzotFundForRNK || (AzotFundForRNK = {}));
;
console.log(AzotFundForRNK.Adenin);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
let AngryHunt;
let Barsya;
function info(allPet) {
    if (Pet == Dog)
        console.log("I`m a dog. My label is " + this.label + ". Me " + this.age + " years old." + this.speak());
    else if (Pet == Cat)
        console.log("I`m a cat. My name is" + this.name + ". Me " + this.age + " years old." + this.speak());
}
info(AngryHunt);
info(Barsya);
let JessyPinkman = {
    Ingredient: AzotFundForRNK.Citozin,
    Age: 23,
    Cash: 0
};
const WalterJson = JSON.stringify(JessyPinkman);
console.log(WalterJson);
