let href = location.href;
let hrefSplit = href.split('/');
let page = hrefSplit[3];


// /* _____________ footer position ______________________*/

// let container = document.getElementById('container');
// let footer = document.getElementById('footer');

// let getHeightContainer = () => {
//     return container.offsetHeight;
// }


// let heightContainer = getHeightContainer();

// if ( heightContainer < window.innerHeight ){
//     location.reload();
//     footer.style.position = "absolute";
//     footer.style.bottom = "0";
//     footer.style.width = "100%";
// };




/* ____________________ MENU BURGER ___________________*/

let main = document.getElementById('main');
let burger = document.getElementById('burger');

let toggleBurger = false;

let changeWidth = () => {
    return window.innerWidth;
};

let size = changeWidth();
if (size < 650){
    main.style.display = "none";
    burger.style.display = "block";
} else {
    main.style.display = "flex";
    burger.style.display = "none";
}

burger.addEventListener("click", () => {
    if (toggleBurger) {
        main.style.display = "none";
        toggleBurger = false;
    } else {
        main.style.display = "block";
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
    if (size > 650){
        main.style.display = "flex";
    } 
    else {
        main.style.display = "none";
        burger.style.display = "block";
    }
});

/*_______________ NAVBAR ________________________*/
// let link = document.getElementById("link");
let linksNavbar = document.querySelectorAll(".link-navbar");
let linksCategories = document.querySelectorAll(".link-category");
let linkGallery = document.getElementById("link-gallery");
let current = location.href;

for (let linkNavbar of linksNavbar){
    if (linkNavbar.href == current){
        linkNavbar.className += ' active';
    }    
}

for (let linkCategory of linksCategories){    
    linkCategory.style.color = '#ffffff70'; 
    if (linkCategory.href == current){
        linkGallery.className.replace('active', "");
        linkGallery.className += ' active'; 
        linkCategory.style.color = '#fff';
    } 
    linkCategory.addEventListener('click', ()=>{
        console.log("");
        this.style.color = "red";
    })
}

/* ________________________ display image _______________________*/


if (page == "galerie"){
    let thumbnails = document.querySelectorAll('.thumbnails');
    let modalImage = document.getElementById('modal-image');
    modalImage.style.cursor = "pointer";
    let displayImage = document.getElementById('display-image');
    modalImage.style.display = "none";
    for (let image of thumbnails){
        image.style.cursor = "pointer";
        image.addEventListener('click', ()=>{     
                displayImage.innerHTML = "";
                modalImage.style.display = "block";
                let content = image.cloneNode(false);
                displayImage.appendChild(content);
                toggleImage = false;
        })   
    };

    displayImage.addEventListener('click', ()=>{
        if (modalImage.style.display == "block"){
            modalImage.style.display = "none";
        }
    });

    window.addEventListener('click', (event)=>{
        if (event.target == modalImage){        
            modalImage.style.display = "none";
        }
    });
}
