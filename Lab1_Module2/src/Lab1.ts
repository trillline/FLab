const SumThreeValues = (a: number, b: number, c: number) => a+b+c; //стрелочная функция сложения трёх чисел

let fir : number = 10; //целочисленные значения трёх переменных
let sec : number = 30;
let thr : number = 40;

let a: void; //void
let a2; //any
let b : string = "TestValue"; //string
let c : bigint = BigInt(10); //bigint
let d : undefined = null; //undefined
let f: boolean = true; //boolean
let g: number[] = [1,2,3,4,5]; //array number
let z: Array<number> = [1,2,3]; // array number
let zxc: [number,string,boolean] = [2,'pac',true]; //tuple
const zxc1: string = 'HellYeah';

let func: (a:number, b:number, d:number) => number;
func = SumThreeValues;

let func1: () => void;



interface Entity {
    id: number;
}

interface ToJsonStringify extends
Entity {
e1?: number;
e2: string;
}

const data: ToJsonStringify = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
}

const JsonPerson:string = JSON.stringify(data);

console.log(JsonPerson);

console.log(SumThreeValues(fir,sec,thr));