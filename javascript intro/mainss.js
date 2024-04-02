// strings

let str1="i am the string with double quotation mark";
let str2='i am a string with single quote';
let str3=`i am the js template string. I can contain and execute js in me ${3+456}`; 
 /* template string*/

let str4=`The answer is  ${45+34}`;
let str5=`Answer this ${7<4}`;
let str6="Fauziyat created a double quotation string";
let str7='She also created single quotation';
let mat=`Execute this ${1200>300+40000}`;
const bottle=`Do this ${45==45}`;
var  zoeTech="my name is variable";
let marker=`compare this for me ${105-10}`;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);
console.log(mat);
console.log(bottle);
console.log(zoeTech);
console.log(zoeTech);
console.log(marker);
  
console.log(str1[0])
// string methods.
console.log(str1.length);
console.log(str1.split(" ").length);
console.log(str1.toLocaleUpperCase);
console.log(str1.charAt(16));
console.log(str1.charCodeAt(16));
let str11=str1.trim(str1);

console.log(str11);

console.log(str1.indexOf('w'));
console.log(str1.concat(str2,str3));

console.log(str1.includes("i"));
console.log(str1.lastIndexOf("w"));
console.log(str1.concat(str2,str3));
console.log(str1.valueOf());
console.log(str1.replace(" ", "zoetech"));
 console.log(str1.replaceAll(" ", "zoetech"));
 console.log("*".repeat(10));
 console.log(str1.slice(10,16));
 console.log(str1.substring(4.18));
 console.log( str11.split(" ").reverse().join(" "))
 
//  data structure are:
// Array
const firstArr = [true, 678, 567," hello mama",[456,234,789],{age:34,networth:"$344b"}];



// const Array2= new Array(3) .it is discouraged;

console.log(firstArr);
// console.log(Aray2);
// Accessing or reading values of an array

// read value with the array name and index

let first=firstArr[5];
console.log(first);

let removedE1= firstArr.pop()
console.log(removedE1);
console.log(firstArr);






