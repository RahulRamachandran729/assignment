let a=[3,5,67,87,90];
let num=parseInt(prompt("enter a number:"));
let j=0;
for(i=0;i<=a.length;i++){
    if(num==a[i]){
        j=1;
        break;

    }
}
if(j==1){
    console.log("found at an array");
}
else{
    console.log("not found in the array");
}
