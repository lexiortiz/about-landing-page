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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

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


/**
 * ** END HELPER FUNCTIONS **
 * ** BEGIN MAIN FUNCTIONS **
 * 
*/
// Building Nav
const buildNav = () => {
    // Creating a Class on the Navbar
    navList.classList.add('navbar__menu');
    
    // Iterating Through Sections NodeList
    sections.forEach((section, index) => {
        // Creating List Item Element
        const listItem = document.createElement('li');
        // Creating Class on List Item
        listItem.classList.add('navbar__item');
        // Create a Link Element
        const link = document.createElement('a');
        // Creating Class on Link Element
        link.classList.add('menu__link');
        // Inserting HTML Content on Link Element
        link.innerHTML = getLinkText()[index];
        // Appending Link Elements to Navbar Items
        listItem.append(link);
        // Appending List Items to Navbar
        navList.append(listItem);
    });
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// After All Content Is Fully Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Build Menu
    buildNav();

    // Iterating Through Sections NodeList
    sections.forEach((section) => {
        // For Each Section, Listen for the Click Event
        section.addEventListener('click', function (event) {
            // Scroll to section on link click
            navItem.forEach((item) => {
                item.addEventListener('click', function () {
                    // Scroll to Section
                });
            });

            // Set sections as active
        })
    });
});
