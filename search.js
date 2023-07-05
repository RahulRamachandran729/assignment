let a=[4,5,2,6,8,9,-1,43];
let search = parseFloat(prompt("SEARCH: "));
let k=0;
for(i=0;i<a.length;i++){
    if (search == a[i]){
        k=1;

        break;
    }
   
}
if(k==1){
console.log(`${search} found at array[${i}].`);
}
else{
    console.log(`${search} is not found.`);
}