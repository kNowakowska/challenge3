const toggler = document.querySelector("nav i");
const list = document.querySelector("nav ul");


toggler.addEventListener("click", function(){
    if(!list.classList.contains("extended")){
        list.classList.add("extended");
        list.querySelectorAll("li").forEach((item)=>item.classList.add("extended"));
    }else{
        list.classList.remove("extended");
        list.querySelectorAll("li").forEach((item)=>item.classList.remove("extended"));
    }
})