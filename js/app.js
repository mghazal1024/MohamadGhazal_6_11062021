

const loadData = async () => {
    try {
        const url = "/data.json";
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

loadData().then( (data) => {console.log(data)});



const photographers = document.querySelector('.photographers');

loadData().then( (data) => {
    
    data.photographers.map( photo => {

        //Creating the main li container
        const photographer = document.createElement('li');
        photographer.classList.add('photographers__list-item');

        //Creating the photographers portraits
        const pPortraitContainer = document.createElement('div');
        pPortraitContainer.classList.add('photographers__portrait');

        const pPortrait = document.createElement('img');
        pPortrait.src = "/images/"+photo.portrait;

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
        pCity.innerText = photo.city + ", " + photo.country;
        photographer.appendChild(pCity);

        //Creating the tagline
        const pTagline = document.createElement('p');
        pTagline.innerText = photo.tagline;
        photographer.appendChild(pTagline);

        //Creating the price
        const pPrice = document.createElement('p');
        pPrice.classList.add('p--small', 'p--light-color');
        pPrice.innerText = photo.price + "€/jour";
        photographer.appendChild(pPrice);

        //Creating the tag
        const pTagsList = document.createElement('ul');
        pTagsList.classList.add('photographers__tags');

        console.log(photo.tags);

        photo.tags.map ( tag => {
            const tagItem = document.createElement('li');
            const tagLink = document.createElement('a');
            tagLink.innerText = tag;
            tagItem.appendChild(tagLink);
            pTagsList.appendChild(tagItem);
            photographer.appendChild(pTagsList);
        })
    })

});