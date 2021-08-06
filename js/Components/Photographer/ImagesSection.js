const ImagesSection = (media, name) => {
    let pGalleryItems = media.map( item => {
        let itemLikes = item.likes;
        if(item.image) {
            let mediaItem = `
            <li>
                <div class="image" aria-label=${item.title} role="button" tabIndex="0">
                    <img src="./images/${name.split(' ')[0]}/${item.image}" alt=${item.title}/>>
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
                    <video controls="controls" src="./images/${name.split(' ')[0]}/${item.video}"></video>
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

    return gallerySection;
}

export default ImagesSection;