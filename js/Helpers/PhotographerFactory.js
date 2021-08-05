
const mainContainer = document.querySelector('.main-container');


// FACTORY FUNCTION
const PhotographerFactory = (photographers) => {

    // Create Photographer card for Homepage
    const createPCard = (portrait, pName, city, country, tagline, tags, id) => {

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
            return createPCard(p.portrait, p.name, p.city, p.country, p.tagline, p.tags, p.id);
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
    // const createPInfoSection = (portrait, pName, city, country, tagline, tags) => {

    //     let pSection = document.createElement('section');
    //     pSection.classList.add('photographer');

    //     let allTags = tags.map( tag => {
    //         return `<li>${tag}</li>`
    //     })

    //     let pInfo = `
    //         <div class="photographer__info">
    //             <div class="photographer__info-contact">
    //                 <h1>${pName}</h1>
    //                 <button>Contactez-moi</button>
    //             </div>
    //             <h4>${city}, ${country}</h4>
    //             <p>${tagline}</p>
    //             <ul class="photographer__tags>
    //                 ${allTags.join(" ")}
    //             </ul>
    //         </div>
    //         <div class="photographer__portrait">
    //             <img src="/images/${portrait}" alt=${pName} />
    //         </div>
    //     `

    //     pSection.innerHTML += pInfo;
    //     photographerSectionFragment.appendChild(pSection)

    // }

    return { createPCardList };

}

export default PhotographerFactory;