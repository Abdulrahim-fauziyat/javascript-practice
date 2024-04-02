// console.log('hello world')
// console.error('an error')
// console.warn('warning')

// var,let,const.



// let age=30;
// console.log(age);


// let age=30;
// console.log(age);

// data types:strings,numbers,booleen,symbols,undefined


//  const name ='john';
// const age=30;
// const rating=4.5;
// const isCool= true;
// const x= null;
// const y= undefined;
// let z;

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof true)
// console.log(typeof z)

// we have erase etc

// concatenation

// console.log('my name is' + name + 'and i am' +  age)

// template string

// console.log('my name is ${name} and i am{age}');
 
// onsole.log(hello);
 
// const s='hello world!';
// console.log(s.substring(0,5))
// console.log(s.length)
// const s='technology,conputer,it'
// console.log(s.split(','))



// arrays are variables that hold multiple values


// const numbers = new Array(1,2,3,4,5)
// const fruits = new Array('apples','pear','oranges')

// console.log(numbers);
// fruits(3)='grapes'


// fruits.push('mangoes')

// fruits.unshift('strawberries')

// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('oranges'));


// console.log ( fruits);

//  const person={
//     firstName:'john',
//     lastName:'Doe',
//     age:30,
//     hobbies:('music','movies','sports'),
//     address: {
//         street:'50 jigo',
//         state:'abuja'
//     }
// }


//  console.log(person.hobbies)


// const {firstName, lastName,address:{city}} =person;

// console.log(city);

// person.email='john.gmail.com';


// console.log(person);


  


// let text1 = "What a very ";
// text1 += "nice day";
// document.getElementById("demo").innerHTML = text1;


// console.log(text1)



// var youLikeMeat=false;

// if  (youLikeMeat) {
// document.write("Here is the meat menu...");

    // this curly bracketis called a code block
// }



// var myNum=10;

// if  (myNum==10) {
// document.write("my num is greater than 10");

    // this curly bracketis called a code block

// } else{
//     document.write("my num is not equal to 10")
// }


// else means if not excute something else


// var youLikeMeat=true ;

// if  (youLikeMeat) {
// document.write("you like the meat menu...");

    // this curly bracketis called a code block
// }else{
    // document.write("you hate meat")
// }


// else if statement
// var myAge=49

// if(my>30){
//     // console.log("you are over 30");
//     document.write("you are over 30")
// }else if (myAge>20) {

//     // console.log("you are over 20")
//     document.write("you are over 20")
// }else if(myAge>10){
//     document.write("you are over 10")   
// } else{
//     document.write("you are not over 10")
// }





// var myAge=25;
// if (myAge>=18 && myAge <=30)
// if (myAge<18 ||myAge>30 ||myAge>25){
    // document.write("you aren't coming");

// } else{
//     document.write("you are cool dude");
// }

// wile loop use key words of wide. a loop check condition and repets codes





// var age=5;
// while (age  < 10){
//     console.log("you age is less than 10");
//      age++;
// }

// document.write("you are now over 10");

//  var links=document.getElementsByTagName("a")
// for (i=1; i > links.length; i++) {
//     console.log("this is link number" + i);
     
// }

// document.write("all links now loop");

// for (i=0; i <10; i++) {


//     if(i===5 || i===3){

//         continue;

//     }
//        console.log("i");
//          if(i===7){
//             break;
//          }
//     }


// console.log("i have broken out of the loop");





// var links=document.getElementsByTagName("a")

// for (i=0; i<links.length; i++){
//     links(i).className="links" + i;
// }


// function group logical codes together and calls/invoke the code


function getAverage(a,b,c,d,e,f,){
    // var average =(a=b)/2;
    var average =(a+b+c+e+f)/* this is called a local variable
    cause it is declared inside the function*/
    console.log(average)
    return average;
}

//  this is declared out side so it is called aglobal
/* variable */
  var myResult= getAverage(7,8,9,10,11,12);
  console.log("the average is" +myResult);

 function logResult(){
    console.log("the average is" +myResult + "inside the function");
 }

 logResult();























