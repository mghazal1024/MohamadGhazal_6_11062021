
// Load data
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

// DOM Elements
const mainContainer = document.querySelector('.main-container');
const mainNavList = document.querySelector('header nav ul');
const mainNavFragment = document.createDocumentFragment();

// FACTORY FUNCTION
const photographerFactory = (photographers) => {


    const createPCard = (portrait, pName, city, country, tagline, tags) => {

        let pTags = tags.map( tag => {
            return `<li>${tag}</li>`
        })

        const tagString = tags.join(' ');

        console.log(pTags)

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

    return { createPCardList };

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




// Loading the data promise and using it
loadData().then( (data) => {


    let p = photographerFactory(data.photographers);
    p.createPCardList();


})