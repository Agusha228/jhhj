
// Переменные:years myDog, guests, secret
// Функции:makeTea, dogYears, secret
// Встроенные функции: substr, substring, slice, result, replace, split 
// Аргументы:
// Параметры: dogName, age, cups, tea 


let to = 'JS';
console.log(to.toLowerCase());


let top1 = 'я люблю JS!';
let ayf = top1.substr(2, 6);
console.log(ayf);

let top2 = 'я люблю JS!';
let ayf2 = top2.substring(2, 7);
console.log(ayf2);

let top3 = 'я люблю JS!';
let ayf3 = top3.slice(2, 7);
console.log(ayf3);


var top4 = 'я-люблю-JS!'
console.log(top4.replace(/-/g, '!'));


let top5 = 'я люблю JS';
let atop1 = top5.split(' ');
console.log(atop1);


let top6 = 'привет мир';
let atop = top6.split('');
console.log(atop);


 let top7 = 'я красавчик';
 let n = 13;
 if(top.length > n){
     console.log(top.slice(0,14)+'...');
 } else{
     console.log(top);
 }

 
 let top8 = 'я люблю JS!';
 console.log(top8.indexOf('люблю'))

