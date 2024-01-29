const tl = gsap.timeline({paused: true});

tl.to(".menu-container",{
    height:"100%",
}).to(".menu-container .close-icon svg",{
    opacity: 1,
    x: 0,
}
).to(".menu-container a", {
    y: 0,
    opacity: 1,
}); 
 const menuIcon = document.querySelector(".menu-icon-container .menu-icon");
 const closeIcon = document.querySelector(".menu-container .close-icon");

 menuIcon.addEventListener("click",() =>{
    tl.restart(); 
 })

 closeIcon.addEventListener("click", () => {
    tl.reverse();
 })