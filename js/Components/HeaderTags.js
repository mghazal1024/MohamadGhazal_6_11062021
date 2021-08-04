
const HeaderTags = () => {

    const mainNavList = document.querySelector('header nav ul');
    const mainNavFragment = document.createDocumentFragment();

    //Adding an ALL tag to the main navigation
    const allTag = document.createElement('li')
    allTag.classList.add('selected');
    allTag.innerHTML = "#all";
    mainNavList.appendChild(allTag);

    //Creating the nav tag items
    const generalTags = ["portrait", "art", "fashion", "architecture", "travel", "sport", "animals", "events"];
    generalTags.map( generalTag => {
        const tagItem = document.createElement('li');
        tagItem.innerText = `#${generalTag}`;
        tagItem.setAttribute('tabIndex', '0');

        mainNavFragment.appendChild(tagItem);
    });
    mainNavList.appendChild(mainNavFragment);

}

export default HeaderTags;