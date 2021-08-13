const SortingSection = () => {

    let sortingSection = `
        <section class="trier">
            <p>Trier par</p>
            <ul class="trier__list" tabIndex="0">
                <li class="trier__list-item first" data-sort="popularité" tabIndex="0">Popularité</li>
                <li class="trier__list-item" data-sort="date" tabIndex="0">Date</li>
                <li class="trier__list-item" data-sort="titre" tabIndex="0">Titre</li>
                <li class="chevron" tabIndex="0"><i class="fas fa-chevron-down"></i>
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