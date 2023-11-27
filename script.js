const hamburger = document.querySelector(".haburger img")
const cross = document.querySelector(".option")
const crossimg = document.querySelector(".option img")

hamburger.addEventListener("click",(e)=>{
     e.target.parentElement.style.display = "none"
     cross.style.right = "40px"
        
})
crossimg.addEventListener("click",(e)=>{
   e.target.parentElement.parentElement.style.display = "none"
   
   hamburger.parentElement.style.display = "flex"
        
})