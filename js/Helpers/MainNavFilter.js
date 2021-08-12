const MainNavFilter = ( navListItems, taggedElements ) => {

    // Array to hold the selected tags
    let tagArray = [];

    // Function to handle the filter functionality
    const handleFilter = () => {
        taggedElements.map ( element => {
            // create an array from the data tags of the photographer card
            const elementTags = element.dataset.tags.split(' ');
            // an array that holds the same items as the tagArray for comparison
            const filtered = elementTags.filter( t => tagArray.includes(t));

            // comparing array and show element is array is the same
            if (filtered.length > 0 || tagArray.length === 0) {
                element.classList.add('show');
            } else if (filtered.length === 0 ) {
                element.classList.remove('show');
            }
        })
    }


    navListItems.map( listItem => {

        //Function to call the filter after clicking or key pressing the tag
        const filterEvent = () => {
            listItem.classList.toggle('selected');

            //Remove the # from the tag
            const tag = listItem.innerText.slice(1);

            //Push tag to the tagArray if not already included
            if(tagArray.indexOf(tag) === -1) {
                tagArray.push(tag);
            } else {
                tagArray = tagArray.filter( t => t !== tag);
            }

            //Call the function to handle the filter
            handleFilter();
        }

        
        listItem.addEventListener('click', filterEvent)
        listItem.addEventListener('keyup', (event) => {
            let key = event.code;
            if (key === 'Enter' || key === 'Space') {
                filterEvent();
            }
        });
    })
}

export default MainNavFilter