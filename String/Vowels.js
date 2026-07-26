const word =  "Programming" ;
const check = word.split("")
let count = 0;
const vowels = 'aeiou';

check.forEach((e)=>{
 vowels.includes(e)?count++:'';
 
})

console.log(count);

