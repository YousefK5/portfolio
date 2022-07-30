const scrollUpButton = document.querySelector(".scrollUp");

// window.addEventListener("scroll" , scrollFunction());

// function scrollFunction(){
//     if(window.scrollY > 10) {
//         scrollUpButton.classList.add("show");
//         // scrollUpButton.style.display="block";
//     } 
//     else {
//         scrollUpButton.classList.remove("show");
//     }
// }

window.onscroll = function() {
    if(scrollY >= 400) {
        scrollUpButton.style.display="block";
    }
    else {
        scrollUpButton.style.display="none";
    }

}