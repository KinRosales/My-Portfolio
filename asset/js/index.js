document.addEventListener('DOMContentLoaded', function () {
    // get references to the containers
    const containers = {
        home: document.querySelector('.home'),
        about: document.querySelector('.about-me'),
        projects: document.querySelector('.projects'),
        contact: document.querySelector('.contact')
    };

     // get the links in the header
    const links = {
        logo: document.getElementById('logo').querySelector('a'),
        aboutLink: document.getElementById('aboutLink'),
        projectsLink: document.getElementById('projectsLink'),
        contactLink: document.getElementById('contactLink'),
        seeMoreAboutMe: document.querySelector('.see_more a'),
        continueToProjects: document.querySelector('.continueToProjects a'),
        continueToContact: document.querySelector('.continueToContact a')
    };

    // add event listeners to navigation links to show corresponding containers
    links.logo.addEventListener('click', () => showContainer(containers.home)); // show Home section
    links.aboutLink.addEventListener('click', () => showContainer(containers.about)); //show About section
    links.seeMoreAboutMe.addEventListener('click', (event) => {
        event.preventDefault(); // prevent the default behavior of the link
        showContainer(containers.about); // show expanded About section
    });
    links.projectsLink.addEventListener('click', () => showContainer(containers.projects));
    links.continueToProjects.addEventListener('click', (event) => {
        event.preventDefault(); // prevent the default behavior of the link
        showContainer(containers.projects); // show Projects section
    });
    links.contactLink.addEventListener('click', () => showContainer(containers.contact));
    links.continueToContact.addEventListener('click', (event) => {
        event.preventDefault(); // prevent the default behavior of the link
        showContainer(containers.contact); // show Projects section
    });

    // function to display a specific container and hide others
    function showContainer(container) {
        // hide all containers except the specified one
        Object.values(containers).forEach(c => c.style.display = 'none');
        container.style.display = 'block';
    }
    // add click event listeners to navigation items and logo
    const navItems = document.querySelectorAll('.navlist li a, #logo a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // uncheck the checkbox when a navigation item or logo is clicked
            document.getElementById('click').checked = false; 
        });
    });

    var lightModeIcon = document.getElementById("lightModeIcon");
    var logo = document.getElementById("logo").querySelector("img");
    
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

// function to toggle video popup
function toggle(event) {
    var projects = document.getElementById('projects');
    projects.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');

    // check if event is defined and if not, return
    if (!event) return;

    var clickedCard = event.target.closest('.card-item');
    var videoSrc;

    if (clickedCard) {
        var title = clickedCard.querySelector('h3').textContent;

        // define video source based on the clicked card title
        switch (title) {
            case "Student Homework Tracker":
                videoSrc = "asset/vid/HomeworkTracker.mp4";
                break;
            case "Password Generator":
                videoSrc = "asset/vid/PasswordGenerator.mp4";
                break;
            case "Login System":
                videoSrc = "asset/vid/LoginSystem(java).mp4";
                break;
            case "Simple Calculator":
                videoSrc = "asset/vid/Simple-Calculator.mp4";
                break;
            default:
                break;
        }

        // set video source if it's defined
        if (videoSrc) {
            var video = document.querySelector('#popup video');
            video.src = videoSrc;
        }
    }

    // get the header element
    var header = document.getElementById('header');

    // disable header when popup is active
    if (popup.classList.contains('active')) {
        header.classList.add('disabled');
    } else {
        header.classList.remove('disabled');
    }

    // listen for transition end event on popup
    popup.addEventListener('transitionend', function () {
        if (!popup.classList.contains('active')) {
            header.classList.remove('disabled');
        }
    });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzyCoVoTFs6p9cgmGH0tzVaKbwrXELRanhkRjOleIqjCIhy4-zAQ18TV8EUlL526rTpSA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 3000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})