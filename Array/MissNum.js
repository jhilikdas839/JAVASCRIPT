const arr = [1, 2, 3, 5]

const lastIndex = arr.length - 1;

let actualsum = 0
for (i = 1; i <= arr[lastIndex]; i++) {
    actualsum += i;

}

const expected = arr.reduce((acc , item)=>{
    return acc = acc+item
},0)

console.log(expected);


let MissNums = (actualsum-expected);
console.log(MissNums);






