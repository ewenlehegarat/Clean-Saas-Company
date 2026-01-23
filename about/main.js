const buttonExplore = document.querySelector('.button_explore')
const jouralitemText = document.querySelectorAll('.journal_item .text')
const forecastImage = document.querySelector('.forecast_image')

jouralitemText.forEach(itemText => {
    itemText.addEventListener('click', ()=>{
        window.location.href = "/article/index.html"
    })
});

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

const headerImg = document.querySelector('header img')
const observerHeaderImg = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
}, {});
observerHeaderImg.observe(headerImg);

const headerContent = document.querySelector('header .content')
const observerHeaderContent = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() => {
            if (entry.isIntersecting) {
                entry.target.classList.add("view");
            }
        }, 200);
    });
}, {});
observerHeaderContent.observe(headerContent);

const valuesHeader = document.querySelector('.values_section .header')
const observerValueHeader = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
}, {});
observerValueHeader.observe(valuesHeader);

const valuesModules = document.querySelector('.value_modules')
const observerModules = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() => {
            if (entry.isIntersecting) {
                entry.target.classList.add("view");
            }
        }, 600);
    });
}, {});
observerModules.observe(valuesModules);

const eunjiImage = document.querySelector('.eunji_image')
const observerEunji = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
}, {});
observerEunji.observe(eunjiImage);

const FoundersQuote = document.querySelector('.founders_story_section .quote')
const observerFoundersQuote = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() => {
            if (entry.isIntersecting) {
                entry.target.classList.add("view");
            }
        }, 200);
    });
}, {});
observerFoundersQuote.observe(FoundersQuote);

const teamsectionH2 = document.querySelector('.team_section h2')
const observerTeamsectionH2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
}, {});
observerTeamsectionH2.observe(teamsectionH2);

const teamTable = document.querySelector('.table')
const observerTeamTable = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("view");
        }
    });
}, {});
observerTeamTable.observe(teamTable);

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
    forecastImage.src = "img/Forecast_tablet_image.png";
}else{
    forecastImage.src = "img/Forecast_pc_image.png";
}