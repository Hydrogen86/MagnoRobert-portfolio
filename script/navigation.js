document.addEventListener('DOMContentLoaded', function(){
    const nav = document.getElementById('nav');
    nav.innerHTML = `
        <ul>
          <li class="nav home">
            <a href="#section-container"><p>Home</p> <img class="nav-icon" src="./images/icons/home-icon.png" alt=""></a>
          </li>
          <li class="nav about">
            <a href="#about-section"><p>About</p> <img class="nav-icon" src="./images/icons/about-icon.png" alt=""></a>
          </li>
          <li class="nav skills">
            <a href="#skills-section"><p>Skills</p> <img class="nav-icon" src="./images/icons/skill-icon.png" alt=""></a>
          </li>
          <li class="nav project">
            <a href="#projects-section"><p>Projects</p> <img class="nav-icon active" src="./images/icons/projects-icon.png" alt=""></a>
          </li>
        </ul>
        
          <a href="#contact-section" id="let-connect-btn">Let's Connect</a>
    `;
    
});