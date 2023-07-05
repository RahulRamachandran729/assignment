let n=parseFloat(prompt("ENTER A NUMBER:"));
let no=0;
while(n>0){
    no++;
    n=Math.floor(n/10);
}
console.log(no);