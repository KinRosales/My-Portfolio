document.addEventListener('DOMContentLoaded', function () {
    // get references to the containers
    var homeContainer = document.querySelector('.home');
    var aboutContainer = document.querySelector('.about-me');
    var projectsContainer = document.querySelector('.projects');
    var contactContainer = document.querySelector('.contact');

    // get the links in the header
    var logo = document.getElementById('logo');
    var aboutLink = document.getElementById('aboutLink');
    var projectsLink = document.getElementById('projectsLink');
    var contactLink = document.getElementById('contactLink');

    // get the "See more About Me" link
    var seeMoreAboutMe = document.querySelector('.see_more a');

    // get the "Continue to Projects" link
    var continueToProjects = document.querySelector('.continueToProjects a');

    var lightModeIcon = document.getElementById("lightModeIcon");
    var logo = document.getElementById("logo").querySelector("img");
    
    lightModeIcon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            lightModeIcon.src = "asset/img/DarkMode.png";
            logo.src = "asset/img/KJR_Logo(black).png";
        } else {
            lightModeIcon.src = "asset/img/LightMode.png";
            logo.src = "asset/img/KJR_Logo(white).png";
        }
    }

    // check if there is a theme stored in localStorage
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        lightModeIcon.src = "asset/img/DarkMode.png";
        logo.src = "asset/img/KJR_Logo(black).png";
    } else {
        document.body.classList.remove('dark-theme');
        lightModeIcon.src = "asset/img/LightMode.png";
        logo.src = "asset/img/KJR_Logo(white).png";
    }
    
    lightModeIcon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            lightModeIcon.src = "asset/img/DarkMode.png";
            logo.src = "asset/img/KJR_Logo(black).png";
            // Store the theme in localStorage
            localStorage.setItem('theme', 'dark');
        } else {
            lightModeIcon.src = "asset/img/LightMode.png";
            logo.src = "asset/img/KJR_Logo(white).png";
            // Remove the theme from localStorage
            localStorage.removeItem('theme');
        }
    }
    
    // add a click event listener to the "Home" link
    logo.addEventListener('click', function () {
        // hide containers
        aboutContainer.style.display = 'none';
        projectsContainer.style.display = 'none';
        contactContainer.style.display = 'none';
        // show homeContainer
        homeContainer.style.display = 'block';
    });

    // add a click event listener to the "About" link
    aboutLink.addEventListener('click', function () {
        // hide containers
        homeContainer.style.display = 'none';
        projectsContainer.style.display = 'none';
        contactContainer.style.display = 'none';
        // show aboutContainer
        aboutContainer.style.display = 'block';
    });

    // add a click event listener to the "See more About Me" link
    seeMoreAboutMe.addEventListener('click', function (event) {
         // prevent the default action of the link
        event.preventDefault();
        // hide containers
        homeContainer.style.display = 'none';
        projectsContainer.style.display = 'none';
        contactContainer.style.display = 'none';
        // show aboutContainer
        aboutContainer.style.display = 'block';
    });

    // add a click event listener to the "Projects" link
    projectsLink.addEventListener('click', function () {
        // hide containers
        aboutContainer.style.display = 'none';
        homeContainer.style.display = 'none';
        contactContainer.style.display = 'none';
        // show 
        projectsContainer.style.display = 'block';
    });
    
    // add a click event listener to the "Projects" link
    continueToProjects.addEventListener('click', function (event) {
        event.preventDefault(); 
        // hide containers
        homeContainer.style.display = 'none';
        aboutContainer.style.display = 'none';
        contactContainer.style.display = 'none';
        // show aboutContainer
        projectsContainer.style.display = 'block';
    });
    
    contactLink.addEventListener('click', function () {
        // hide containers
        homeContainer.style.display = 'none';
        aboutContainer.style.display = 'none';
        projectsContainer.style.display = 'none';
        // show container
        contactContainer.style.display = 'block';
    });
    
});

// function to update hash in URL
function updateHash(section) {
    history.replaceState(null, null, `#${section}`);
}

logo.addEventListener('click', function () {
    window.location.hash = '#home';
});

// function to check hash value and show appropriate section
window.onload = function () {
    var hash = window.location.hash;
    // Remove the '#' from the hash
    // var hash = window.location.hash.slice(1); 
    var sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
        section.style.display = "none";
    });
    if (hash === "#about") {
        document.getElementById("about").style.display = "block";
    } else if (hash === "#projects") {
        document.getElementById("projects").style.display = "block";
    } else if (hash === "#contact") {
        document.getElementById("contact").style.display = "block";
    } else {
        document.getElementById("home").style.display = "block";
    }
    window.scrollTo(0, 0); 
};

// function to handle navigation link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var hash = this.getAttribute('href');
        var targetSection = document.querySelector(hash);
        var offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

function toggle(event){
    // var blurContainers = document.querySelectorAll('projects');
    // blurContainers.forEach(container => {
    //     container.classList.toggle('active');
    // });

    var projects = document.getElementById('projects');
    projects.classList.toggle('active')

    var popup = document.getElementById('popup');
    popup.classList.toggle('active')

    // check if event is defined and if not, return
    if (!event) return;

    var clickedCard = event.target.closest('.card-item');

    if (clickedCard.querySelector('h3').textContent === "Student Homework Tracker") {
        var video = document.querySelector('#popup video');
        video.src = "asset/vid/HomeworkTracker.mp4";
    } else if (clickedCard.querySelector('h3').textContent === "Password Generator") {
        var video = document.querySelector('#popup video');
        video.src = "asset/vid/PasswordGenerator.mp4";
    } else if (clickedCard.querySelector('h3').textContent === "Login System") {
        var video = document.querySelector('#popup video');
        video.src = "asset/vid/LoginSystem(java).mp4";
    } else if (clickedCard.querySelector('h3').textContent === "Simple Calculator") {
        var video = document.querySelector('#popup video');
        video.src = "asset/vid/Simple-Calculator.mp4";
    }

    // disable header when popup is active
    var header = document.getElementById('mainHeader');
    header.classList.toggle('disabled');

    // listen for transition end event on popup
    popup.addEventListener('transitionend', function() {
        if (!popup.classList.contains('active')) {
            header.classList.remove('disabled');
        }
    });
    // var popupSpan = document.querySelector('#popup span');
    // popupSpan.classList.toggle('active');
}