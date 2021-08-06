const LightBox = () => {

    const pMedia = [...document.querySelectorAll('.photographer__images-list li')];
    const lightbox = document.querySelector('.lightbox');
    const lightboxListItems = [...document.querySelectorAll('.lightbox__images li')];
    const lightboxClose = document.querySelector('.lightbox__close');
    const lightboxPrevious = document.querySelector('.lightbox__previous');
    const lightboxNext = document.querySelector('.lightbox__next');

    let currentSlide = 0;

    pMedia.map( media => {
        media.addEventListener('click', () => {

            currentSlide = pMedia.indexOf(media);

            //Open Lightbox
            lightbox.classList.add('show');

            //Display the image clicked as default
            lightboxListItems.map( item => {
                item.classList.remove('show');
            })
            lightboxListItems[currentSlide].classList.add('show');
        })
    })

    //Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('show');
    })

    lightboxNext.addEventListener('click', () => {
        currentSlide += 1;

        if (currentSlide < lightboxListItems.length) {
            lightboxListItems.map( item => {
                item.classList.remove('show');
            })
            lightboxListItems[currentSlide].classList.add('show');
        } else {
            currentSlide = 0;
            lightboxListItems.map( item => {
                item.classList.remove('show');
            })
            lightboxListItems[currentSlide].classList.add('show');
        }
    })

    lightboxPrevious.addEventListener('click', () => {
        currentSlide -= 1;

        if(currentSlide >= 0) {
            lightboxListItems.map( item => {
                item.classList.remove('show');
            })
            lightboxListItems[currentSlide].classList.add('show');
        } else {
            currentSlide = lightboxListItems.length - 1;
            lightboxListItems.map(item => {
                item.classList.remove('show');
            })
            lightboxListItems[currentSlide].classList.add('show');
        }
    })



}


export default LightBox;