// Component that create the html for the section which displays the price and total likes

const PriceSection = (photographer, totalLikes) => {

    let priceSection = `
        <section class="like-and-price-section">
            <div class="like-container">
                <h4 tabIndex="0" aria-label="${totalLikes} Total Likes">${totalLikes}</h4>
                <i class="fas fa-heart"></i>
            </div>
            <h4 tabIndex="0">${photographer[0].price}€ / Jour</h4>
        </section>
    `
    return priceSection;

}

export default PriceSection;