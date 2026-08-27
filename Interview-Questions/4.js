const fun = (a,b,c)=>{
//Succes part 
if(a>=200 && a<=299){
    console.log("Success");
    
}


//Client Error

if(b>=400 && b<=499){
    console.log("Client Error");
    
}


//Server error


if(c>=500 && c<=599){
    console.log("Server Error");
    
}



}


fun(280 , 404 , 550)