let userFun = (user)=>{
   if(user.name === "" || user.age < 18 || !user.email.includes("@gmail.com") ){
    console.log("object property is not valid")
   }
   else{
    console.log("Every thing is alright");
    
   }
    
}


const myobj = {
    name:"Jhilik",
    age:12,
    email:"jhilik839@gmail.com"
}


userFun(myobj)
