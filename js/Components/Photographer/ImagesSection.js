import SortingSection from "./SortingSection.js";

// Component that create the html for the Images and Video Gallery

// Creating the html for the image and video
const ImagesSection = (media) => {
    let pGalleryItems = media.map( item => {
        let itemLikes = item.likes;
        if(item.image) {
            let mediaItem = `
            <li data-title="${item.title}" data-likes=${item.likes} data-date=${item.date}>
                <div class="image" aria-label='${item.title} image' role="button" tabIndex="0">
                    <img src="./images/${item.image}" alt=${item.title}/>>
                </div>
                <h4 class="image__title">${item.title}</h4>
                <div class="image__rating">
                    <h4 tabIndex="0" aria-label="${itemLikes} Likes">${itemLikes}</h4>
                    <i class="far fa-heart unselected show" role="button" aria-label="like" tabIndex="0"></i>
                    <i class="fas fa-heart selected hidden" role="button" aria-label="unlike" tabIndex="0"></i>
                </div>
            </li>
        `
        return mediaItem;

        } else if (item.video) {
            let mediaItem = `
            <li data-title="${item.title}" data-likes=${item.likes} data-date=${item.date}>
                <div class="image" aria-label='${item.title} video' role="button" tabIndex="0">
                    <video src="./images/${item.video}"></video>
                </div>
                <h4 class="image__title">${item.title}</h4>
                <div class="image__rating">
                    <h4 tabIndex="0" aria-label="${itemLikes} Likes">${itemLikes}</h4>
                    <i class="far fa-heart unselected show" role="button" tabIndex="0"></i>
                    <i class="fas fa-heart selected hidden" role="button" tabIndex="0"></i>
                </div>
            </li>
        `
        return mediaItem;

        }
    })

    // Adding the section to the DOM
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