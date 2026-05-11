 var btn1 = document.querySelector("#add-btn")
        btn1.addEventListener("click", function (event) {
            btn1.parentElement.remove()
        })
        var btn2 = document.getElementById("cancel-button")
        var sidebar = document.getElementById("side-navbar")
        btn2.addEventListener("click", function() {
            sidebar.style.marginLeft = "-60%"
            sidebar.style.transitionDuration = "1s"
        })
        var btn3 = document.getElementById("navbar-logo")
        btn3.addEventListener("click", function () {
            sidebar.style.marginLeft = "0%"
            sidebar.style.transitionDuration = "1s"
        })
        var rightbutton=document.querySelector(".slider-right-button")
        var image=document.querySelector(".slider-img")
        image.style.marginLeft="0%"
        rightbutton.addEventListener("click",function(){
            if(image.style.marginLeft==="0%"){
                image.style.marginLeft="-100%"
                image.style.transitionDuration="2s"
            }
            else if(image.style.marginLeft==="-100%"){
                image.style.marginLeft="-200%"
                image.style.transitionDuration="2s"
            }
            else if(image.style.marginLeft==="-200%"){
                image.style.marginLeft="0%"
                image.style.transitionDuration="2s"
            }
        })
        var leftbutton=document.querySelector(".slider-left-button")
         leftbutton.addEventListener("click",function(){
            if(image.style.marginLeft==="0%"){
                image.style.marginLeft="-200%"
                image.style.transitionDuration="2s"
            }
            else if(image.style.marginLeft==="-200%"){
                image.style.marginLeft="-100%"
                image.style.transitionDuration="2s"
            }
            else if(image.style.marginLeft==="-100%"){
                image.style.marginLeft="0%"
                image.style.transitionDuration="2s"
            }
        })
        var wanted=document.querySelector(".most-wanted")
        function like(event){
           if(event.target.src.indexOf("blackheart.png")>0){
            event.target.src="./images/redheart.png" 
           }
           else{
             event.target.src="./images/blackheart.png" 
           }
              
        }
        window.addEventListener("scroll",function(){
            var elements=this.document.querySelectorAll(".initial-scroll-animation")
            elements.forEach((el)=> {
                windowHight=window.innerHeight
                var elbound=el.getBoundingClientRect()
                if(windowHight>elbound.top){
                    el.classList.remove("reveal-scroll-animation")
                }
            })
        })