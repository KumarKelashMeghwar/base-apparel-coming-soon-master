const image = document.querySelector(".image");

if(window.innerWidth <= 470){    
    image.src = "hero-mobile.jpg";
    image.style.backgroundSize = "contain";
    image.style.width = "400px";
    image.style.height = "250px";
}

