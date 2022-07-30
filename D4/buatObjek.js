// * TODO
//  * 1. Buatlah variabel dengan nama restaurant yang object dengan ketentuan berikut:
//  *    - Memiliki properti bernama "name"
//  *       - Bertipe data string
//  *       - Bernilai apa pun, asalkan tidak string kosong atau null.
//  *    - Memiliki properti bernama "city"
//  *       - Bertipe data string
//  *       - Bernilai apa pun, asalkan tidak string kosong atau null.
//  *    - Memiliki properti "favorite drink"
//  *       - Bertipe data string
//  *       - Bernilai apa pun, asalkan tidak string kosong atau null.
//  *    - Memiliki properti "favorite food"
//  *       - Bertipe data string
//  *       - Bernilai apa pun, asalkan tidak string kosong atau null.
//  *    - Memiliki properti "isVegan"
//  *       - Bertipe data boolean
//  *       - Bernilai boolean apa pun.
//  *
//  * 2. Buatlah variabel bernama name.
//  *    Kemudian isi dengan nilai name dari properti object restaurant
//  * 3. Buatlah variabel bernama favoriteDrink.
//  *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
// 

const restaurant = {
    name: "affan",
    city: "Depok",
    'favorite drink': "jus orange",
};

const name = restaurant.name;

const favoriteDrink = restaurant['favorite drink'];

delete restaurant.name;

restaurant.name = "affdan";
restaurant['fafa'] = "afafa";

console.log(restaurant);


// Array
const Hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];

// Hari.push('adfadf');

// Hari.pop();

// Hari.unshift("libur");
// Hari.shift();

// delete Hari[4];

Hari.splice(2, 1);

console.log(Hari);
console.log(Hari.length);

// Kuis Array
// * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
// *   - Array tersebut menampung bilangan genap dari 1 hingga 100
// *


const evenNumber = [];
for (let i = 1; i <= 100; i++) {
    if (i%2 === 0){
        evenNumber.push(i);
    }
}

console.log(evenNumber);


// Function
function perkalian(a, b){
    return a * b;
}

function strin(name, hobi){
    if (name == "jaja"){
        return "selamat datang affan " + name + " "+ hobi;
    } else if (name == "affan") {
        return "selamat datang " + name + ""+ hobi;
    } else {
        return "selamat datang kalain" + name + ""+ hobi;
    }
}

console.log(strin("affan", "jaja"));

