// Component that create the html for the Sorting dropdown menu
const SortingSection = () => {

    let sortingSection = `
        <section class="trier">
            <p id="listboxlabel" role="label">Trier par</p>
            <ul class="trier__list" role="list" tabindex="0" id="listbox" aria-labelledby="listboxlabel" aria-expanded="false">
                <li class="chevron"><i class="fas fa-chevron-down"></i>
                <li class="trier__list-item first" data-sort="popularité" tabIndex="0">Popularité</li>
                <li class="trier__list-item" data-sort="date" tabIndex="0">Date</li>
                <li class="trier__list-item" data-sort="titre" tabIndex="0">Titre</li>
            </ul>
        </section>
    `

    

    return sortingSection;

}

export default SortingSection;