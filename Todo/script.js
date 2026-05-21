let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let wrap = document.querySelector(".wrap");



btn.addEventListener("click",() =>{
   let elem = document.createElement("h4")
   elem.textContent = input.value;
   console.log(elem);

   wrap.append(elem);
   input.value = "";
   
})

// Event Delegation part 

wrap.addEventListener("click", (e)=>{
   let curElem = e.target;
   curElem.remove();
    

})