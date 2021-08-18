// Component that create the html for the Photographer page info section

const InfoSection = (portrait, name, city, country, tagline, tags) => {

    let pTags = tags.map( tag => {
        return `<li tabIndex="0">#${tag}</li>`
    })

    let infoSection = `
        <section class="photographer">
            <div class="photographer__info">
                <div class="photographer__info-contact">
                    <h1 tabIndex="0">${name}</h1>
                    <button>Contactez-moi</button>
                </div>
                <h2 tabIndex="0" class="primary-color">${city}, ${country}</h2>
                <p tabIndex="0">${tagline}</p>
                <ul class="photographer__tags">
                    ${pTags.join(' ')}
                </ul>
            </div>
            <div class="photographer__portrait">
                <img src="images/${portrait}" alt=${name} />
            </div>
        </section>
        `
    return infoSection;
}

export default InfoSection