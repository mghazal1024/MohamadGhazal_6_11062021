import LoadData from './Api.js';
import HeaderTags from './Components/HeaderTags.js';
import PhotographerCard from './Helpers/PhotographerCard.js';
import HandleMainNavFilter from './Helpers/HandleMainNavFilter.js';
import PhotographerPage from './Helpers/PhotographerPage.js';

//Load the api and use it
LoadData().then( (data) => {
    // Check if page is a photographer page to create the page dynamically, If not it renders the homepage
    if (window.location.pathname.includes("/photographer.html")) {
        let p = PhotographerPage(data);
        p.createInfoSection();
        p.createImagesSection();
        p.createLightbox();
        p.createPriceSection();
        p.createContactForm();
    } else {
        HeaderTags();
        let p = PhotographerCard(data.photographers);
        p.createPCardList();

        const navListItems = [...document.querySelectorAll('nav ul li')];
        const taggedElements = [...document.querySelectorAll("[data-tags]")];
        HandleMainNavFilter(navListItems, taggedElements);
    }
})

