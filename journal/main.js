const buttonExplore = document.querySelector('.button_explore')
const jouralitemText = document.querySelectorAll('.journal_item .text')

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