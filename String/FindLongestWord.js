const str = "I love learning backend development";
let splitStr= str.split(" ");
let longWord = '';

splitStr.forEach((e)=>{
 e.length > longWord.length?longWord=e:""
 
})

console.log(longWord);


