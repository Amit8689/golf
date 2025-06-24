var crsr =document.querySelector("#cursor")
var crsrBlur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(amit){
  crsr.style.left = amit.x-8+"px"
  crsr.style.top = amit.y-7+"px"
})

document.addEventListener("mousemove",function(amit){
    crsrBlur.style.left= amit.x-200+"px"
    crsrBlur.style.top= amit.y-200+"px"
})

gsap.to("#nav",{
    backgroundColor:("#000"),
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // marker:true,
        start:"top -15%",
        end:"top -11%",
        scrub:0.9,
    }

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%", 
        end:"top -80%",
        scrub:3
    }
}) 

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff "
        crsr.style.backgroundColor="transparent"
    })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E "
        crsr.style.backgroundColor="#95C11E"
    })
})

gsap.from("#about-us img , #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 50%",
    scrub:3,
    }

})

gsap.from(".cards",{
    scale:0.5,
    opacity:0,
    duration:1,
    stragger:0.5,
    scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    start:"top 60%",
    end:"top 50%",
    scrub:1,
    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub:2,

    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub:4,

    }
})
 
gsap.from("#page4 h1",{
    y: 60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 70%",
        end:"top 58%",
        scrub:3,  
    }

})