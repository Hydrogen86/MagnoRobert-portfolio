const resources = {
    img: "Dev_Image.png",
    Devname: "Robert Magno",
    aboutMe: "Hi, I am Robert. Let's work together and create functional application and websites"
};
const icons = {
    facebook: "./images/icons/facebook.png",
    instagram: "./images/icons/instagram.png",
    twitter: "./images/icons/twitter.png",
    whatsapp: "./images/icons/whatsapp.png"
}
const Data = [
    {
      discription: "I am a BS Information Technology student of Marinduque State University currently at 3rd year level persuing Software Development. Creating a functional and well secured websites is one of my speciality, so what's you waiting for let's team up!"
    },
    {
      exp1: "+2",
      str1: "YEARS OF <br>EXPERIENCE <br>",
      exp2: "+1",
      str2: "PROJECTS <br> COMPLETED <br>",
      exp3: "+0",
      str3: "WORLDWIDE <br>CLIENTS <br>"
    },
    {
      devName: "Robert Magno",
      loaction: "Gasan Marinduque",
      email: "magno.robert@marsu.edu.ph",
      copyRights: "@2024 Robert Dev | All Rights Reserved"
    }
  ];

//Second Page
//document.addEventListener('DOMContentLoaded', function(){secondPage();});
export function secondPage(){
    const secondPage = document.getElementById('second-page');

    secondPage.innerHTML = `
        <div class="inner-box2">
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contacts</a>
                <a href="">Services</a>
            </nav>
            <h2>ABOUT ME</h2>
            <img src="./images/${resources.img}" alt="" class="profile-pic">
            <p class="second">${resources.Devname}</p>
            <p class="second">${resources.aboutMe}</p><br>

            <h2>Expriences</h2>
            <span class="second">${Data[1].exp1} ${Data[1].str1}</span>
            <span class="second">${Data[1].exp2} ${Data[1].str2}</span>
            <span class="second">${Data[1].exp3} ${Data[1].str3}</span><br>

            <div id="s-container">
                <h2>SPECIALIZED SKILLS</h2>
                <span class="second">Java<span>
                <span class="second">PHP<span>
                <span class="second">HTML<span>
                <span class="second">CSS<span>
                <span class="second">Javascript<span>
                <span class="second">C#<span>
                <span class="second">Python<span>
            </div>
            <div id="t-container">
                <span class="second">VS code<span>
                <span class="second">Andriod Studio<span>
                <span class="second">Git<span>
                <span class="second">Xammp<span>
                <span class="second">GitHub<span>
            </div><br>
            <div id="D-project">
                <h2>RECENT PROJECTS</h2>
                <img src="./images/Projects/BikeZone.png" alt="project-icon" class="project-icon">
                <p class="second">BikeZone Online Bike Selling</p>
                <img src="./images/Projects/carabaoCart.png" alt="project-icon" class="project-icon">
                <p class="second">Online Carabao Milks</p>
                <img src="./images/Projects/FireSafe.png" alt="project-icon" class="project-icon">
                <p class="second">Digital Fire Assistant</p>
            </div>
            <div>
                <form action="">
                    <div class="input-container">
                        <input type="text" class="input" placeholder="Your Name" required>
                        <input type="email" class="input" placeholder="Your@email.com" required>
                    </div>    
                    <textarea name="" id="message" class="input" placeholder="Message to me" required ></textarea>
                    <button">Submit</button>
                </form>
            </div>

            <div>
                <p class="second">${Data[2].devName}</p>
                <p class="second">${Data[2].loaction}</p>
                <p class="second">${Data[2].email}</p>
                <p class="second">${Data[2].copyRights}</p>
            </div>

            <button id="second-btn">Show Design</button>

            
        </div>
    `;
}
