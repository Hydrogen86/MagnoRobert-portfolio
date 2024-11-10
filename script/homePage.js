function msg(){
    alert("Hi, I am Robert");
}

// Function to add hover effect using JavaScript
function addHoverEffect(icon) {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)'; 
    });
}

// Get the icons and add hover effect to each
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => addHoverEffect(icon));


//Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})