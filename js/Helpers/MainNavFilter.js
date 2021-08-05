const MainNavFilter = (listItems, taggedItems) => {

    listItems.map( listItem => {
        listItem.addEventListener('click', () => {
            if (listItem.innerText !== "#all") {

                listItems.map( listItem => {
                    listItem.classList.remove('selected');
                })

                listItem.classList.add('selected');
                
                //Remove the # from the tags
                const tag = listItem.innerText.slice(1);
                // create a new array with the element that contain the tag
                const filteredData = taggedItems.filter( d => d.dataset.tags.includes(tag));

                taggedItems.map( element => {
                    element.classList.remove('show');
                })

                filteredData.map( filtered => {
                    filtered.classList.add('show');
                })
            } else {
                listItems.map( listItem => {
                    listItem.classList.remove('selected');
                })

                listItem.classList.add('selected');

                taggedItems.map( element => {
                    element.classList.add('show');
                })
            }
        })
    })
}

export default MainNavFilter