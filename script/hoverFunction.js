
// Function to add hover effect using JavaScript
function addHoverEffect(icon) {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)'; 
    });
}

// Get the icons and add hover effect
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => addHoverEffect(icon));


//Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//click and scroll
function clickEffects(){
    const hiddenContent = document.querySelector('.about-me');

    hiddenContent.style.display = 'flex'; 
    setTimeout(function() {
        window.scrollBy({
            top: 550, 
            behavior: 'smooth' 
        });
        hiddenContent.classList.add('show');
    }, 10);
}