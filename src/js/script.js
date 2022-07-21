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
    main.style.display = "block";
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

// let links = document.querySelectorAll('.item');
// console.log(links);

// for (let link of links){
//     link.addEventListener('click', ()=>{
//         console.log("ok");
//         main.style.display = "none";
//         main.style.opacity = "0";
//     })
// };

/* ___________________________________________________ */



  
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