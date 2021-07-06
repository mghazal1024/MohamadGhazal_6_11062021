

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
// Main nav
const mainNavList = document.querySelector('header nav ul');
//Photographers 
const photographers = document.querySelector('.photographers');



// FUNCTIONs -------//
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
}

// Function to toggle selected class name on a mapped element
const toggleSelected = (items, item) => {
    items.map(item => {
        item.classList.remove('selected');
    })
    item.classList.add('selected');
}




// FACTORY FUNCTION
const photographerFactory = (portrait, name, city, country, tagline, price, tags) => {

    const getPortrait = () => portrait;
    const getName = () => name;
    const getCity = () => city;
    const getCountry = () => country;
    const getTagline = () => tagline;
    const getPrice = () => price;
    const getTags = () => tags;

    //Creating the main li container
    const photographer = document.createElement('li');
    photographer.classList.add('photographers__list-item');
    photographer.setAttribute('aria-labelledby', 'photographer');
    photographer.setAttribute('tabIndex', "0");
    photographers.appendChild(photographer);

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
        const pPortraitContainer = createElement('div', 'photographers__portrait');

        const pPortrait = createElement('img');
        pPortrait.src = `/images/${getPortrait()}`;

        pPortraitContainer.appendChild(pPortrait);
        photographer.appendChild(pPortraitContainer);
    }

    //Creating the photographers name that links to the page
    const createName = () => {
        const pLink = createElement('a');
        const pName = createElement('h2');

        pName.innerText = getName();
        pLink.appendChild(pName);
        photographer.appendChild(pLink);
        photographers.appendChild(photographer);
    }

    //Creating the city and country name
    const createOrigin = () => {
        const pCity = createElement('h4');
        pCity.innerText = `${getCity()}, ${getCountry()}`;
        photographer.appendChild(pCity);
    }

    //Creating the tagline
    const createTagline = () => {
        const pTagline = createElement('p');
        pTagline.innerText = getTagline();
        photographer.appendChild(pTagline);
    }

    //Creating the price
    const createPrice = () => {
        const pPrice = createElement('p');
        pPrice.classList.add('p--small', 'p--light-color');
        pPrice.innerText = `${getPrice()}€/Jour`;
        photographer.appendChild(pPrice);
    }

    //Creating the tags
    const createTags = () => {
        const pTagsList = createElement('ul', 'photographers__tags');

        getTags().map ( tag => {
            const tagItem = createElement('li');
            tagItem.innerText = `#${tag}`;
            pTagsList.appendChild(tagItem);
            photographer.appendChild(pTagsList);
        })
    }

    return {createPortrait, createName, createOrigin, createTagline, createPrice, createTags };
}



//Loading the data promise and using it
loadData().then( (data) => {

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
    
        mainNavList.appendChild(tagItem);
    });

    //DOM Elements after loading
    const navListItems = [...document.querySelectorAll('nav ul li')];

    // Adding click event listener to tag elements in the nav
    navListItems.map(listItem => {
        listItem.addEventListener('click', () => {
            if(listItem.innerText !== "#all") {

                const tag = listItem.innerText.slice(1);
                const filteredData = data.photographers.filter( d => d.tags.includes(tag));

                toggleSelected(navListItems, listItem);
                photographers.innerHTML = "";
                dataRender(filteredData);

            } else {

                toggleSelected(navListItems, listItem);
                photographers.innerHTML = "";
                dataRender(data.photographers)
            }
        })
    })

    //Initial Render
    dataRender(data.photographers);

});


