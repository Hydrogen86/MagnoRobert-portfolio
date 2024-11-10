const skillData = [
    {
        icon: "python.png",
        appName: "Python",
        mastery: "Intermediate",
     },
     {
         icon: "c-sharp.png",
         appName: "C#",
         mastery: "Advance",
     },
     {
         icon: "php.png",
         appName: "PHP",
         mastery: "Intermediate",
     },
     {
         icon: "java.png",
         appName: "Java",
         mastery: "Advance",
     },
     {
         icon: "html-5.png",
         appName: "HTML",
         mastery: "Advance",
     },
     {
         icon: "css-3.png",
         appName: "CSS",
         mastery: "Advance",
     },
     {
         icon: "js.png",
         appName: "JavaScript",
         mastery: "Intermediate",
     }
];

// Function for Developer Skills
function displaySkills() {
    const container = document.querySelector('.card');

    skillData.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        // Create and append the icon
        const iconDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = `./image/Icons/${skill.icon}`;
        img.alt = skill.appName;
        img.style.width = '50px'; 
        iconDiv.appendChild(img);
        skillDiv.appendChild(iconDiv);

        // Create and append the app name
        const appNameDiv = document.createElement('div');
        appNameDiv.classList.add('app-name');
        appNameDiv.textContent = skill.appName;
        skillDiv.appendChild(appNameDiv);

        // Create and append the mastery level
        const masteryDiv = document.createElement('div');
        masteryDiv.classList.add('mastery');
        masteryDiv.textContent = skill.mastery;
        skillDiv.appendChild(masteryDiv);

        // Append the skill div to the container
        container.appendChild(skillDiv);
    });
}

displaySkills();
