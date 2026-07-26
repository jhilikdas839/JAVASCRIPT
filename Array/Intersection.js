const arr1 = [1,2,3,4]
const arr2 = [5,2,3,6]
const newArr = [];

const elems = arr1.forEach(e => {
  arr2.includes(e)?newArr.push(e):"";
  
    
});

console.log(newArr);

