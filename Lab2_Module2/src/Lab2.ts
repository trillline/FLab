//variant 6
let arr: number[] = [1,3,5,2,10];

function arrMin(arrNum: number[]): number{
    let min = 9999;
    for(let i = 0; i < arr.length; ++i)
    {
        if(arr[i] < min)
            min = arr[i];
    }
    return min;
}

const arrN_2: string[][] =[
    ["oh", "my", "god"], 
    ["incredible", "howitspossible", "wo"], 
    ['its', "amazing", "idea"] 
];

function arrMix(arrStr: string[][]): boolean[][]{
    let arrBool: any[][] = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]
    for(let i = 0; i < 3; ++i)
    {
        for(let j = 0; j < 3; ++j)
        {
            if(arrStr[i][j].length % 2 == 0)
                {arrBool[i][j] = false;}
            else
            { arrBool[i][j] = true; }
        }
    }
    return arrBool;
}

let BoolBoy: boolean[][] = arrMix(arrN_2);

//cortege sum value numbers
let cortege: [number,number] = [132,285];

function sumValueNumber(cor: [number,number]): boolean{
    let sumfirst: number = 0;
    let sumSec: number = 0;
    let firstNum: number = cor[0];
    let secNum: number = cor[1];
    while(firstNum != 0)
    {
        sumfirst += firstNum % 10;
        firstNum /= 10;
    }
    while(secNum != 0)
    {
        sumSec += secNum % 10;
        sumSec /= 10;
    }
    return (firstNum == sumSec);
}

enum AzotFundForRNK{
    Adenin = 'A',
    Uracil = 'U',
    Guanin = 'G',
    Citozin = 'C'
};

console.log(AzotFundForRNK.Adenin);

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }

}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
   
}

let AngryHunt: Dog;

let Barsya: Cat;

function info(allPet: Pet) : void{
    if(Pet == Dog)
        console.log("I`m a dog. My label is " + this.label + ". Me " + this.age + " years old." + this.speak());
    else if (Pet == Cat)
        console.log("I`m a cat. My name is" + this.name + ". Me " + this.age + " years old." + this.speak());
}

info(AngryHunt);
info(Barsya);

interface WalterWhitePrototype{
    Ingredient: AzotFundForRNK;
    Age: number;
    Cash: number;
}

let JessyPinkman: WalterWhitePrototype = {
    Ingredient: AzotFundForRNK.Citozin,
    Age:23,
    Cash:0
};

const WalterJson: string =  JSON.stringify(JessyPinkman);
console.log(WalterJson);