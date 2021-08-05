
import LoadData from './Api.js';

//Adding header tags
import HeaderTags from './Components/HeaderTags.js';
import PhotographerFactory from './Helpers/PhotographerFactory.js';
import MainNavFilter from './Helpers/MainNavFilter.js';


LoadData().then( (data) => {
    HeaderTags();

    let p = PhotographerFactory(data.photographers);
    p.createPCardList();

    const navListItems = [...document.querySelectorAll('nav ul li')];
    const taggedElements = [...document.querySelectorAll("[data-tags]")];
    MainNavFilter(navListItems, taggedElements);
    
})


// import LoadData from "./Api.js";
// import PhotographerFactory from "./Helpers/PhotographerFactory.js";

// // Adding header tags
// import HeaderTags from "./Components/HeaderTags.js";
// HeaderTags();


// // DOM Elements
// const mainContainer = document.querySelector('.main-container');
// const logo = document.querySelector('.logo-link');


// LoadData().then( (data) => {


//     // Initial Render
//     let p = PhotographerFactory(data.photographers);
//     p.createPCardList();

//     logo.addEventListener('click', () => {
//         // p.createPCardList();
//     })

//     const taggedElements = [...document.querySelectorAll('[data-tags]')];
//     const navListItems = [...document.querySelectorAll('nav ul li')];
//     const nameLinks = [...document.querySelectorAll('.name-link')];

//     // Filtering photographers
//     navListItems.map( listItem => {
//         listItem.addEventListener('click', () => {
//             if(listItem.innerText !== "#all") {
//                 navListItems.map( listItem => {
//                     listItem.classList.remove('selected');
//                 })
//                 listItem.classList.add('selected');

//                 //Remove the # from the tags
//                 const tag = listItem.innerText.slice(1);
//                 // Create a new array with the element that contain the tag
//                 const filteredData = taggedElements.filter( d => d.dataset.tags.includes(tag));

//                 taggedElements.map( element => {
//                     element.classList.remove('show');
//                 })

//                 filteredData.map( filtered => {
//                     filtered.classList.add('show');
//                 })
//             } else {
//                 navListItems.map( listItem => {
//                     listItem.classList.remove('selected');
//                 })

//                 listItem.classList.add('selected');

//                 taggedElements.map( element => {
//                     element.classList.add('show');
//                 })
//             }
//         })
//     })


//     // Changing the content fo main container after name link is clicked
//     nameLinks.map( link => {
//         link.addEventListener('click', () => {
//             console.log(mainContainer)
//             mainContainer.innerHTML = "";
//         })
//     })



// })