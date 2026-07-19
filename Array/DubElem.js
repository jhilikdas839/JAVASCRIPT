const arr = [1,1,2,4,3,3]; // Original Array 
const Dublicate = []; // Empty array
 arr.forEach((e , index)=>{
    const checkDub = arr.indexOf(e)!== arr.lastIndexOf(e)
    if(checkDub){
         if(Dublicate.includes(e)){
    console.log("Its a Dublicate Element ");
   }else{
    
    Dublicate.push(e)
    
   }
        
    }
    else{
       console.log("Exist");
       
    }
   
    
    
 })

 console.log(Dublicate);
 