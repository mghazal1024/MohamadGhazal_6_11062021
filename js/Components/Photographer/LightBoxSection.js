const LightBoxSection = (media, name) => {

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
    return lightboxSection;
}

export default LightBoxSection;
