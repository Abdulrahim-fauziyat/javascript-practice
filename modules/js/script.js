


const basecurr =document.querySelector(".basecurr");
const targetcurr = document.querySelector(".targetcurr");
const bc_amount = document.querySelector(".bc_amount");
const tc_amount = document.querySelector(".tc_amount");


const convertbtn =document.getElementById("convertbtn");
const result =document.querySelector("result");


 const currencyRates={
  
    
    
    
    '€':{
        '$':1.09,
        '£':0.86, 
        '₦':946.06,
        '¥':161.02 ,
        },

    '₦':{
        '¥':5.88,
        '$':0.0011,
        '£':946.21,
        '€':0.0011,  

    },

    '¥':{
        '$':0.0068,
        '£':0.0053 ,
        '€':0.006204, 
        '₦':5.88, 
    },

     
    '£': {
        '¥':456,
        '$':1.09,
        '€':0.86, 
        '₦':989.35,
    },

    '$':{
        '€':0.92, 
        '₦':870.51,
        '¥':456,
        '£':0.86,

    },

 }



convertbtn.onclick = function(e) {
    e.preventDefault();
    let base = basecurr.value;
    let target =targetcurr.value;
    console.log(base,target);

    let baseAmount =bc_amount.value;
    if(baseAmount >0) {
        let convertedAmount =currencyRates[base][target] *baseAmount;
        //display the result of the conversion
        tc_amount.value =convertedAmount;
    } else{
        alert("sorry input invalid")
    }



}

