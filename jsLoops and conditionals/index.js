        //for loop (doing something and over and over again)
       // a) for --- of loop:use for an array
       // b) for --- in Loop: use for an object 
       // c) normal---for loop
       // 2. while loop
       // 3. do- while loop
        

        // print number 1 to 10

        for (let x = 0; x <= 10; x++) {
        
            // break;
            // if (x=== 5) break; 
            if (x== 5) continue; 

            console.log(x);
            
        }

        const nums =[4560, 55890,3400,411200];

        for (let i = 0; i <nums.length; i++) {
            console.log(i,nums[i]);

        }
        for( let num of nums) {
           let bonus = num * 0.35;
           let newSala = num + bonus;
           console.log(num,
            bonus,
            newSala.toLocaleString('en') );
        }
 let myObj={
        worth:100,
        school:"NGN",
        currency:"NGN",
        books:["Things fall apart", "There was a Country", "Joys of MotherHood"],

}

const values =Object.values(myObj)
const keys = Object.keys(myObj)
const entries = Object.entries(myObj)
console.log(values)
console.log(keys)
console.log(entries)

//for in

for(let obj in myObj) {
    console.log(obj,myObj[obj]);
}


//while loop

let index=0;
while (index < nums.length) {
       console.log(nums[index]);
    index++;
}

const copyArr = nums.slice();
console.log(copyArr);

let counter = copyArr.length ;
while (counter > = 0) {
    console.log ( copyArr[counter])
    copyArr.splice (counter,1)
    counter--;
}


//do(do something){

//} while(the condition is meant)//
  

// Assignment
 // use a  for loop to print out even number 0-100
 // use for loop to print  odd 0-100


   


    for (let evenNumbers = 2 ; evenNumbers<=100; evenNumbers+=2) {
        

        console.log(evenNumbers);
        
    }


    for(let oddNumbers= 1; oddNumbers<=100; oddNumbers++)  {

      if(oddNumbers % 2 === 1){
        console.log(oddNumbers)

      }

    };

    for (let primeNumbersNumbers = 1; primeNumbersNumbers<=100; primeNumbersNumbers+=2) {
  
          console.log(primeNumbersNumbers);
    };





    //USIMG SWITCH CASE as altrnative conditional statements

  let input = prompt("What is your bank ?","");

  switch(input.toUpperCase()){

    case "FIDELITY":
        let conf = confirm("Are yu sre f this");
        if( conf ){
          alert(" Bank to repose")
        }
    break;

    case "ZENITH":
        alert(" AHHHH Our BAnk ")
    break;

    case "GTB":
        alert(" I no to Gbadu am ")
    break;

    default:
      alert(' Unknown Bank');
    break;

  }






  if(input === "FIDELITY"){
    alert(" Bank to repose")
  }else if( input === "ZENITH" ){
    alert(" AHHHH Our BAnk ")
  }else if( input === "GTB"){
    alert(" I no to Gbadu am ")
  }else{
    alert(' Unknown Bank');
  }
   


 switch (new Date ().getDay()) {
  case 6:
    text = "Today is saturday";
    break;
    
    case 0:
    text = "Today is sunday ";
    break;
    default:
      text = "Looking forward to the weekend";
}

   
 

 










