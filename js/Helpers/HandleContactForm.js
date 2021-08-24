const HandleContactForm = () => {

    // DOM Elements
    const contact = document.querySelector('.contact');
    const contactOpen = document.querySelector('.photographer__info-contact button');
    const form = document.querySelector('#form');
    const firstName = document.querySelector('#first');
    const lastName = document.querySelector('#last');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const contactClose = contact.querySelector('.contact__close');
    const contactFormContainer = contact.querySelector('.contact__form');
    const contactSuccess = contact.querySelector('.contact__success');
    const photographer = document.querySelector('.photographer');
    const photographerImages = document.querySelector('.photographer__images');
    const totalLikesSection = document.querySelector('.like-and-price-section');
    const header = document.querySelector('header');


    // Function to open the form
    const openForm = () => {
        contact.classList.add('show');
        contactFormContainer.classList.remove('hide');;
        contactSuccess.classList.remove('show');

        //Trapping the focus inside the modal form
        const focusableElements = 'input, textarea, [tabindex]:not([tabindex="-1"]';
        const firstFocusableElement = contact.querySelectorAll(focusableElements)[0];
        const focusableContent = contact.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        document.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.key.Code === 9;
        
            if (!isTabPressed) {
            return;
            }
    
            if (e.shiftKey) { 
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else { 
            if (document.activeElement === lastFocusableElement) { 
                firstFocusableElement.focus(); 
                e.preventDefault();
            }
            }
        });
        
        firstFocusableElement.focus(); 

    }

    // Function to close the form
    const closeForm = () => {
        contact.classList.remove('show')
        contactFormContainer.classList.remove('hide');;
        contactSuccess.classList.remove('show');
    }
    
    // General function to inject event listerent functions on key event
    const handleKeyEvent = (func) => {
        let key = event.key;
        if (key === 'Enter' || key === 'Space') {
            func();
        }
    }



    //function that shows the error state of an input
    const showError = (input) => {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');
        input.classList.add('invalid');
        error.style.display="block";
    }


    //function that shows the success state of an input
    const showSuccess = (input) => {
        const parent = input.parentElement;
        const success = parent.querySelector('.error-message');
        input.classList.remove('invalid');
        success.style.display="none";
    }



    //Check validity of string inputs such as First and last name
    const checkString = (input, minLength) => {

        let valid = false;
        const min = minLength;

        if(input.value.length < min) {
        showError(input);
        } else {
        showSuccess(input);
        valid = true;
        }
        return valid;
    }

    // Check the validity of the EMAIL input
    const emailValidity = (email) => {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(email);
    }
    const checkEmail = () => {

        let valid = false;
        let emailValue = email.value.trim();

        if(!emailValidity(emailValue)) {
        showError(email);
        } else {
        showSuccess(email);
        valid = true;
        }
        return valid;
    }

    contactOpen.addEventListener('click', openForm);
    contactOpen.addEventListener('keyup', () => {
        handleKeyEvent(openForm);
    })

    contactClose.addEventListener('click', closeForm);
    contactClose.addEventListener('keyup', () => {
        handleKeyEvent(closeForm);
    })
    window.addEventListener('keyup', (e) => {
        if(e.key === "Escape") {
            closeForm();
        }
    })


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let nameValid = checkString(firstName, 2);
        let lastValid = checkString(lastName, 2);
        let emailValid = checkEmail();
        let messageValid = checkString(message, 50)

        let formValid = nameValid && lastValid && emailValid && messageValid;

        if(formValid) {
            console.log('valid');
            contactFormContainer.classList.add('hide');
            contactSuccess.classList.add('show');
            form.reset();
        }
    })


    // for instant client-side validation
    form.addEventListener('input', (e) => {
        switch (e.target.id) {
        case 'first':
            checkString(firstName, 2);
            break;
        case 'last':
            checkString(lastName, 2);
            break;
        case 'email':
            checkEmail();
            break;
        case 'message':
            checkString(message, 50);
            break;
        }
    })



    

    

}

export default HandleContactForm;