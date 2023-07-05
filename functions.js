function add(num1,num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function div(num1,num2 ){
    return num1 / num2;
}

n=parseInt(prompt("ENTER THE FIRST NUMBER: "));
m=parseInt(prompt("ENTER THE SECOND NUMBER: "));
console.log(`The sum of the numbers ${n} and ${m} is ${add(n,m)}`);
console.log(`The subtraction of the numbers ${n} and ${m} is ${sub(n,m)}`);
console.log(`The multiplication of the numbers ${n} and ${m} is ${mul(n,m)}`);
console.log(`The division of the numbers ${n} and ${m} is ${div(n,m)}`);