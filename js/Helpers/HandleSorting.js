const HandleSorting = () => {

    const chevron = document.querySelector('.trier .trier__list .chevron');
    const trierList = document.querySelector('.trier__list');
    const trier = [...document.querySelectorAll('.trier__list li.trier__list-item')];

    const galleryContainer = document.querySelector('.photographer__images-list');
    const galleryItems = [...document.querySelectorAll('.photographer__images-list li')];

    trierList.addEventListener('click', () => {
        trierList.classList.toggle('selected');
        chevron.classList.toggle('reversed');
    })
    trierList.addEventListener('focus', () => {
        trierList.classList.toggle('selected');
        chevron.classList.toggle('reversed');
    })
    trierList.addEventListener('keyup', (event) => {
        let key = event.key;
        if (key === 'Enter' || key === 'Space') {
            trierList.classList.toggle('selected');
            chevron.classList.toggle('reversed');
        }
    })

    const handleResorting = () => {
        for( let i = 0; i < galleryItems.length; i++ ) {
            galleryContainer.insertBefore(galleryItems[i], galleryContainer.firstChild);
        }
    }

    trier.map ( t => {
        t.addEventListener('click', () => {

            const dataSortValue = t.attributes[1].nodeValue;

            const sortItems = () => {
                trier.map( t => {
                    t.classList.remove('first');
                })
                t.classList.add('first');

                if( dataSortValue === "popularité") {
                    galleryItems.sort((a,b) => {
                        return a.dataset.likes - b.dataset.likes;
                    })
                    
                    handleResorting();
                }
                if( dataSortValue === "titre") {
                    galleryItems.sort((a, b) => {
                        let aDataset = a.dataset.title.toLowerCase();
                        let bDataset = b.dataset.title.toLowerCase();

                        if (aDataset < bDataset) {
                            return 1
                        }
                        if (aDataset > bDataset) {
                            return -1
                        }
                        return 0
                    })
                    handleResorting();
                }
                if(dataSortValue === 'date') {
                    galleryItems.sort((a, b) => {
                        let aDataset = a.dataset.date;
                        let bDataset = b.dataset.date;
                        if( aDataset < bDataset ) {
                            return 1;
                        }
                        if( aDataset > bDataset ) {
                            return -1;
                        }
                        return 0
                    })
                    handleResorting();
                }

            }

            sortItems();

        })

        t.addEventListener('keyup', (event) => {
            let key = event.key;
            if( key === 'Enter' || key === 'Space') {
                const dataSortValue = t.attributes[1].nodeValue;

                const sortItems = () => {
                    trier.map( t => {
                        t.classList.remove('first');
                    })
                    t.classList.add('first');
    
                    if( dataSortValue === "popularité") {
                        galleryItems.sort((a,b) => {
                            return a.dataset.likes - b.dataset.likes;
                        })
                        
                        handleResorting();
                    }
                    if( dataSortValue === "titre") {
                        galleryItems.sort((a, b) => {
                            let aDataset = a.dataset.title.toLowerCase();
                            let bDataset = b.dataset.title.toLowerCase();
    
                            if (aDataset < bDataset) {
                                return 1
                            }
                            if (aDataset > bDataset) {
                                return -1
                            }
                            return 0
                        })
                        handleResorting();
                    }
                    if(dataSortValue === 'date') {
                        galleryItems.sort((a, b) => {
                            let aDataset = a.dataset.date;
                            let bDataset = b.dataset.date;
                            if( aDataset < bDataset ) {
                                return 1;
                            }
                            if( aDataset > bDataset ) {
                                return -1;
                            }
                            return 0
                        })
                        handleResorting();
                    }
    
                }

                sortItems();
            }
        })
    })



}

export default HandleSorting;

