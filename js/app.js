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
 * Define Global Variables
 * 
 * 
*/
let sections = document.querySelectorAll("section"); //
let navbar__list = document.querySelector("#navbar__list");
let doc_fragment = document.createDocumentFragment();
let active_section = document.querySelectorAll('.your-active-class')[0];
let active_link = null;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
for (section of sections) {
    update_sections(section)
}

navbar__list.appendChild(doc_fragment);

function update_sections(section) {
    let item = document.createElement("li");
    let link = document.createElement("a");
    data_nav_value = section.getAttribute("data-nav");
    link.text = data_nav_value;
    section_id_value = section.getAttribute("id");
    link.setAttribute("id", `${section_id_value}_link`);
    // link.href = `#${section_id_value}`;

    link.addEventListener("click", function (event) {
        // event.preventDefault();
        // Scroll to section on link click
        section.scrollIntoView({ 'behavior': 'smooth' });
    });

    item.appendChild(link);
    navbar__list.appendChild(item);

}

function update_style() {

    for (section of sections) {
        let border = section.getBoundingClientRect();
        // Add class 'active' to section when near top of viewport
        if (border.top < window.innerHeight-200) {
            if (active_link) {
                active_link.classList.remove('your-active-class');
            }
            active_section.classList.remove('your-active-class');

            section.classList.add('your-active-class');

            active_link = document.querySelector(`#${section.id}_link`);
            active_link.classList.add('your-active-class');
            active_section = section;
        }
    }
}
/**
 * End Main Functions
 * Begin Events
 *
*/
window.addEventListener('scroll', update_style);
// Build menu
// Scroll to anchor ID using scrollTO event


// Set sections as active


