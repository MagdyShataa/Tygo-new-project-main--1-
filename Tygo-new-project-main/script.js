


var theme = document.getElementById("theme");

function myFunction() {
    if (localStorage.getItem('isDarkMode') == 'true') {
        localStorage.setItem('isDarkMode', false)
    }
    else { localStorage.setItem('isDarkMode', true) }
    toggle_color();
};

function toggle_color() {
    if (localStorage.getItem('isDarkMode') == 'true') {
        theme.innerHTML = 'Light';
        document.body.classList.add('dark-mode');
    }
    if (localStorage.getItem('isDarkMode') === 'false') {
        theme.innerHTML = 'Dark';
        document.body.classList.remove('dark-mode');
    };
}
toggle_color()





// swiper configration
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: -10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: -30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: -30,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
})

















