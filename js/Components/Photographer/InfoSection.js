const InfoSection = (portrait, name, city, country, tagline, tags) => {

    let pTags = tags.map( tag => {
        return `<li>${tag}</li>`
    })

    let infoSection = `
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
    return infoSection;
}

export default InfoSection