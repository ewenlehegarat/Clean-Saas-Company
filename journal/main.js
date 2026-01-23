const buttonExplore = document.querySelector('.button_explore')
const jouralitemText = document.querySelectorAll('.journal_item .text')

const nav = document.querySelector('nav')
const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("view");
            }
        }, 500);
    });
}, {});
observerNav.observe(nav);

const header = document.querySelector('header')
const observerHeader = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
}, {});
observerHeader.observe(header);

const mainH2 = document.querySelector('main h2')
const observerMain = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("view");
            }
        }, 200);
    });
}, {});
observerMain.observe(mainH2);

const journalList = document.querySelector('main .journal_list')
const observerJournal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("view");
            }
        }, 200);
    });
}, {});
observerJournal.observe(journalList);

jouralitemText.forEach(itemText => {
    itemText.addEventListener('click', ()=>{
        window.location.href = "/article/index.html"
    })
});


if(window.innerWidth < 800){
    const menuIcon = document.querySelector('.menu_icon');
    const menuIconImg = document.querySelector('.menu_icon img');
    const dropdownContent = document.querySelector('.dropdown_content');
    const navTop = document.querySelector('.nav_top')

    let isClosed = true;

    menuIcon.addEventListener('click', (event) => {
        event.preventDefault();

        dropdownContent.classList.toggle('is-open');

        if (isClosed) {
            dropdownContent.style.display = 'flex'
            navTop.style.backgroundColor = '#FFFFFF';
            menuIconImg.style.rotate = '180deg'
        }else{
            navTop.style.backgroundColor = '#FFFFFF01';
            menuIconImg.style.rotate = '-135deg'
            setTimeout(() => {
                dropdownContent.style.display = 'none'
            }, 300);
        }

        isClosed = !isClosed;
    });
    

}else if(window.innerWidth > 800 && window.innerWidth < 1280){

}else{

}