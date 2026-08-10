let arr = [1,2,3,4,5,6,7]
let size = 3
let result =[] 
  
for(i=0 ; i<=arr.length-1;i+=size){
let sliceArr = arr.slice(i,i+size)
 result.push(sliceArr)
}
console.log(result);




 
