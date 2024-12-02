export function profile() {
  const resources = {
      img: "Dev_Image.png",
      Devname: "Robert Magno",
      aboutMe: "Hi, I am Robert. A Web Designer and Application Developer",
      newImg: "MagnoRobert.png"
  };

  const icons = {
      facebook: "./images/icons/facebook.png",
      instagram: "./images/icons/instagram.png",
      twitter: "./images/icons/tiktok.png",
      whatsapp: "./images/icons/whatsapp.png"
  };

  const images = [`./images/${resources.newImg}`, `./images/${resources.img}`];

  const profile = document.getElementById('profile-con');
  profile.innerHTML = `
      <img src="" alt="" class="profile-pic" id="profile-pic">
      <h3 class="name">${resources.Devname}</h3>
      <p class="short-about-me">${resources.aboutMe}</p>

      <nav class="social-media-nav">
          <ul>
              <li>
                  <a href="https://www.facebook.com/profile.php?id=100008716215080&mibextid=ZbWKwL" target="_blank">
                      <img src="${icons.facebook}" alt="fb-icon">
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/rawbeehurt/profilecard/?igsh=MWxxZjZscjB1aWh5OA==" target="_blank">
                      <img src="${icons.instagram}" alt="insta-icon">
                  </a>
              </li>
              <li>
                  <a href="https://www.tiktok.com/@stewie.griffin841?_t=8rSnsZ9k7Tc&_r=1" target="_blank">
                      <img src="${icons.twitter}" alt="tiktok-icon">
                  </a>
              </li>
              <li>
                  <a href="https://wa.me/639266495922" target="_blank">
                      <img src="${icons.whatsapp}" alt="whatsapp-icon">
                  </a>
              </li>
          </ul>
      </nav>
  `;

  let currentIndex = 0;
  const profilePic = document.getElementById('profile-pic');

   // Change the image every 5 seconds with dissolve effect
   setInterval(() => {
      profilePic.style.opacity = 0;
      setTimeout(() => {
          currentIndex = (currentIndex + 1) % images.length; 
          profilePic.src = images[currentIndex];
          profilePic.style.opacity = 1; 
      }, 500);
    }, 6000); // Change every 5 seconds
}