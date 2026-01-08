const menuIcon = document.querySelector('.menu_icon');
const menuIconImg = document.querySelector('.menu_icon img');
const dropdownContent = document.querySelector('.dropdown_content');
const navTop = document.querySelector('.nav_top')

let isClosed = true;

menuIcon.addEventListener('click', (event) => {
    event.preventDefault();
    if (isClosed) {
        dropdownContent.style.display = 'flex';
        menuIconImg.src = 'img/Icon_close.png';
        navTop.style.backgroundColor = '#FFFFFF';
    } else {
        dropdownContent.style.display = 'none';
        menuIconImg.src = 'img/Vector.png';
        navTop.style.backgroundColor = '#FFFFFF01';
    }

    isClosed = !isClosed;
});