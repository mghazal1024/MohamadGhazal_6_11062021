import ImagesSection from "../Components/Photographer/ImagesSection.js";
import InfoSection from "../Components/Photographer/InfoSection.js";
import ImageLike from "./ImageLike.js";
import LightBoxSection from '../Components/Photographer/LightBoxSection.js'
import PriceSection from "../Components/Photographer/PriceSection.js";
import ContactSection from "../Components/Photographer/ContactSection.js";
import HandleContactForm from "./HandleContactForm.js";
import Sorting from "./Sorting.js";
// import LightBox from "./LightBox.js";

const PhotographerPage = (data) => {
    console.log(data)
    const id = window.location.search.split('id=')[1];
    const mainContainer = document.querySelector('.photographer-main-container');

    const photographer = data.photographers.filter(p => p.id == id);
    const media = data.media.filter( m => m.photographerId == id);
    let { portrait, name, city, country, tagline, tags } = photographer[0];

    let totalLikes = 0;

    media.map( item => {
        totalLikes += item.likes;
    })

    const createInfoSection = () => {

        mainContainer.innerHTML += InfoSection(portrait, name, city, country, tagline, tags);

    }

    const createImagesSection = () => {

        mainContainer.innerHTML += ImagesSection(media, name);
    }

    const createLightbox = () => {

        mainContainer.innerHTML += LightBoxSection(media, name);
    
    }

    const createPriceSection = () => {

        mainContainer.innerHTML += PriceSection(photographer, totalLikes);

    }

    const createContactForm = () => {

        mainContainer.innerHTML += ContactSection(name);

        ImageLike(media, totalLikes);
        HandleContactForm();
        Sorting();

    }

    return { createInfoSection, createImagesSection, createLightbox, createPriceSection, createContactForm }
}

export default PhotographerPage