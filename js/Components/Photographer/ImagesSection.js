import SortingSection from "./SortingSection.js";

const ImagesSection = (media) => {
    let pGalleryItems = media.map( item => {
        let itemLikes = item.likes;
        if(item.image) {
            let mediaItem = `
            <li>
                <div class="image" aria-label=${item.title} role="button" tabIndex="0">
                    <img src="./images/${item.image}" alt=${item.title}/>>
                </div>
                <h4 class="image__title">${item.title}</h4>
                <div class="image__rating">
                    <h4>${itemLikes}</h4>
                    <i class="far fa-heart unselected show"></i>
                    <i class="fas fa-heart selected hidden"></i>
                </div>
            </li>
        `
        return mediaItem;
        } else if (item.video) {
            let mediaItem = `
            <li>
                <div class="image" aria-label=${item.title} role="button" tabIndex="0">
                    <video controls="controls" src="./images/${item.video}"></video>
                </div>
                <h4 class="image__title">${item.title}</h4>
                <div class="image__rating">
                    <h4>${itemLikes}</h4>
                    <i class="far fa-heart unselected show"></i>
                    <i class="fas fa-heart selected hidden"></i>
                </div>
            </li>
        `
        return mediaItem;
        }
    })

    let gallerySection = `
        <section class="photographer__images">
            ${SortingSection()}
            <ul class="photographer__images-list">
                ${pGalleryItems.join('')}
            </ul>
        </section>
    `

    return gallerySection;
}

export default ImagesSection;