const LightBox = () => {

    const pMedia = [...document.querySelectorAll('.photographer__images-list li .image')];
    const lightbox = document.querySelector('.lightbox');
    const lightboxListItems = [...document.querySelectorAll('.lightbox__images li')];
    const lightboxClose = document.querySelector('.lightbox__close');
    const lightboxPrevious = document.querySelector('.lightbox__previous');
    const lightboxNext = document.querySelector('.lightbox__next');
    
    const mainContainer = document.querySelector('.photographer-main-container');
    const photographer = document.querySelector('.photographer');
    const photographerImages = document.querySelector('.photographer__images');

    let currentSlide = 0;

    const handleKeyEvent = (func) => {
        let key = event.key;
        if (key === 'Enter' || key === 'Space') {
            func();
        }
    }


    // Open Light box
    pMedia.map( media => {

        const openLightbox = () => {
            currentSlide = pMedia.indexOf(media);

            //Open Lightbox
            photographer.style.display = "none";
            photographerImages.style.display = "none";
            lightbox.classList.add('show');

            //Display the image clicked as default
            lightboxListItems.map( item => {
                item.classList.remove('show');
            })
            lightboxListItems[currentSlide].classList.add('show');
        } 

        media.addEventListener('click', openLightbox);
        media.addEventListener('keyup', () => {
            handleKeyEvent(openLightbox);
        })
    })



    //Close lightbox
    const closeLightbox = () => {
        photographer.style.display = "grid";
        photographerImages.style.display = "flex";
        lightbox.classList.remove('show');
    }
    lightboxClose.addEventListener('click', closeLightbox)
    lightboxClose.addEventListener('keyup', () => {
        handleKeyEvent(closeLightbox)
    })

    //Next button
    const handleNext = () => {
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
    }
    lightboxNext.addEventListener('click', handleNext);
    lightboxNext.addEventListener('keyup', () => {
        handleKeyEvent(handleNext);
    })

    //Previous Button
    const handlePrevious = () => {
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
    }
    lightboxPrevious.addEventListener('click', handlePrevious)
    lightboxPrevious.addEventListener('keyup', () => {
        handleKeyEvent(handlePrevious);
    })



}


export default LightBox;