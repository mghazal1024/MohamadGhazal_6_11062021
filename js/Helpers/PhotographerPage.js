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
            let mediaItem = `
                <li>
                    <div class="image">
                        <img src="./images/${name.split(' ')[0]}/${item.image}" alt=${item.title}/>>
                    </div>
                </li>
            `
            return mediaItem;
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

    return { createInfoSection, createImagesSection }
}

export default PhotographerPage