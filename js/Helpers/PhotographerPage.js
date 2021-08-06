import LightBox from "./LightBox.js";

const PhotographerPage = (data) => {
    console.log(data)
    const id = window.location.search.split('id=')[1];
    const mainContainer = document.querySelector('.photographer-main-container');

    const photographer = data.photographers.filter(p => p.id == id);
    const media = data.media.filter( m => m.photographerId == id);
    let { portrait, name, city, country, tagline, tags } = photographer[0];

    const createInfoSection = () => {
        
        let pTags = tags.map( tag => {
            return `<li>${tag}</li>`
        })

        let infoSection = `
        <section class="photographer">
            <div class="photographer__info">
                <div class="photographer__info-contact">
                    <h1>${name}</h1>
                    <button>Contactez-moi</button>
                </div>
                <h2 class="primary-color">${city}, ${country}</h2>
                <p>${tagline}</p>
                <ul class="photographer__tags">
                    ${pTags.join(' ')}
                </ul>
            </div>
            <div class="photographer__portrait">
                <img src="/images/${portrait}" alt=${name} />
            </div>
        </section>
        `
        mainContainer.innerHTML += infoSection;

    }

    const createImagesSection = () => {

        let pGalleryItems = media.map( item => {
            if(item.image) {
                let mediaItem = `
                <li aria-label=${item.title} role="button" tabIndex="0">
                    <div class="image">
                        <img src="./images/${name.split(' ')[0]}/${item.image}" alt=${item.title}/>>
                    </div>
                    <h4 class="image__title">${item.title}</h4>
                    <div class="image__rating">
                        <h4>12</h4>
                        <h4>O</h4>
                    </div>
                </li>
            `
            return mediaItem;
            } else if (item.video) {
                let mediaItem = `
                <li aria-label=${item.title} role="button" tabIndex="0">
                    <div class="image">
                        <video controls="controls" src="./images/${name.split(' ')[0]}/${item.video}"></video>
                    </div>
                    <h4 class="image__title">${item.title}</h4>
                    <div class="image__rating">
                        <h4>12</h4>
                        <h4>O</h4>
                    </div>
                </li>
            `
            return mediaItem;
            }
        })

        let gallerySection = `
            <section class="photographer__images">
                <div class="trier">
                    <p>Trier par</p>
                    <div class="trier__list">
                        <select>
                            <option value="popularite">Popularité</option>
                            <option value="date">Date</option>
                            <option value="titre">Titre</option>
                        </select>
                    </div>
                </div>
                <ul class="photographer__images-list">
                    ${pGalleryItems.join('')}
                </ul>
            </section>
        `
        mainContainer.innerHTML += gallerySection;

    }

    const createLightbox = () => {

        let lightboxItem = media.map( item => {
            if(item.image) {
                let mediaItem = `
                <li>
                    <img src="./images/${name.split(' ')[0]}/${item.image}" alt=${item.title}/>
                    <p>${item.title}</p>
                </li>
            `
            return mediaItem;
            } else if (item.video) {
                let mediaItem = `
                <li>
                    <video controls="controls" src="./images/${name.split(' ')[0]}/${item.video}"></video>
                    <p>${item.title}</p>
                </li>
            `
            return mediaItem;
            }
        })


        let lightboxSection = `
        <section class="lightbox">
            <div class="lightbox__container">
                <div class="lightbox__previous" aria-label="Previous image" role="button" tabIndex="0"></div>
                <ul class="lightbox__images">
                    ${lightboxItem.join(' ')}
                </ul>
                <div class="lightbox__next" aria-label="Next image" role="button" tabIndex="0"></div>
                <div class="lightbox__close" aria-label="Close lightbox" role="button" tabIndex="0"></div>
            </div>
        </section>
        `
        mainContainer.innerHTML += lightboxSection;
        LightBox();
    }

    return { createInfoSection, createImagesSection, createLightbox }
}

export default PhotographerPage