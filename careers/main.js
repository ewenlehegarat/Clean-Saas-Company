const buttonExplore = document.querySelector('.button_explore')
const jouralitemText = document.querySelectorAll('.journal_item .text')

jouralitemText.forEach(itemText => {
    itemText.addEventListener('click', ()=>{
        window.location.href = "index.html"
    })
});

const nav = document.querySelector('nav')
const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("view");
            }, 500);
        }
    });
}, {});
observerNav.observe(nav);

const headerText = document.querySelector('.header_text')
const observerHeaderText = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
}, {});
observerHeaderText.observe(headerText);

const jobListing = document.querySelector('.job_listing')
const observerJobListing = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("view");
            }, 200);
        }
    });
}, {});
observerJobListing.observe(jobListing);

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
            menuIconImg.src = '/img/Icon_close.png';
            navTop.style.backgroundColor = '#FFFFFF';
        } else {
            dropdownContent.style.display = 'none';
            menuIconImg.src = '/img/Vector.png';
            navTop.style.backgroundColor = '#FFFFFF01';
        }

        isClosed = !isClosed;
    });
    

}else if(window.innerWidth > 800 && window.innerWidth < 1280){

}else{

}