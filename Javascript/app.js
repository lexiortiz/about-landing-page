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
const biographySection = document.getElementById('section1');
const valuesSection = document.getElementById('section2');
const processSection = document.getElementById('section3');
const journeySection = document.getElementById('section4');
const contactSection = document.getElementById('contact__container');

// Creating List Item Elements, Each with a Class
const biographyItem = document.createElement('li');
biographyItem.classList.add('navbar__item');

const valuesItem = document.createElement('li');
valuesItem.classList.add('navbar__item');

const processItem = document.createElement('li');
processItem.classList.add('navbar__item');

const journeyItem = document.createElement('li');
journeyItem.classList.add('navbar__item');

const contactItem = document.createElement('li');
contactItem.classList.add('navbar__item');


// Creating Link Elements, Each with a Class
const biographyLink = document.createElement('a');
biographyLink.classList.add('navbar__link');

const valuesLink = document.createElement('a');
valuesLink.classList.add('navbar__link');

const processLink = document.createElement('a');
processLink.classList.add('navbar__link');

const journeyLink = document.createElement('a');
journeyLink.classList.add('navbar__link');

const contactLink = document.createElement('a');
contactLink.classList.add('navbar__link');

/**
 * ** END GLOBAL VARIABLES **
 * ** START HELPER FUNCTIONS **
 * 
*/



/**
 * ** END HELPER FUNCTIONS **
 * ** BEGIN MAIN FUNCTIONS **
 * 
*/

// BUILD NAV
// Inserting HTML Content on Link Elements
biographyLink.innerHTML = 'BIOGRAPHY';
valuesLink.innerHTML = 'VALUES';
processLink.innerHTML = 'PROCESS';
journeyLink.innerHTML = 'JOURNEY';
contactLink.innerHTML = 'CONTACT';

// Appending Link Elements to Navbar Items
biographyItem.append(biographyLink);
valuesItem.append(valuesLink);
processItem.append(processLink);
journeyItem.append(journeyLink);
contactItem.append(contactLink);

// Appending Navbar Items to Navbar List
navList.append(biographyItem);
navList.append(valuesItem);
navList.append(processItem);
navList.append(journeyItem);
navList.append(contactItem);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('DOMContentLoaded', function () {
    // Build menu
    
    // Scroll to section on link click

    // Set sections as active

});