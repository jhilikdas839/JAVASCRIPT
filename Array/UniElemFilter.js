const arr = [1,1,2,3,3]
console.log("Old Array",arr);
const filterArray = arr.filter((item ,index)=> arr.indexOf(item) === index)
console.log("Filter Array",filterArray);