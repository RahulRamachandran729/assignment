a=[13,-2,43,45,-1,32,-5,-78,-98];
n=0;
for(let i=0;i<a.length;i++){
    if(a[i]>0)
    n++;
}
console.log(`The total number of positive numbers in this array is ${n}`);