/*
/!* Push*!/
let list= [];
list.push('Fireman');
list.push('Freedom');
list.push('Police');
list.push('Batman');
list.push('Kawasaki')


console.log(list);

console.log(list.length);

console.log(list.pop());

console.log(list);

console.log(list.pop());

console.log(list);

console.log(list.pop());

console.log(list);*/
/*
/!* Unshift & Shift (Arraya malumot kirritish va chiqarib olish)*!/
let list = [];;
list.unshift('Olov');
list.unshift('Komol');
list.unshift('Bekzod')
list.unshift(14);

console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
*/
/*
/!*sort (tartibga krltirish)*!/

let list = ['Komol','Saman','Olovid','Ozod','Bekzod','Muhammadammin','Shaxzod'];

console.log(list.sort().reverse());*/
let  sonlar = [6,78,63,52,2,3,4];
let tartiblanmanganSonlar = sonlar.sort(function (a,b){
    return a-b;
})
console.log(tartiblanmanganSonlar.reverse());