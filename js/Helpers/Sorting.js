const Sorting = () => {

    const chevron = document.querySelector('.trier .trier__list .chevron');
    const trierList = document.querySelector('.trier__list');
    const trier = [...document.querySelectorAll('.trier__list li.trier__list-item')];

    trierList.addEventListener('click', () => {
        trierList.classList.toggle('selected');
        chevron.classList.toggle('reversed');
    })

    trier.map ( t => {
        t.addEventListener('click', () => {
            trier.map( t => {
                t.classList.remove('first');
            })
            t.classList.add('first');
        })
    })



}

export default Sorting;