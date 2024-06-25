// Function to show and hide the menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggle.classList.toggle('show-icon');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

// Function to show the scroll-up button
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

// ScrollReveal animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300
});

sr.reveal('.home__data');
sr.reveal('.home__image', { rotate: { z: -15 } });
sr.reveal('.home__cup', { rotate: { z: -15 } });
sr.reveal('.home__footer', { scale: 1, origin: 'bottom' });

sr.reveal('.new__card:nth-child(1) img', { rotate: { z: -30 }, distance: 0 });
sr.reveal('.new__card:nth-child(2) img', { rotate: { z: 15 }, distance: 0, delay: 600 });
sr.reveal('.new__card:nth-child(3) img', { rotate: { z: -30 }, distance: 0, delay: 900 });

sr.reveal('.home__data, .favorite__container, .section__title, .experience-box, .feature-vd, .services__content');
sr.reveal('.home__rainbow, .home__moon, .family__data, .family__title, .hana__header', { delay: 1000, interval: 100 });
sr.reveal('.home__ribbon, .new__card, .right_col', { delay: 1200 });
sr.reveal('.aboutme__img, .new__data, .contact__img, .music__description, .music__images, .describe__container', { origin: 'left' });
sr.reveal('.brands-box, .describe__container, .memories__img', { origin: 'right' });
sr.reveal('.banner__item, .family__img, .music__title, .music__subtitle', { interval: 100 });
sr.reveal('.hobby__data')
sr.reveal('.hobby__img, .hobby__indicator, .music__img', { rotate: { z: -15 } })

// Function to update the clock every second
const updateClock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
    document.getElementById("clock").innerHTML = "Current time: " + timeString;
};

// Function to pad single digit numbers with a leading zero
const padZero = (num) => (num < 10 ? "0" : "") + num;

// Update the clock every second
setInterval(updateClock, 1000);

// Function to update the date every second
const updateDate = () => {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = days[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateString = dayOfWeek + ', ' + dayOfMonth + ' ' + month + ' ' + year;
    document.getElementById('date').innerHTML = "Today's date: " + dateString;
};

// Update the date every second
setInterval(updateDate, 1000);

// Initialize clock and date display
updateClock();
updateDate();


showMenu('nav-toggle', 'nav-menu');
$(document).ready(function () {
    $('#imageSlider').carousel({
        interval: 3000,
        pause: 'hover'
    });


    $('#imageSlider').on('slide.bs.carousel', function (event) {
        var indicator = $('.carousel-indicators li');
        indicator.removeClass('active');
        indicator.eq(event.to).addClass('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'bx-sun';

    // Previously selected theme (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // Function to get current theme (dark or light)
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

    // Function to get current icon class
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bx-moon';

    // Apply previously selected theme and icon
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Toggle theme and save to localStorage on button click
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        
        // Save theme and icon choice to localStorage
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const giftCards = document.querySelectorAll('.gift__card');

    giftCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clicked!'); // Check if the click event is being registered

            // Toggle active class to highlight the clicked card (optional)
            giftCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            // Get description from data-description attribute
            const description = card.getAttribute('data-description');
            console.log('Description:', description); // Check if description is retrieved correctly

            // Display description (for debugging, replace with your display method)
            if (description) {
                alert(description); // Replace with your preferred method of displaying description
            } else {
                console.error('Description attribute not found.');
            }
        });
    });

    console.log('Number of gift cards:', giftCards.length); // Check if gift cards are correctly selected
});


function toggleDetail() {
    var detailElement = document.getElementById('details');
    if (detailElement.style.display === 'none' || detailElement.style.display === '') {
        detailElement.style.display = 'block';
    } else {
        detailElement.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const giftCards = document.querySelectorAll('.gift__card');

    giftCards.forEach(card => {
        card.addEventListener('click', function () {
            const description = this.querySelector('.gift__description');
            const overlay = document.querySelector('.overlay');

            description.style.display = 'block';
            overlay.style.display = 'block';

            // Blur the background
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close description on overlay click
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', function () {
        const descriptions = document.querySelectorAll('.gift__description');
        descriptions.forEach(description => {
            description.style.display = 'none';
        });
        this.style.display = 'none';
        
        // Restore scrolling
        document.body.style.overflow = 'auto';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeBtn = document.querySelector(".close-btn");

    // Show the pop-up after 2 seconds
    setTimeout(function() {
        popup.style.display = "block";
    }, 2000);

    // Close the pop-up when the user clicks on <span> (x)
    closeBtn.onclick = function() {
        popup.style.display = "none";
    };

    // Close the pop-up when the user clicks anywhere outside of the pop-up
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.job__slider');

    sliders.forEach(slider => {
        slider.addEventListener('wheel', (e) => {
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
        });
    });
});