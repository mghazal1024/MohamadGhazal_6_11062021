// Load Data
import LoadData from "./Api.js";

// DOM Elements
const logo = document.querySelector('.logo-link');
const mainContainer = document.querySelector('.main-container');
const mainNavList = document.querySelector('header nav ul');
const mainNavFragment = document.createDocumentFragment();
const photographerSectionFragment = document.createDocumentFragment();



// FACTORY FUNCTION
const photographerFactory = (photographers) => {

    // Create Photographer card for Homepage
    const createPCard = (portrait, pName, city, country, tagline, tags) => {

        let pTags = tags.map( tag => {
            return `<li>${tag}</li>`
        })

        const tagString = tags.join(' ');

        let pCard = `
            <li class='photographers__list-item show' aria-label='photographer' data-tags='${tagString}' tabIndex='0'>
                <div class='photographers__portrait'>
                    <img src='/images/${portrait}' alt=${pName} />
                </div>
                <button class='name-link'><h2>${pName}</h2></button>
                <p class='p--small p--primary-color'>${city}, ${country}</p>
                <p class='p--xsmall'>${tagline}</p>
                <ul class='photographers__tags'>
                    ${pTags.join(' ')}
                </ul>
            </li>
        `
        return pCard;
    }

    // Create Photographer card list for homepage
    const createPCardList = () => {

        let pCards = photographers.map( p => {
            return createPCard(p.portrait, p.name, p.city, p.country, p.tagline, p.tags);
        })
        let pCardList = `
            <ul class="photographers">
                ${pCards.join(' ')}
            </ul>
        `
        mainContainer.innerHTML = "";
        mainContainer.innerHTML = pCardList;
    }

    // Create Photographer info section in photographer page
    const createPInfoSection = (portrait, pName, city, country, tagline, tags) => {

        let pSection = document.createElement('section');
        pSection.classList.add('photographer');

        let allTags = tags.map( tag => {
            return `<li>${tag}</li>`
        })

        let pInfo = `
            <div class="photographer__info">
                <div class="photographer__info-contact">
                    <h1>${pName}</h1>
                    <button>Contactez-moi</button>
                </div>
                <h4>${city}, ${country}</h4>
                <p>${tagline}</p>
                <ul class="photographer__tags>
                    ${allTags.join(" ")}
                </ul>
            </div>
            <div class="photographer__portrait">
                <img src="/images/${portrait}" alt=${pName} />
            </div>
        `

        pSection.innerHTML += pInfo;
        photographerSectionFragment.appendChild(pSection)

    }

    return { createPCardList, createPInfoSection };

}


//HEADER SECTION ELEMENTS
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




// PROMISE
// Loading the data promise and using it
LoadData().then( (data) => {

    // Initial Render
    let p = photographerFactory(data.photographers);
    p.createPCardList();

    const taggedElements = [...document.querySelectorAll('[data-tags]')];
    const navListItems = [...document.querySelectorAll('nav ul li')];
    const nameLinks = [...document.querySelectorAll('.name-link')];

    // Filtering photographers
    navListItems.map( listItem => {
        listItem.addEventListener('click', () => {
            if(listItem.innerText !== "#all") {
                navListItems.map( listItem => {
                    listItem.classList.remove('selected');
                })
                listItem.classList.add('selected');

                //Remove the # from the tags
                const tag = listItem.innerText.slice(1);
                // Create a new array with the element that contain the tag
                const filteredData = taggedElements.filter( d => d.dataset.tags.includes(tag));

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


    // Changing the content fo main container after name link is clicked
    nameLinks.map( link => {
        link.addEventListener('click', () => {
            console.log(mainContainer)
            mainContainer.innerHTML = "";
        })
    })



})