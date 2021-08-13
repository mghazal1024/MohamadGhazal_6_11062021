import ImagesSection from "../Components/Photographer/ImagesSection.js";

const Sorting = (media) => {

    const chevron = document.querySelector('.trier .trier__list .chevron');
    const trierList = document.querySelector('.trier__list');
    const trier = [...document.querySelectorAll('.trier__list li.trier__list-item')];

    const galleryContainer = document.querySelector('.photographer__images');

    trierList.addEventListener('click', () => {
        trierList.classList.toggle('selected');
        chevron.classList.toggle('reversed');
    })

    trier.map ( t => {
        t.addEventListener('click', () => {
            const dataSortValue = t.attributes[1].nodeValue;

            trier.map( t => {
                t.classList.remove('first');
            })

            t.classList.add('first');
            if (dataSortValue === "popularité") {
                media.sort((a, b) => {
                    return b.likes - a.likes;
                })
            }
            if (dataSortValue === "titre") {
                media.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1
                    }
                    return 0;
                })
            }
            if (dataSortValue === "date") {
                media.sort((a, b) => {
                    if (a.date < b.date) {
                        return -1
                    }
                    if (a.date > b.date) {
                        return 1
                    }
                    return 0;
                })
            }
            console.log(media)
            // galleryContainer.innerHTML = "";
            // galleryContainer.innerHTML = ImagesSection(media);
        })
    })



}

export default Sorting;

