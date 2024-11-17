document.addEventListener('DOMContentLoaded', function(){
   const resources = {
        img: "Dev_Image.png",
        Devname: "Robert Magno",
        aboutMe: "Hi, I am Robert. Let's work together and create functional application and websites."
    };
    const icons = {
        facebook: "./images/icons/facebook.png",
        instagram: "./images/icons/instagram.png",
        twitter: "./images/icons/twitter.png",
        whatsapp: "./images/icons/whatsapp.png"
    }

    const profile = document.getElementById('profile-con');
    profile.innerHTML = `
        <img src="./images/${resources.img}" alt="" class="profile-pic">
          <h3 class="name">${resources.Devname}</h3>
          <p class="short-about-me">${resources.aboutMe}</p>

          <nav class="social-media-nav">
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100008716215080&mibextid=ZbWKwL" target="_blank"><img src="${icons.facebook}" alt="fb-icon"></a>        
              </li>
              <li>
                <a href="https://www.instagram.com/rawbeehurt/profilecard/?igsh=MWxxZjZscjB1aWh5OA==" target="_blank"><img src="${icons.instagram}" alt="insta-icon" ></a>
              </li>
              <li>
                <a target="_blank"><img src="${icons.twitter}" alt="twitter-icon"></a>
              </li>
              <li>
                <a href="https://wa.me/639266495922" target="_blank"><img src="${icons.whatsapp}" alt="whatsapp-icon"></a>
              </li>
            </ul>
          </nav>
    `;

});
