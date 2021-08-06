const ImageLike = (data) => {
    console.log(data)

    const heartsUnselected = [...document.querySelectorAll('.image__rating i.unselected')];
    const heartsSelected = [...document.querySelectorAll('.image__rating i.selected')]

    heartsUnselected.map( heart => {
        heart.addEventListener('click', (event) => {
            const parent = event.target.parentElement;
            const image = parent.parentElement;
            const imageTitle = image.querySelector('.image__title').innerText;
            const selectedImage = data.filter( d => d.title == imageTitle);
            let likes = selectedImage[0].likes;

            const heartSelected = parent.querySelector('.selected');

            heart.classList.replace('show', 'hidden');
            heartSelected.classList.replace('hidden', 'show');
            likes += 1;

            const likesText = image.querySelector('.image__rating h4');
            likesText.innerText = likes;
        })
    })

    
    heartsSelected.map( heart => {
        heart.addEventListener('click', (event) => {
            const parent = event.target.parentElement;
            const image = parent.parentElement;
            const imageTitle = image.querySelector('.image__title').innerText;
            const selectedImage = data.filter( d => d.title == imageTitle);
            let likes = selectedImage[0].likes;

            const heartUnselected = parent.querySelector('.unselected');

            heart.classList.replace('show', 'hidden');
            heartUnselected.classList.replace('hidden', 'show');

            const likesText = image.querySelector('.image__rating h4');
            likesText.innerText = likes;
        })
    })

}

export default ImageLike;