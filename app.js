// moblie nav bar 

const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');
const items = document.querySelector('.nav-bar .container ul');

open.addEventListener('click', function () {
    items.classList.toggle('openMenu');
    open.classList.toggle('removeIcon');
    close.classList.toggle('removeIcon');
});

close.addEventListener('click', function () {
    items.classList.toggle('openMenu');
    close.classList.toggle('removeIcon');
    open.classList.toggle('removeIcon');
});


// counters
const counters = document.querySelectorAll('.counters')

counters.forEach(counter => {

    counter.textContent = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        
        const c = +counter.textContent;
        
        const increment = target / 300;

        if(c < target) {
            counter.textContent = Math.ceil(c + increment);
            setTimeout(updateCounter, 1)
        }else {
            counter.textContent = target;
        }

    }
    updateCounter();
})

// scroll up / show button
const UpBtn = document.getElementById('scrollUpBtn');

function Go() {

    if(window.pageYOffset >= 100) {

        UpBtn.style.display = 'inline';
    }else {

        UpBtn.style.display = 'none';
    }
    // console.log(pageYOffset)
}
window.addEventListener('scroll', Go);


// scroll up / click button
UpBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
});


// products img animation
const getImgs = document.querySelectorAll('#img');

getImgs.forEach(function (i) {

    i.addEventListener('mouseover', () => {

        i.style.transition = 'all 0.5s ease';
        i.style.width = '350px';
        i.style.height = '350px';
    })

    i.addEventListener('mouseleave', () => {

        i.style.transition = 'all 0.5s ease';
        i.style.width = '300px';
        i.style.height = '300px';
    })
});


// window onload transition

const removeFadeVid = document.getElementById('fadeUp-vid');
const removeFadePro = document.getElementById('fadeUp-Products');
const removeFadeSer = document.getElementById('fadeUp-Services');
const removeFadeAbo = document.getElementById('fadeUp-AboutUs');
const removeNavbar = document.querySelector('.nav-bar .container ul');

window.onload = function () {
    removeFadeVid.style.transition = 'all 0.2s ease-in-out';
    removeFadeVid.style.paddingTop = '0rem';
    this.addEventListener('scroll', GoUpProducts)
    this.addEventListener('scroll', GoUpServices)
    this.addEventListener('scroll', GoUpAboutUs)
    /*this.addEventListener('scroll', GoUpNavbar)*/
}

function GoUpProducts() {

    if (window.scrollY >= 250) {
        removeFadePro.style.transition = 'all 0.5s ease-in-out';
        removeFadePro.style.paddingTop = '0rem';
    }
}

function GoUpServices() {

    if (window.scrollY >= 1500) {
        removeFadeSer.style.transition = 'all 0.5s ease-in-out';
        removeFadeSer.style.paddingTop = '0rem';
    }
}

function GoUpAboutUs() {

    if (window.scrollY >= 2000) {
        removeFadeAbo.style.transition = 'all 0.5s ease-in-out';
        removeFadeAbo.style.paddingTop = '0rem';
    }
}
/*
function GoUpNavbar() {

    if (window.scrollY >= 104) {
        if (removeNavbar.className = 'openMenu') {
            removeNavbar.classList.remove('openMenu');
            removeNavbar.classList.add('closeMenu');
        }
    }else {
    }
}
*/
// get the google map 

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -25.130280, lng: 32.935000 },
    zoom: 8,
  });
}
