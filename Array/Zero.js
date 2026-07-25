const arr = [0, 1, 0, 3, 12];

const newArr =[];
 const zeros =[];

const Elems = arr.forEach((e)=>{
    if(e === 0){
        zeros.push(e)
    }
    else{
        newArr.push(e)
    }
    
})

const merged = [...newArr, ...zeros];
console.log(merged);

