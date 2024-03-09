document.addEventListener('DOMContentLoaded', function () {
    // get references to the containers
    var homeContainer = document.querySelector('.home');
    var aboutContainer = document.querySelector('.about-me');
    var projectsContainer = document.querySelector('.projects');
    var contactContainer = document.querySelector('.contact');

    // get the "About" link in the header
    var aboutLink = document.getElementById('aboutLink');
    var projectsLink = document.getElementById('projectsLink');
    var contactLink = document.getElementById('contactLink');

    // get the "See more About Me" link
    var seeMoreAboutMe = document.querySelector('.see_more a');

    // get the "Continue to Projects" link
    var continueToProjects = document.querySelector('.continueToProjects a');
    
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
        event.preventDefault(); // prevent the default action of the link
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
        event.preventDefault(); // prevent the default action of the link
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

// Function to update hash in URL
function updateHash(section) {
    history.replaceState(null, null, `#${section}`);
}

// Function to check hash value and show appropriate section
window.onload = function () {
    var hash = window.location.hash;
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

// Function to handle navigation link click
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