
const mainContainer = document.querySelector('.main-container');


// FACTORY FUNCTION
const PhotographerFactory = (photographers) => {

    // Create Photographer card for Homepage
    const createPCard = (portrait, pName, city, country, tagline, price, tags, id) => {

        let pTags = tags.map( tag => {
            return `<li>${tag}</li>`
        })

        const tagString = tags.join(' ');

        let pCard = `
            <li class='photographers__list-item show' aria-label='photographer' data-tags='${tagString}' tabIndex='0'>
                <div class='photographers__portrait'>
                    <img src='/images/${portrait}' alt=${pName} />
                </div>
                <a href="photographer.html?id=${id}" class='name-link'><h2>${pName}</h2></a>
                <p class='p--small p--primary-color'>${city}, ${country}</p>
                <p class='p--xsmall'>${tagline}</p>
                <p class='p--small'>${price}€ / Jour</p>
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
            return createPCard(p.portrait, p.name, p.city, p.country, p.tagline, p.price, p.tags, p.id);
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

export default PhotographerFactory;