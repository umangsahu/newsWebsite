 if(window.innerWidth<=450){
 let img=document.getElementById("img").src="./assets/images/image-web-3-mobile.jpg"
 

 let nav=document.getElementsByClassName("mobnav")[0];
 console.log(nav);
 nav.innerHTML=`
 <img  id="logo" src="./assets/images/logo.svg" alt="">
 <img  id="burger" src="./assets/images/icon-menu.svg" alt="">
 
 `
 let burger=document.getElementById("burger");
 burger.style.cursor="pointer";
 let alt=true;
 burger.addEventListener('click',(e)=>{
    
    if(alt===true){
    burger.src="./assets/images/icon-menu-close.svg"
    alt=false;
    }else{
        burger.src="./assets/images/icon-menu.svg"
        alt=true;
    }

 })

 

 }