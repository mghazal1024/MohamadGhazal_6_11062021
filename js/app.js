

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

    
    const createPortrait = () => {
        //Creating the photographers portraits
        const pPortraitContainer = createElement('div', 'photographers__portrait');

        const pPortrait = createElement('img');
        pPortrait.src = `/images/${getPortrait()}`;

        pPortraitContainer.appendChild(pPortrait);
        photographer.appendChild(pPortraitContainer);
        console.log(photographer);
    }

    const createName = () => {
        //Creating the photographers name that links to the page
        const pLink = createElement('a');
        const pName = createElement('h2');

        pName.innerText = getName();
        pLink.appendChild(pName);
        photographer.appendChild(pLink);
        photographers.appendChild(photographer);
    }

    const createOrigin = () => {
        //Creating the city name
        const pCity = createElement('h4');
        pCity.innerText = `${getCity()}, ${getCountry()}`;
        photographer.appendChild(pCity);
    }

    const createTagline = () => {
        //Creating the tagline
        const pTagline = createElement('p');
        pTagline.innerText = getTagline();
        photographer.appendChild(pTagline);
    }

    const createPrice = () => {
        //Creating the price
        const pPrice = createElement('p');
        pPrice.classList.add('p--small', 'p--light-color');
        pPrice.innerText = `${getPrice()}€/Jour`;
        photographer.appendChild(pPrice);
    }

    const createTags = () => {
        //Creating the tags
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



loadData().then( (data) => {

    const generalTags = ["portrait", "art", "fashion", "architecture", "travel", "sport", "animals", "events"];

    //Creating the nav tag items
    generalTags.map( generalTag => {
        const tagItem = document.createElement('li');
        tagItem.innerText = `#${generalTag}`;
        tagItem.setAttribute('tabIndex', "0");
    
        mainNavList.appendChild(tagItem);

        //Click event listener to the tag list items to filter the data
        tagItem.addEventListener('click', () => {
            //mapping over the li to change the style on selected
            const navListItems = [...document.querySelectorAll('nav ul li')];
            navListItems.map(listItem => {
                listItem.classList.remove('selected');
            })
            tagItem.classList.add('selected');

            //Creating the filtered data and re-rendering the page
            const filteredData = data.photographers.filter( d => d.tags.includes(generalTag));
            
            
            photographers.innerHTML=""; 
            
            filteredData.map( singlePhotographer => {
                let {portrait, name, city, country, tagline, price, tags} = singlePhotographer;
                let p = photographerFactory(portrait, name, city, country, tagline, price, tags);
                p.createPortrait();
                p.createName();
                p.createOrigin();
                p.createTagline();
                p.createPrice();
                p.createTags();
            })

        })
    });

    //Initial Render
    data.photographers.map( singlePhotographer => {

        let {portrait, name, city, country, tagline, price, tags} = singlePhotographer;
        let p = photographerFactory(portrait, name, city, country, tagline, price, tags);
        p.createPortrait();
        p.createName();
        p.createOrigin();
        p.createTagline();
        p.createPrice();
        p.createTags();
    })

});


