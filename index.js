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

    // add a click event listener to the "About" link
    projectsLink.addEventListener('click', function () {
        // hide containers
        aboutContainer.style.display = 'none';
        homeContainer.style.display = 'none';
        contactContainer.style.display = 'none';
        // show 
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

// -----------BLUR-----------

// JavaScript code to remove blur from elements with class "blur"
function removeBlur() {
    const blurElements = document.querySelectorAll('.blur');
    blurElements.forEach(element => {
        element.classList.remove('blur');
    });
}


// Call the function to remove blur when the page loads
window.onload = function() {
    removeBlur();
};
