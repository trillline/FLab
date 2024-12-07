const SumThreeValues = (a = 10, b, c) => a + b + c; //стрелочная функция сложения трёх чисел
let fir = 10; //целочисленные значения трёх переменных
let sec = 30;
let thr = 40;
let a; //void
let a2; //any
let b = "TestValue"; //string
let c = BigInt(10); //bigint
let d = null; //undefined
let f = true; //boolean
let g = [1, 2, 3, 4, 5]; //array number
let z = [1, 2, 3]; // array number
let zxc = [2, 'pac', true]; //tuple
const zxc1 = 'HellYeah';
let func;
func = SumThreeValues;
let func1;
const data = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
};
const JsonPerson = JSON.stringify(data);
console.log(JsonPerson);
console.log(SumThreeValues(fir, sec, thr));
