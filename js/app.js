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
*/
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Checks if the section near top of viewport
function inViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= 200 &&
        rect.top >= -500
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    sections.forEach(section => {
        let li = document.createElement("li");
        li.innerHTML = "<a class='menu__link' href='#"+section.getAttribute("id")+"'> "+section.dataset.nav+"</a>";
        document.getElementById("navbar__list").appendChild(li); 
    }
    )
}

// Add class 'active' to section when near top of viewport
function active(section){
    section.classList.add("active");
}

// Remove class 'active' 
function unactive(section){
    section.classList.remove("active");
}

// Scroll to anchor ID
function scroll(anchor){
    anchor.scrollIntoView({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        scroll(document.querySelector(this.getAttribute("href")));
    })
})

// Set sections as active
window.addEventListener("scroll", scroll => {
    sections.forEach(section => {
    if(inViewport(section))
        active(section);
    else
        unactive(section)
    })
})
