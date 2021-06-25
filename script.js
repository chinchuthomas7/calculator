 function display(num){

 inpt.value+=num;

 }

// display=(num)=>inpt.value+=num

// function validate(){
 
//     inpt.value=eval(inpt.value)
    
// }

validate=()=>inpt.value=eval(inpt.value)


function clearBox(){

inpt.value=" "
}

function clearOnce(){
inpt.value=inpt.value.slice(0,-1)
}

// slice just selected the elements in the array.when we give the array index,it selects only those purticular elemts in that index.

// var b=[1,2,3,4,5]
// console.log(b.slice(0,2));


