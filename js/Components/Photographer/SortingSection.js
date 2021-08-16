const SortingSection = () => {

    let sortingSection = `
        <section class="trier">
            <p>Trier par</p>
            <ul class="trier__list" tabIndex="0" aria-expanded="false" aria-haspopup="true" role="Trier List">
                <li class="chevron" tabIndex="0" role="button"><i class="fas fa-chevron-down"></i>
                <li class="trier__list-item first" data-sort="popularité" role="Trier Option" tabIndex="0">Popularité</li>
                <li class="trier__list-item" data-sort="date" role="Trier Option" tabIndex="0">Date</li>
                <li class="trier__list-item" data-sort="titre" role="Trier Option" tabIndex="0">Titre</li>
            </ul>
        </section>
    `

    return sortingSection;

}

export default SortingSection;



{/* <div class="trier">
            <p>Trier par</p>
            <div class="trier__list">
                <select>
                    <option value="popularite">Popularité</option>
                    <option value="date">Date</option>
                    <option value="titre">Titre</option>
                </select>
            </div>
        </div> */}