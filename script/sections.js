document.addEventListener('DOMContentLoaded', function(){

  const Data = [
    {
      discription: "I am a BS Information Technology student of Marinduque State University currently at 3rd year level persuing Software Development. Creating a functional and well secured websites is one of my speciality, so what's you waiting for let's team up!"
    },
    {
      exp1: "+2",
      str1: "YEARS OF <br>EXPERIENCE<br>",
      exp2: "+3",
      str2: "PROJECTS <br> COMPLETED<br>",
      exp3: "+0",
      str3: "WORLDWIDE <br>CLIENTS<br>"
    },
    {
      devName: "Robert Magno",
      loaction: "Gasan Marinduque",
      email: "magno.robert@marsu.edu.ph",
      copyRights: "@2024 Robert Dev | All Rights Reserved"
    }
  ];

  
  //About Me Discription
  document.querySelector('.more-about-me').innerHTML=Data[0].discription;

  //Years of Doing
  const YOD = document.getElementById('YOD');
  const devExperience = document.createElement('div');
  const devClients = document.createElement('div');
  const devProjects = document.createElement('div');

  devExperience.classList.add('experience');
  devExperience.classList.add('projects');
  devExperience.classList.add('clients');

  
  YOD.appendChild(devExperience);
  YOD.appendChild(devProjects);
  YOD.appendChild(devClients);

  //Experiences
  devExperience.innerHTML = `
    <h3 class="years">${Data[1].exp1}</h3>
    <p>${Data[1].str1}</p>
  `;

  devProjects.innerHTML = `
    <h3 class="years">${Data[1].exp2}</h3>
    <p>${Data[1].str2}</p>
  `;

  devClients.innerHTML =`
    <h3 class="years">${Data[1].exp3}</h3>
    <p>${Data[1].str3}</p>
  `;


  //Skill Container
  const languages = [
    { icon: "java.png", title: "Java" },
    { icon: "php.png", title: "Php" },
    { icon: "html.png", title: "HTML" },
    { icon: "CSS.png", title: "CSS" },
    { icon: "js.png", title: "JavaScript" },
    { icon: "C Sharp.png", title: "C#" },
    { icon: "python.png", title: "Python" }
  ];

  const skillContainer = document.getElementById('skills-Container');

  // Loop through each language and add it to the container
  languages.forEach(language => {
    const container = document.createElement('div');
    container.classList.add('tech-stack', 'skill');
    container.innerHTML = `
      <img class="icon" src="./images/icons/${language.icon}" alt="${language.title}-icon">
      <p>${language.title}</p>
    `;
    skillContainer.appendChild(container);
  });


  //Tools Container
  const tools = [
    {icon: "visual-studio.png", title: "VS code"},
    {icon: "android studio.png", title: "Andriod Studio"},
    {icon: "Git.png", title: "GIT"},
    {icon: "xammp.png", title: "Xammp"},
    {icon: "github (2).png", title: "GitHub"}
  ];

  const toolsContainer = document.getElementById('tools-container');

  // Loop through each language and add it to the container
  tools.forEach(tool => {
    const container = document.createElement('div');
    container.classList.add('tool', 'skill');
    container.innerHTML = `
      <img class="icon" src="./images/icons/${tool.icon}" alt="${tool.title}-icon">
      <p>${tool.title}</p>
    `;
    toolsContainer.appendChild(container);
  });


  //Project Section
  const projects = [
    { img: "BikeZone.png", title: "BikeZone", description: "Online Bike Shop" },
    { img: "carabaoCart.png", title: "Carabao Cart", description: "Digital milk services" },
    { img: "FireSafe.png", title: "Fire Safe", description: "Online Registration and training for Fire protection" },
  ];
  
  const projectContainer = document.getElementById('project-cont');
  
  // Clear any existing content
  projectContainer.innerHTML = '';
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
      <img src="./images/Projects/${project.img}" alt="project-icon" class="project-icon">
      <div class="title-description-container">
        <h4 class="project-title">${project.title}</h4>
        <p class="project-description">${project.description}</p>
      </div>
      <img class="arrow-icon" src="./images/icons/up-right-arrow.png" alt="arrow-icon">
    `;
    projectContainer.appendChild(card);
  });


  //Contact Section
  const contact = document.getElementById('form-box');
  contact.innerHTML = `
      <div class="input-container">
        <input type="text" class="input" placeholder="Your Name" required>
        <input type="email" class="input" placeholder="Your@email.com" required>
      </div>    
      <textarea name="" id="message" class="input" placeholder="Message us" required ></textarea>
      <button class="submit-btn">Submit</button>
  `;

  //Footer
  const footer = document.querySelector('footer');
  footer.innerHTML = `
    <p class="footer-str">${Data[2].devName}</p>
    <p class="footer-str">${Data[2].loaction}</p>
    <p class="footer-str">${Data[2].email}</p>
    <p class="footer-str">${Data[2].copyRights}</p>
  `;
});
