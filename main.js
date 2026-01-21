const buttonExplore = document.querySelector('.button_explore')

const nav = document.querySelector('nav')
const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("nav_view");
            }
        }, 500);
    });
}, {});
observerNav.observe(nav);

const introContent = document.querySelector('.intro_content')
const observerIntro = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("intro_view");
        }
    });
}, {});
observerIntro.observe(introContent);

const heroImage = document.querySelector('.hero_image')
const observerHero = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("hero_view");
            }
        }, 200);
    });
}, {});
observerHero.observe(heroImage);

const everythingText = document.querySelector('.everything_text')
const observerEvery = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("every_view");
            }
        }, 300);
    });
}, {});
observerEvery.observe(everythingText);

const featuresContent = document.querySelector('.features_section .content')
const observerContent = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("content_view");
            }
        }, 600);
    });
}, {});
observerContent.observe(featuresContent);

const valueHeader = document.querySelector('.value_section .header')
const observerHeader = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("header_view");
        }
    });
}, {});
observerHeader.observe(valueHeader);

const valueModules = document.querySelector('.value_modules')
const observerValue = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        setTimeout(() =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("value_view");
            }
        }, 600);
    });
}, {});
observerValue.observe(valueModules);

const valueCase = document.querySelector('.case_study_module')
const observerCase = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("case_view");
        }
    });
}, {});
observerCase.observe(valueCase);

const valueBlog = document.querySelector('.blog_section')
const observerBlog = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("blog_view");
        }
    });
}, {});
observerBlog.observe(valueBlog);

const stickerContainer = document.querySelector('.sticker_container');
const observerSticker = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("sticker_view");
            }, 600);
        }
    });
});
observerSticker.observe(stickerContainer);

const testimonial = document.querySelector('.testimonial_section .content img')
const observerTesti = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("testi_view");
        }
    });
}, {});
observerTesti.observe(testimonial);

const testiQuote = document.querySelector('.quote');
const observerQuote = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("quote_view");
            }, 600);
        }
    });
});
observerQuote.observe(testiQuote);



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
            menuIconImg.src = 'img/Icon_close.png';
            navTop.style.backgroundColor = '#FFFFFF';
        } else {
            dropdownContent.style.display = 'none';
            menuIconImg.src = 'img/Vector.png';
            navTop.style.backgroundColor = '#FFFFFF01';
        }

        isClosed = !isClosed;
    });


    buttonExplore.addEventListener('click', ()=>{
        window.scrollTo({
            top : 680,
            behavior: 'smooth'
        })
    })
}

if(window.innerWidth > 800 && window.innerWidth < 1280){
    buttonExplore.addEventListener('click', ()=>{
        window.scrollTo({
            top : 1250,
            behavior: 'smooth'
        })
    })
}

if(window.innerWidth > 1280){
    buttonExplore.addEventListener('click', ()=>{
        window.scrollTo({
            top : 1194,
            behavior: 'smooth'
        })
    })
}