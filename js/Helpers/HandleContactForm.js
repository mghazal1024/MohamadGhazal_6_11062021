const HandleContactForm = () => {

    const contact = document.querySelector('.contact');
    const contactOpen = document.querySelector('.photographer__info-contact button');
    const contactClose = contact.querySelector('.contact__close');

    const openForm = () => {
        contact.classList.add('show');
    }

    const closeForm = () => {
        contact.classList.remove('show');
    }
    
    const handleKeyEvent = (func) => {
        let key = event.key;
        if (key === 'Enter' || key === 'Space') {
            func();
        }
    }

    contactOpen.addEventListener('click', openForm);
    contactOpen.addEventListener('keyup', () => {
        handleKeyEvent(openForm);
    })

    contactClose.addEventListener('click', closeForm);
    contactClose.addEventListener('keyup', () => {
        handleKeyEvent(closeForm);
    })
    

}

export default HandleContactForm;