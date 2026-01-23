const buttonExplore = document.querySelector('.button_explore')

const nav = document.querySelector('nav');
const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("view");
            }, 500);
        }
    });
});
observerNav.observe(nav);

const header = document.querySelector('header');
const observerHeader = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
});
observerHeader.observe(header);

const image = document.querySelector('.image');
const observerImage = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("view");
            }, 200);
        }
    });
});
observerImage.observe(image);

const introductionText = document.querySelector('.introduction_text');
const observerIntroductionText = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
});
observerIntroductionText.observe(introductionText);

const articleContainer = document.querySelector('.article_container');
const observerArticleContainer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
});
observerArticleContainer.observe(articleContainer);

if(window.innerWidth < 800){
    const menuIcon = document.querySelector('.menu_icon');
    const menuIconImg = document.querySelector('.menu_icon img');
    const dropdownContent = document.querySelector('.dropdown_content');
    const navTop = document.querySelector('.nav_top')

    let isClosed = true;

    menuIcon.addEventListener('click', (event) => {
        event.preventDefault();
        if (isClosed) {
            dropdownContent.style.display = 'flex';
            navTop.style.backgroundColor = '#FFFFFF';
            menuIconImg.style.rotate = "180deg"
        } else {
            dropdownContent.style.display = 'none';
            navTop.style.backgroundColor = '#FFFFFF01';
            menuIconImg.style.rotate = "-135deg"
        }

        isClosed = !isClosed;
    });
    

}else if(window.innerWidth > 800 && window.innerWidth < 1280){

}else{

}