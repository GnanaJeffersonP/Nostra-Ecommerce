var offer=document.getElementById("offer")
var closeicon=document.getElementById("closeicon")

closeicon.addEventListener("click",function(){
    offer.style.display="none"
})
//Menu

var sidemenu=document.getElementById("sidemenu")
var closemenu=document.getElementById("closemenu")

var menubar=document.getElementById("menubar")

menubar.addEventListener("click",function(){
    sidemenu.style.left = "0%"
})
closemenu.addEventListener("click",function(){
    sidemenu.style.left="-50%"
})
//Herosection

var heroimg=document.getElementById("heroimg")
var rightarrow=document.getElementById("rightarrow")
var leftarrow=document.getElementById("leftarrow")

var img=["./images/hero.png","./images/hero2.png"]

var currentindex= 0

rightarrow.addEventListener("click", function(){
    currentindex = currentindex + 1
    

    if(currentindex == 2){
        currentindex = 0
    }

    heroimg.src = img[currentindex]
})
leftarrow.addEventListener("click", function(){
    currentindex = currentindex - 1

    if(currentindex < 0){
        currentindex = 1
    }

    heroimg.src = img[currentindex]
})

var hearts = document.querySelectorAll(".heart")

for (var i = 0; i < hearts.length; i = i + 1) {

    hearts[i].addEventListener("click", function(){

        if(this.style.color == "red"){

            this.style.fill = "none"
            this.style.color = "black"

        }
        else{

            this.style.fill = "red"
            this.style.color = "red"

        }

    })

}
