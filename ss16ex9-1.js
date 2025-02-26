let myStr = prompt("Nhap chuoi");
let firstWord = myStr.charAt(0);
let capitalFirstWord = firstWord.toUpperCase();
let otherWords = myStr.slice(1);
let normalWords = otherWords.toLowerCase();
console.log(capitalFirstWord + normalWords);
