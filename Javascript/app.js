/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Listening For Content Load To Complete
window.addEventListener('DOMContentLoaded', (event) => {
    /**
    * ** GLOBAL VARIABLES **
    * 
    */
    // Accessing Navbar List
    const navList = document.getElementById('navbar__list');

    // Accessing All (5) Sections
    const sections = document.querySelectorAll('section');

    // Accessing All '.landing__container' Divs
    const containers = document.querySelectorAll('.landing__container');

    // Accessing Contact Section
    const contactSection = document.getElementById('section5');

    /**
     * ** END GLOBAL VARIABLES **
     * ** START HELPER FUNCTIONS **
     * 
    */
    // Getting Text For Links From Container Headings
    const getLinkText = () => {
        // Creating An Array To Store Text
        const textArray = []
        // Iterating Through Container Divs
        containers.forEach((container) => {
            // Accessing Container Headings
            const containerHeadings = container.querySelectorAll('h2');
            // Iterating Through Container Headings
            containerHeadings.forEach((heading) => {
                // Creating a Class on the Headings
                heading.classList.add('container__heading');
                // Getting the Heading innerText
                const text = heading.innerText;
                // Push Heading innerText to Array
                textArray.push(text);
            });
        });
        // Return the Array of Text
        return textArray;
    };

    // Displaying/Hiding Back To Top Button
    const displayButton = () => {
        // Retrieving Section Viewport Position
        const contactPosition = contactSection.getBoundingClientRect();
        // If contactPosition Is Within Frame
        if (contactPosition.top <= 80) {
            // Display BackToTop Button
            backToTop.style.display = 'block';
        } else {
            // Hide BackToTop Button
            backToTop.style.display = 'none';
        }
    }
    /**
     * ** END HELPER FUNCTIONS **
     * ** BEGIN MAIN FUNCTIONS **
     * 
    */
    // Building Navigation
    const buildNav = () => {
        // Iterating Through Sections NodeList
        sections.forEach((section, index) => {
            // Creating List Item Element
            const listItem = document.createElement('li');
            // Creating Class on List Item
            listItem.classList.add('navbar__item');
            // Create a Link Element
            const link = document.createElement('a');
            // Creating Class on Link Element
            link.classList.add('navbar__link');
            // Inserting HTML Content on Link Element
            link.innerHTML = getLinkText()[index];
            // Creating Anchor On Link Element
            // Retrieving the 'data-nav' Attribute
            const navNumber = section.getAttribute('data-nav');
            // Setting the 'href' Attribute on Link
            link.setAttribute('href', `#section${navNumber}`);
            // Appending Link Elements to Navbar Items
            listItem.append(link);
            // Appending List Items to Navbar
            navList.append(listItem);
        });
    };
    // Build Navigation Menu
    buildNav();

    // Activating Section In View
    const activateSection = () => {
        // Iterating Over The Sections
        sections.forEach((section) => {
            // Retrieving Section Viewport Position
            const position = section.getBoundingClientRect();
            // Retrieving Section Id
            const id = section.getAttribute('id');
            // Retrieving Navigation Link Target
            const navLink = document.querySelector(`a[href="#${id}"]`);
            // Using Position To Check Visibility
            if (position.top <= 80 && position.bottom >= 80) {
                // Adding 'Active' Class to Section In View
                section.classList.add('your-active-class');
                // Adding 'Active' Class to Link Element
                navLink.classList.add('link-active-class');
            } else {
                // Removing 'Active' Class From Other Sections
                section.classList.remove('your-active-class');
                // Removing 'Active' Class From Other Links
                navLink.classList.remove('link-active-class');
            }
        });
    };

    // Building Button That Scrolls To Hero
    const createBackToTop = () => {
        // Creating Button Element
        backToTop = document.createElement('button');
        // Creating Class on Button Element
        backToTop.classList.add('backToTop__btn');
        // Creating Attribute On Button Element
        backToTop.setAttribute('href', `#hero`);
        // Inserting Text On Button Element
        backToTop.innerText = 'BACK TO TOP';
        // Accessing Page Footer
        const footer = document.querySelector('.page__footer');
        // Prepending Button To Footer
        footer.prepend(backToTop);
    }
    // Build BackToTop Button
    createBackToTop();

    /**
     * ** END MAIN FUNCTIONS **
     * ** BEGIN EVENTS **
     * 
    */
    // Listening For Window Scrolling
    window.addEventListener('scroll', function (event) {
        // Iterating Over The Sections
        sections.forEach((section) => {
            // Setting Sections as Active
            activateSection(section);
        })
        // Displaying BackToTop Button
        displayButton();
    });

    // Listening For Click Event On Navbar Links
    navList.addEventListener('click', (event) => {
        // Retrieving Link Attribute
        const navTarget = event.target.getAttribute('href');
        // Preventing Default Action
        event.preventDefault();
        // Smooth Scrolling to NavLink Attribute
        document.querySelector(navTarget).scrollIntoView({
            behavior: 'smooth',
        });
    });

    // Listening For Click Event On BackToTop Button
    backToTop.addEventListener('click', (event) => {
        // Retrieving Hero Link Attribute
        const heroTarget = event.target.getAttribute('href');
        // Preventing Default Action
        event.preventDefault();
        // Smooth Scrolling to Hero
        document.querySelector(heroTarget).scrollIntoView({
            behavior: 'smooth',
        });
    })
})