const PriceSection = (photographer, media) => {

    console.log(photographer);
    console.log(media);

    let priceSection = `
        <section class="like-and-price-section">
            <div class="like-container">
                <h4>450</h4>
                <h4>O</h4>
            </div>
            <h4>${photographer[0].price}€ / Jour</h4>
        </section>
    `
    return priceSection;

}

export default PriceSection;