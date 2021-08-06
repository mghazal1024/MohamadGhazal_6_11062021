const PriceSection = (photographer, totalLikes) => {

    // let totalLikes = 0;

    // media.map( item => {
    //     totalLikes += item.likes;
    //     console.log(totalLikes)
    // })

    let priceSection = `
        <section class="like-and-price-section">
            <div class="like-container">
                <h4>${totalLikes}</h4>
                <i class="fas fa-heart"></i>
            </div>
            <h4>${photographer[0].price}€ / Jour</h4>
        </section>
    `
    return priceSection;

}

export default PriceSection;