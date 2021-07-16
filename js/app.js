
const loadData = async () => {
    try {
        const url = "/data.json";
        const result = await fetch(url);
        const data = await result.json();
        return data;
        
    } catch (err) {
        console.error(err);
    }
}



//DOM ELEMENTS
// Main container
const mainContainer = document.querySelector('.main-container')
// Main nav
const logo = document.querySelector('.logo-link');
const mainNavList = document.querySelector('header nav ul');
const mainNavFragment = document.createDocumentFragment();
// Photographers 
const photographers = document.querySelector('.photographers');
const photographerFragment = document.createDocumentFragment();

// Photographer Section
const photographerSectionFragment = document.createDocumentFragment();






// FACTORY FUNCTIONS
// for photographers list in homepage
const photographerFactory = (portrait, name, city, country, tagline, price, tags) => {

    const getPortrait = () => portrait;
    const getName = () => name;
    const getCity = () => city;
    const getCountry = () => country;
    const getTagline = () => tagline;
    const getPrice = () => price;
    const getTags = () => tags;

    const tagString = getTags().join(' ');

    //Creating the main li container
    let photographer = document.createElement('li');
    photographer.classList.add('photographers__list-item');
    photographer.classList.add('show')
    photographer.setAttribute('aria-label', 'photographer');
    photographer.setAttribute('data-tags', tagString);
    photographer.setAttribute('tabIndex', "0");
    
    // photographers.appendChild(photographer);
    photographerFragment.appendChild(photographer);

    // function to create the elements
    const createElement = (type, className) => {
        const el = document.createElement(type);
        if(className){
            el.classList.add(className);
        }
        return el;
    }

    //Creating the photographers portraits
    const createPortrait = () => {

        let pPortraitContainer = 
        "<div class='photographers__portrait'>\n\
            <img src='/images/" + getPortrait() + "' alt='" + getName() + "' />\n\
        </div>"

        photographer.innerHTML += pPortraitContainer;
        return photographer

    }

    //Creating the photographers name that links to the page
    const createName = () => {
        // let pLink ="<a><h2>" + getName() + "</h2></a>"
        let pLink = "<button class='name-link'><h2>" + getName() + "</h2></button>"
        photographer.innerHTML += pLink;
    }

    //Creating the city and country name
    const createOrigin = () => {
        let pCity = "<p class='p--small p--primary-color'>" + getCity() + ", " + getCountry() + "</p>"
        photographer.innerHTML += pCity;
    }

    //Creating the tagline
    const createTagline = () => {

        let pTagLine = "<p class='p--xsmall'>" + getTagline() + "</p>"
        photographer.innerHTML += pTagLine;
    }

    //Creating the price
    const createPrice = () => {

        let pPrice = "<p class='p--xsmall p--light'>" + getPrice() + "€/Jour</p>"
        photographer.innerHTML += pPrice;
    }


    //Creating the tags
    const createTags = () => {
        let pTagList = createElement('ul', 'photographers__tags');

        getTags().map ( tag => {
            let tagItem = "<li>#" + tag + "</li>"
            pTagList.innerHTML += tagItem;
        })
        photographer.appendChild(pTagList);

    }

    return {createPortrait, createName, createOrigin, createTagline, createPrice, createTags };
}





// GENERAL FUNCTIONs -------//

// Function to render the data on the DOM using the Factory methods
const dataRender = (data) => {
    data.map( singlePhotographer => {
        let {portrait, name, city, country, tagline, price, tags} = singlePhotographer;
        let p = photographerFactory(portrait, name, city, country, tagline, price, tags);
        p.createPortrait();
        p.createName();
        p.createOrigin();
        p.createTagline();
        p.createPrice();
        p.createTags();
    })
    photographers.appendChild(photographerFragment);
    // mainContainer.appendChild(photographers);
}



// Function to toggle selected class name on a mapped element
const toggleSelected = (items, item) => {
    items.map(item => {
        item.classList.remove('selected');
    })
    item.classList.add('selected');
}





//Adding an ALL tag to the main navigation
const allTag = document.createElement('li')
allTag.classList.add('selected');
allTag.innerHTML = "#all";
mainNavList.appendChild(allTag);

//Creating the nav tag items
const generalTags = ["portrait", "art", "fashion", "architecture", "travel", "sport", "animals", "events"];
generalTags.map( generalTag => {
    const tagItem = document.createElement('li');
    tagItem.innerText = `#${generalTag}`;
    tagItem.setAttribute('tabIndex', '0');

    mainNavFragment.appendChild(tagItem);
});
mainNavList.appendChild(mainNavFragment);






//Loading the data promise and using it
loadData().then( (data) => {

    logo.addEventListener('click', () => {
        mainContainer.innerHTML = "";
        mainContainer.appendChild(photographers);
        headerNav.style.display = "flex";
        headerH2.style.display = "flex";
    });

    //Initial Render
    dataRender(data.photographers);

    const taggedElements = [...document.querySelectorAll("[data-tags]")];
    const navListItems = [...document.querySelectorAll('nav ul li')];
    const nameLinks = [...document.querySelectorAll('.name-link')];
    const headerNav = document.querySelector('header nav');
    const headerH2 = document.querySelector('header h2');

    nameLinks.map( link => {
        link.addEventListener('click', () => {
            mainContainer.innerHTML = link.innerHTML;
            headerNav.style.display = "none";
            headerH2.style.display = "none";
        })
    })
    

    // console.log(taggedElements)

    navListItems.map( listItem => {
        listItem.addEventListener('click', () => {
            if (listItem.innerText !== "#all") {

                navListItems.map( listItem => {
                    listItem.classList.remove('selected');
                })

                listItem.classList.add('selected');
                
                //Remove the # from the tags
                const tag = listItem.innerText.slice(1);
                // create a new array with the element that contain the tag
                const filteredData = taggedElements.filter( d => d.dataset.tags.includes(tag));
                console.log(filteredData);

                taggedElements.map( element => {
                    element.classList.remove('show');
                })

                filteredData.map( filtered => {
                    filtered.classList.add('show');
                })
            } else {
                navListItems.map( listItem => {
                    listItem.classList.remove('selected');
                })

                listItem.classList.add('selected');

                taggedElements.map( element => {
                    element.classList.add('show');
                })
            }
        })
    })

});


