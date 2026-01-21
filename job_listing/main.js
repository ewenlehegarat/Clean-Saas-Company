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