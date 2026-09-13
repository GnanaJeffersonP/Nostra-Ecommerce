themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️"
    }
    else{
        themeBtn.textContent = "🌙"
    }

})


var sidemenu=document.getElementById("sidemenu")
var closemenu=document.getElementById("closemenu")

var menubar=document.getElementById("menubar")



menubar.addEventListener("click",function(){
    sidemenu.style.left = "0%"
})
closemenu.addEventListener("click",function(){
    sidemenu.style.left="-50%"
})


