const OriginalCoupon = "Save10"
const couponDis = 10
 let total = 0
const disCalculator = (price , quntity , coupon)=>{

if(price >0 && Number.isFinite(price)){
    if(quntity >0 && Number.isFinite(quntity)){
         total = price * quntity
        console.log(`Total price ${total}`);
        
        if(total >=400 && OriginalCoupon ===coupon ){
            let discountAmount = total*couponDis/100
            console.log(`Total discount price  ${discountAmount}`);
            let finalAmount = total-discountAmount
            console.log(`After Discount Your Final Amount is ${finalAmount}`);
            

        }else{
            console.log("Coupon is not valid");
            
        }
    }
    else{
    console.log("quntity is not a valid number");
    
}
    
}else{
    console.log("price is not a valid number");
    
}



} 

disCalculator( 200 , 5 ,"Save10" )
