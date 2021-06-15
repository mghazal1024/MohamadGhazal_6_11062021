

const loadData = async () => {
    try {
        const url = "/data.json";
        const result = await fetch(url);
        const data = await result.json();
        // console.log(data.photographers);
        // const photographers = data.photographers;
        // const filtered = photographers.filter( d => d.tags.includes('architecture'));
        // console.log(filtered);
        return data;
        
    } catch (err) {
        console.error(err);
    }
}


// Main nav
const mainNavList = document.querySelector('header nav ul');
//Photographers 
const photographers = document.querySelector('.photographers');

loadData().then( (data) => {

    const generalTags = ["portrait", "art", "fashion", "architecture", "travel", "sport", "animals", "events"];

    generalTags.map( generalTag => {
        const tagItem = document.createElement('li');
        const tagButton = document.createElement('button');
        tagButton.innerText = `#${generalTag}`;
    
        tagItem.appendChild(tagButton);
        mainNavList.appendChild(tagItem);
        tagButton.addEventListener('click', () => {
            const filteredData = data.photographers.filter( d => d.tags.includes(generalTag));
            console.log(filteredData);
            
            photographers.innerHTML="";
            
            filteredData.map( photo => {

                //Creating the main li container
                const photographer = document.createElement('li');
                photographer.classList.add('photographers__list-item');
        
                //Creating the photographers portraits
                const pPortraitContainer = document.createElement('div');
                pPortraitContainer.classList.add('photographers__portrait');
        
                const pPortrait = document.createElement('img');
                pPortrait.src = `/images/${photo.portrait}`;
        
                pPortraitContainer.appendChild(pPortrait);
                photographer.appendChild(pPortraitContainer);
        
                //Creating the photographers name that links to the page
                const pLink = document.createElement('a');
                const pName = document.createElement('h2');
        
                pName.innerText = photo.name;
                pLink.appendChild(pName);
                photographer.appendChild(pLink);
                photographers.appendChild(photographer);
            
                //Creating the city name
                const pCity = document.createElement('h4');
                pCity.innerText = `${photo.city}, ${photo.country}`;
                photographer.appendChild(pCity);
        
                //Creating the tagline
                const pTagline = document.createElement('p');
                pTagline.innerText = photo.tagline;
                photographer.appendChild(pTagline);
        
                //Creating the price
                const pPrice = document.createElement('p');
                pPrice.classList.add('p--small', 'p--light-color');
                pPrice.innerText = `${photo.price}€/Jour`;
                photographer.appendChild(pPrice);
        
                //Creating the tags
                const pTagsList = document.createElement('ul');
                pTagsList.classList.add('photographers__tags');
        
                photo.tags.map ( tag => {
                    const tagItem = document.createElement('li');
                    const tagLink = document.createElement('p');
                    tagLink.innerText = `#${tag}`;
                    tagItem.appendChild(tagLink);
                    pTagsList.appendChild(tagItem);
                    photographer.appendChild(pTagsList);
                })
            })



        })
    });



    //Initial Render
    data.photographers.map( photo => {

        //Creating the main li container
        const photographer = document.createElement('li');
        photographer.classList.add('photographers__list-item');

        //Creating the photographers portraits
        const pPortraitContainer = document.createElement('div');
        pPortraitContainer.classList.add('photographers__portrait');

        const pPortrait = document.createElement('img');
        pPortrait.src = `/images/${photo.portrait}`;

        pPortraitContainer.appendChild(pPortrait);
        photographer.appendChild(pPortraitContainer);

        //Creating the photographers name that links to the page
        const pLink = document.createElement('a');
        const pName = document.createElement('h2');

        pName.innerText = photo.name;
        pLink.appendChild(pName);
        photographer.appendChild(pLink);
        photographers.appendChild(photographer);
    
        //Creating the city name
        const pCity = document.createElement('h4');
        pCity.innerText = `${photo.city}, ${photo.country}`;
        photographer.appendChild(pCity);

        //Creating the tagline
        const pTagline = document.createElement('p');
        pTagline.innerText = photo.tagline;
        photographer.appendChild(pTagline);

        //Creating the price
        const pPrice = document.createElement('p');
        pPrice.classList.add('p--small', 'p--light-color');
        pPrice.innerText = `${photo.price}€/Jour`;
        photographer.appendChild(pPrice);

        //Creating the tags
        const pTagsList = document.createElement('ul');
        pTagsList.classList.add('photographers__tags');

        photo.tags.map ( tag => {
            const tagItem = document.createElement('li');
            const tagLink = document.createElement('p');
            tagLink.innerText = `#${tag}`;
            tagItem.appendChild(tagLink);
            pTagsList.appendChild(tagItem);
            photographer.appendChild(pTagsList);
        })
    })

});

