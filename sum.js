let num = parseInt(prompt("Enter a number: "));
let sum=0;
let rem=0;
while(num>0){
    rem =num%10;
    sum +=rem;
    num=Math.floor(num/10);
}
console.log(sum);