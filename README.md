# About Me Landing Page

The About page of Alexis Ortiz’s portfolio, showcasing my journey and commitment as a Frontend Developer. It also serves as my final graded project from the Udacity Frontend Development Nanodegree.

## Project Instructions

The assignment was to construct a multi-section landing page dynamically, to practice manipulating the virtual DOM.

### Additional Instructions
- To enhance the user experience, the section currently being viewed should be highlighted in some way.
- Furthermore, when a user clicks on a navigation item, they should be smoothly scrolled to the corresponding section, rather than being taken to the default location.


## Development Process

1.) I began the planning phase by carefully examining the instructions, rubric, and walkthrough for the project. I created an organized to-do list from the instructions and rubric, and took notes while going through the walkthrough slides presented by our session lead. I then spent hours reviewing all the concepts we had learned throughout the program, such as HTML, CSS, and JavaScript. To finish the planning phase, I wrote out the copy for the entire page so I could focus on solving and building from that point onward.

2.) During the prototyping phase, I sketched a rough wireframe of the landing page's key elements and design. To structure my code, I created a visual representation of the wireframe on a whiteboard. This allowed me to quickly add and erase elements, speeding up the design process. I also gathered and built assets, such as SVGs, color palettes, fonts, and custom PNGs.

3.) I kicked off the development phase by constructing the HTML of the landing page, following the copy and incorporating the assets. I made sure the code was neat and precise, forming the basis for the remainder of the project. To guarantee the code conformed to HTML standards, I also ran the page through a validator. Afterwards, I styled the HTML elements with CSS. I made them responsive with fluid styling and media queries, to guarantee the landing page is compatible on all devices.

I then built a dynamic navigation menu for the landing page by creating the navigation list in the virtual DOM, debugging it in the console, and refactoring it to follow the DRY (Don't Repeat Yourself) principles. I added an active class to the sections in view and made the page scroll smoothly to them when the navigation links were clicked. I also built a back-to-top button that only appears when the user scrolls to the bottom of the page.

4.) After running the JavaScript code through a linter, I tested the performance of the landing page and found a 4 millisecond improvement from moving the script from the end of the body to the head, and utiziling an event listener on the window when the DOMContentLoaded. Again, I refactored my code for further improvement before testing for responsivity across all devices to ensure there were no bugs or breakdowns in styling. 

5.) It's time to launch! I put in a lot of effort to create this landing page and I'm excited to share it with everyone. I hosted the project on Netlify and linked it to my portfolio as an About page. But I've talked about it enough, [see it for yourself here](https://about-alexis-ortiz.netlify.app).
