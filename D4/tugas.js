// 1, 3, 4, 7, 8, 10
let aray = 4;
if (aray %2 == 0){
    console.log(aray + " adalah Bilangan genap");
} else {
    console.log(aray + "Belangan ganjil");
}

// 1, 3, 4, 7, 8, 10
// klasifikasikan semua bilangan di atas termasuk bilangan ganjil atau bilangan genap

// cara 1
let angka = 4;

if (angka % 2 === 0) {
    console.log(angka + " Adalah Bilangan Genap");
} else {
    console.log(angka + " Adalah bilangan Ganjil");
}

console.log("\n======================\n");

// // cara 2
const nums = [1, 3, 4, 7, 8, 10];

nums.forEach(num => {
    if (num % 2 === 0) {
        console.log(num + " Adalah Bilangan Genap");
    } else {
        console.log(num + " Adalah bilangan Ganjil");
    }
});
