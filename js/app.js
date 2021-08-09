import LoadData from './Api.js';
import HeaderTags from './Components/HeaderTags.js';
import PhotographerFactory from './Helpers/PhotographerFactory.js';
import MainNavFilter from './Helpers/MainNavFilter.js';
import PhotographerPage from './Helpers/PhotographerPage.js';
import LightBox from './Helpers/LightBox.js';


LoadData().then( (data) => {
    if (window.location.pathname.includes("/photographer.html")) {
        let p = PhotographerPage(data);
        p.createInfoSection();
        p.createImagesSection();
        p.createLightbox();
        p.createPriceSection();
        p.createContactForm();
        LightBox();

    } else {
        HeaderTags();

        let p = PhotographerFactory(data.photographers);
        p.createPCardList();

        const navListItems = [...document.querySelectorAll('nav ul li')];
        const taggedElements = [...document.querySelectorAll("[data-tags]")];
        MainNavFilter(navListItems, taggedElements);
    }
})

