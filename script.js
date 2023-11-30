const hamburger = document.querySelector(".haburger img")
const option = document.querySelector(".option")
const cross = document.querySelector(".cross")






hamburger.addEventListener("click",(e)=>{
   e.target.parentElement.classList.toggle("hide")
   option.classList.toggle("optionhide")
   // option.style.left ="60%"

})

cross.addEventListener("click",(e)=>{
   hamburger.parentElement.classList.toggle("hide")
   option.classList.toggle("optionhide")
})