// let select = document.getElementById('select');
// let displayImages = document.getElementById('displayImages');
// console.log(select);
// console.log('script ok');

// let gallery = [
//     {
//         name : "wedding01",
//         category : "wedding"
//     },
//     {
//         name : "wedding02",
//         category : "wedding"
//     },
//     {
//         name : "wedding03",
//         category : "wedding"
//     },
//     {
//         name : "wedding04",
//         category : "wedding"
//     },
//     {
//         name : "wedding05",
//         category : "wedding"
//     },
//     {
//         name : "wedding06",
//         category : "wedding"
//     },
//     {
//         name : "wedding07",
//         category : "wedding"
//     },
//     {
//         name : "wedding08",
//         category : "wedding"
//     },
//     {
//         name : "wedding09",
//         category : "wedding"
//     },
//     {
//         name : "wedding10",
//         category : "wedding"
//     },
//     {
//         name : "wedding11",
//         category : "wedding"
//     },
//     {
//         name : "wedding12",
//         category : "wedding"
//     },
//     {
//         name : "pregnant01",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant02",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant03",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant04",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant05",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant06",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant07",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant08",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant09",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant10",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant11",
//         category : "pregnant"
//     },
//     {
//         name : "pregnant12",
//         category : "pregnant"
//     }
// ]

// let display = [];

// let disp = () => {
//     for (let photo in display){
//         console.log(photo);
//         displayImages.textContent = `<img src="/assets/images/${photo}.jpg"`
//     }
// }

// let target = "";

// // for (let photo of gallery){
// //     let photoName = `<img src="/assets/images/${photo.name}.jpg" width="100px"></img>` ;
// //     displayImages.innerHTML += photoName;
// // }

// function displayPhotos () {
//     select.addEventListener('change', (event)=>{
//         displayImages.innerHTML = "";
//         display = [];
//         target = event.target.value;
//         for (let photo of gallery){
//             if (photo.category === target && target != ""){
//                 display.push(photo.name);
//                 let photoName = `<img src="/assets/images/${photo.name}.jpg" width="100px"></img>` ;
//                 displayImages.innerHTML += photoName;                
//             } 
//         }
//     })
// }

// displayPhotos();

/* ____________________ MENU BURGER ___________________*/

let main = document.getElementById('main');
let burger = document.getElementById('burger');

let toggleBurger = false;

main.style.display = "none";
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
    if (event.target != burger){
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


let changeWidth = () => {
    return window.innerWidth;
};
  
window.addEventListener('resize', () => {
    const size = changeWidth();
    if (size > 576){
        main.style.display = "block";
    } else {
        main.style.display = "none";
    }
});