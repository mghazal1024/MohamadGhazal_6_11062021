const PhotographerPage = (photographers) => {

    const id = window.location.search.split('id=')[1];
    const mainContainer = document.querySelector('.photographer-main-container');


    const createInfoSection = () => {
        const photographer = photographers.filter(p => p.id == id);

        let { portrait, name, city, country, tagline, tags } = photographer[0];

        let pTags = tags.map( tag => {
            return `<li>${tag}</li>`
        })
        
        let section = `
        <section class="photographer">
            <div class="photographer__info">
                <div class="photographer__info-contact">
                    <h1>${name}</h1>
                    <button>Contactez-moi</button>
                </div>
                <h2 class="primary-color">${city}, ${country}</h2>
                <p>${tagline}</p>
                <ul class="photographer__tags">
                    ${pTags.join(' ')}
                </ul>
            </div>
            <div class="photographer__portrait">
                <img src="/images/${portrait}" alt=${name} />
            </div>
        </section>
        `
        mainContainer.innerHTML += section;

    }

    return { createInfoSection }
}

export default PhotographerPage