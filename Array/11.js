const a = [1,2,3,4];

const b = [2,3,5];

const c = [2,3,8];

let result = []

a.forEach((e)=>{
if(b.includes(e)){
    if(c.includes(e)){
        result.push(e)
    }
}
else{
   console.log("Not Match");
   
}
 
})

console.log(result);

