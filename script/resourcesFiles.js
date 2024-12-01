const resources = {
    img: "Dev_Image.png",
    greetings: "Hello there,",
    Devname: "Robert Magno",
    aboutMe: "I am Robert. Let's work together and create functional application and websites",
    tab: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
};
const icons = {
    facebook: "./images/icons/facebook.png",
    instagram: "./images/icons/instagram.png",
    twitter: "./images/icons/twitter.png",
    whatsapp: "./images/icons/whatsapp.png"
}
const Data = [
    {
      exp1: "+1",
      str1: "YEARS OF <br>EXPERIENCE <br>",
      exp2: "+3",
      str2: "PROJECTS <br> COMPLETED <br>",
      exp3: "+0",
      str3: "WORLDWIDE <br>CLIENTS <br>"
    },
    {
      devName: "Robert Magno",
      loaction: "Gasan Marinduque",
      email: "magno.robert@marsu.edu.ph",
      copyRights: "@2024 Robert Dev | All Rights Reserved",
      discription: "I am a third-year Bachelor of Science in Information Technology student at Marinduque State University, specializing in Software Development. Currently residing in the municipality of Gasan, province of Marinduque, I am passionate about creating functional and secure websites. Let's collaborate and bring amazing projects to life!"
    }
  ];
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
  //Tools Container
  const tools = [
    {icon: "visual-studio.png", title: "VS code"},
    {icon: "android studio.png", title: "Andriod Studio"},
    {icon: "Git.png", title: "GIT"},
    {icon: "xammp.png", title: "Xammp"},
    {icon: "github (2).png", title: "GitHub"}
  ];

//Second Page
export function secondPage() {
    const secondPage = document.getElementById('second-page');
    secondPage.innerHTML = `
        <div class="inner-box2">
            <h2>ABOUT ME</h2>
            <div id="about-me-div">
                <img src="./images/${resources.img}" alt="" class="profile-pic">
                <p class="second ds">${Data[1].discription}</p><br>
            </div>
            <div id="div2">
                <h2>Experiences</h2>
                <div class="expriences">
                    <p class="bottom"><span class="top">${Data[0].exp1}</span><br>${Data[0].str1}</p>
                    <p class="bottom"><span class="top">${Data[0].exp2}</span><br>${Data[0].str2}</p>
                    <p class="bottom"><span class="top">${Data[0].exp3}</span><br>${Data[0].str3}</p>
                </div>
                <div class="Skills">
                    <h2>Specialized Skills</h2>
                    <h3>Languages:</h3><hr>
                     ${languages.map(language => `
                        <div class="language-item">
                            <img src="./images/icons/${language.icon}" alt="${language.title}">
                            <p class="bottom">${language.title}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="Skills">
                    <h3>Tools:</h3><hr>
                     ${tools.map(tool => `
                        <div class="language-item">
                            <img src="./images/icons/${tool.icon}" alt="${tool.title}">
                            <p class="bottom">${tool.title}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            <button id="first-btn">See more</button>
        </div>
    `;

    let count = 0;
    const firstBtn = document.getElementById('first-btn');
    const divTwo = document.getElementById('div2');
    const divSkills = document.querySelectorAll('.Skills');

    firstBtn.addEventListener('click', function () {
        divTwo.style.display = 'block';
        divTwo.scrollIntoView({ behavior: 'smooth' });
        count++;

        if (count === 1) {
            firstBtn.innerText = "Show Skills";
        } else if (count === 2) {
            divSkills.forEach(skill => skill.style.display = 'block'); // Fix NodeList manipulation
            divSkills[0].scrollIntoView({ behavior: 'smooth' });
            firstBtn.innerText = "View Design";
        } else if (count > 2) {
            const mainPage = document.getElementById('main-wrapper');
            mainPage.style.display = 'block';
            secondPage.style.display = 'none';
            mainPage.scrollIntoView({ behavior: 'smooth' });
            count = 0; // Reset counter for future toggles
        }
        console.log(count);
    });
}


