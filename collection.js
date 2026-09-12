var offer=document.getElementById("offer")
var closeicon=document.getElementById("closeicon")

closeicon.addEventListener("click",function(){
    offer.style.display="none"
})


//search

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll(".product")

search.addEventListener("keyup", function() {

    var enter = event.target.value.toUpperCase()

    for(count = 0; count < productlist.length; count = count + 1)
    {
        var productname = productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enter) < 0)
        {
            productlist[count].style.display = "none"
        }
        else
        {
            productlist[count].style.display = "block"
        }
    }

})


//checkbox

var checkboxes = document.querySelectorAll(".occasion")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll(".product")

for(count = 0; count < checkboxes.length; count = count + 1)
{
    checkboxes[count].addEventListener("click", function(event)
    {
        var selected = document.querySelectorAll(".occasion:checked")

        for(i = 0; i < productlist.length; i = i + 1)
        {
            var match = false

            for(j = 0; j < selected.length; j = j + 1)
            {
                if(productlist[i].dataset.occasion == selected[j].value)
                {
                    match = true
                }
            }

            if(match == true)
            {
                productlist[i].style.display = "block"
            }
            else
            {
                productlist[i].style.display = "none"
            }
        }

        if(selected.length == 0)
        {
            for(i = 0; i < productlist.length; i = i + 1)
            {
                productlist[i].style.display = "block"
            }
        }
    })
}

//colors checkbox

var colorcheckboxes = document.querySelectorAll(".colors")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll(".product")

for(count = 0; count < colorcheckboxes.length; count = count + 1)
{
    colorcheckboxes[count].addEventListener("click", function()
    {
        var selectedcolors = document.querySelectorAll(".colors:checked")

        for(i = 0; i < productlist.length; i = i + 1)
        {
            var match = false

            for(j = 0; j < selectedcolors.length; j = j + 1)
            {
                if(productlist[i].dataset.colors == selectedcolors[j].value)
                {
                    match = true
                }
            }

            if(match == true)
            {
                productlist[i].style.display = "block"
            }
            else
            {
                productlist[i].style.display = "none"
            }
        }

        if(selectedcolors.length == 0)
        {
            for(i = 0; i < productlist.length; i = i + 1)
            {
                productlist[i].style.display = "block"
            }
        }
    })
}


//Arrivals

var arrivalcheckboxes = document.querySelectorAll(".arrivals")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll(".product")

for(count = 0; count < arrivalcheckboxes.length; count = count + 1)
{
    arrivalcheckboxes[count].addEventListener("click", function()
    {
        var selectedarrival = document.querySelectorAll(".arrivals:checked")

        for(i = 0; i < productlist.length; i = i + 1)
        {
            var match = false

            for(j = 0; j < selectedarrival.length; j = j + 1)
            {
                if(productlist[i].dataset.arrivals == selectedarrival[j].value)
                {
                    match = true
                }
            }

            if(match == true)
            {
                productlist[i].style.display = "block"
            }
            else
            {
                productlist[i].style.display = "none"
            }
        }

        if(selectedarrival.length == 0)
        {
            for(i = 0; i < productlist.length; i = i + 1)
            {
                productlist[i].style.display = "block"
            }
        }
    })
}
