// Component that create the html for the Main tag navigation in the homepage
const HeaderTags = () => {

    const mainNavList = document.querySelector('header nav ul');
    const mainNavFragment = document.createDocumentFragment();

    //Creating the nav tag items
    const generalTags = ["portrait", "art", "fashion", "architecture", "travel", "sport", "animals", "events"];
    generalTags.map( generalTag => {
        const tagItem = document.createElement('li');
        tagItem.innerText = `#${generalTag}`;
        tagItem.setAttribute('tabIndex', '0');
        tagItem.setAttribute('role', 'button');
        tagItem.setAttribute('aria-label', `${generalTag}`);

        mainNavFragment.appendChild(tagItem);
    });
    mainNavList.appendChild(mainNavFragment);

}

export default HeaderTags;