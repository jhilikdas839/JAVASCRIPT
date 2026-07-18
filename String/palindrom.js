const str = "DAD"
const Lower = str.toLowerCase()

const reverseStr = Lower.split("").reverse().join("");
if(Lower === reverseStr){
   
    console.log("Palindrom");
    
}
else{
   
    console.log("Not Palindrom");

}

