/* ____________________ MENU BURGER ___________________*/

let main = document.getElementById('main');
let burger = document.getElementById('burger');

let toggleBurger = false;

let changeWidth = () => {
    return window.innerWidth;
};

let size = changeWidth();
if (size < 576){
    main.style.display = "none";
    burger.style.display = "block";
} else {
    main.style.display = "flex";
    burger.style.display = "none";
}

// main.style.display = "none";
// main.style.top = "-170px";

burger.addEventListener("click", () => {
    if (toggleBurger) {
        main.style.display = "none";
        // main.style.top = "-170px";
        // main.style.opacity = "0";
        toggleBurger = false;
    } else {
        main.style.display = "block";
        // main.style.opacity = "1";
        // main.style.top = "74px";

        toggleBurger = true;
    }
});

window.addEventListener('click', (event)=>{
    const size = changeWidth();
    if (event.target != burger && size < 576){
        main.style.display = "none";
        toggleBurger = false;
    }
})
  
window.addEventListener('resize', () => {    
    const size = changeWidth();
    if (size > 576){
        main.style.display = "flex";
    } 
    else {
        main.style.display = "none";
        burger.style.display = "block";
    }
});

// Get the container element
let link = document.getElementById("link");
console.log(link);

// Get all buttons with class="btn" inside the container
let links = document.querySelectorAll(".link");
console.log(links);

// Loop through the buttons and add the active class to the current/clicked button
// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", function() {
//     // let current = document.getElementsByClassName("active");
//     // console.log(current);
//     // current[0].className = current[0].className.replace(" active", "");
//     items[i].className += " active";
//   });
// }

let current = location.href;

for (let link of links){
    if (link.href == current){
        link.className += ' active';
    }
}