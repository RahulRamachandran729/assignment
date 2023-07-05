let str="";
let n=5;
for(let i=1;i<=n;i++){
    for(let j=0;j<=n-i;j++){
      str+=" ";
    }
    for(let k=0;k<2*i-1;k++)
    str+="*";
    str+="\n";
}
for(let i=n-1;i>=1;i--){
    for(j=n-i;j>=0;j--){
        str+=" ";
    }
    for(let k=2*i-1;k>0;k--)
    str+="*";
    str+="\n";
}
console.log(str);