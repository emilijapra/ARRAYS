
console.log("1uzd");
for (let i = 0; i < 10; i++) {
    console.log("labas");
}


console.log("2uzd");

for (let i = 0; i <= 9; i++) {
    console.log(i);

}

console.log("3uzd");
let words = ["Abrikosas", "Baklažanas", "Citrina", "Dilgelė", "Eglė" , "Figmedis" , "Gebenė" , "Hortenzija" , "Ieva" , "Jazminas"];
console.log(words);


console.log("4uzd");
console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);
console.log(words[4]);
console.log(words[5]);
console.log(words[6]);
console.log(words[7]);
console.log(words[8]);
console.log(words[9]);


console.log("5uzd");
console.log(words[9]);
console.log(words[8]);
console.log(words[7]);
console.log(words[6]);
console.log(words[5]);
console.log(words[4]);
console.log(words[3]);
console.log(words[2]);
console.log(words[1]);
console.log(words[0]);

console.log("6uzd");

for (let i = 10; i < 50; i+=2) {
    console.log(i);
}

console.log("7uzd");
let tuscia = "";
for (let i = 10; i < 50; i+=2) {
    if (i === 10 || i === 20 || i === 30 || i === 40 || i === 50) { continue; }
    console.log(tuscia + i + " ");
} 

console.log("8uzd");

for (let i = 0; i <= 20; i++) {
    sum = 0;
    if (i += 2)  { continue }
    sum++;
}
console.log(sum + " ");


//let num = 6;

//num % 2 == 0;
//num % 2 != 0;

console.log("9uzd");

let sum1 = 0;
let a = 0;
console.log(words);
for (let i = 0; i < words.length; i++) {
    

    a = words[i].length;
    if (a < 5 || a > 7) {
        sum1++
    }
}
 console.log(sum1);


 
 
 
 
 

    




