let str = "sekolah";
let name = 'affan';
let phrase = `marina bay${str}`;
console.log(phrase);

let rara = str + name;

console.log(rara.concat(phrase));

function merge(str) {
    return `hello ${str}`;
}

console.log(merge('fikri'));


let n = 23;
console.log(typeof(n));

let benar = true;

console.log(benar);

// Objek
let orang = {
    name: "suharno",
    kelas: 2,
    sekolah: "smp"
};

console.log(orang);

// Array
let namas = ["suku", "sasa", "sdfd"];

console.log(namas[0]);

let use;

console.log(use);

// Addition
console.log("Add", 10 + 15 ,"\n");

// Subtraction
console.log("Sub", 90 - 40 ,"\n");

// Multiplication
console.log("Mul", 5 * 5 ,"\n");

// Division
console.log("Div", 10 / 5 ,"\n");

// Exponentiation
console.log("Exp", 10 ** 2 ,"\n");

// Modulus
console.log("Mod", 7 % 2 , "\n"); 

// Increment
let incNum = 10;
incNum = ++incNum;
console.log("Inc", incNum ,"\n");

// Decrement
let decNum = 5;
decNum = --decNum;
console.log("Dec", decNum,"\n");
