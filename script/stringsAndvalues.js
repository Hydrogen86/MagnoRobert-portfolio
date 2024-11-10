const projectInfo = [
    {
        devName: 'Robert Magno',
        devSkills: "A Web & Application Developer",
        discription: "I'm proficient and well-disciplined developer based in Philippines. I'm here to help you build amazing websites that your user will love, delivering both functionality and great user experiences."
    },
    {
        img:"MyDp.png",
        discription: "I am a college student from Marinduque State University, currently taking a Bachelor of Science in Information Technology course at the 3rd-year level. My mission is to dive deep into technology, understand its usage, and explore how current technology can aid our business in achieving great success. Additionally, my goal is to maximize my skills in developing applications and websites, and create connections that go beyond the internet."

    }
];

//First Page
document.querySelector('.name').innerHTML = `</br>I'm ${projectInfo[0].devName}`;
document.querySelector('.skills').innerHTML = `${projectInfo[0].devSkills}</br>`;
document.querySelector('.greet').innerHTML = "Hello,";
document.querySelector('.paragraph').innerHTML = projectInfo[0].discription;

//About Me
document.querySelector('.aboutMe-txtfield').innerHTML = `
<p><span class="greet">So, who am I? </span>${projectInfo[1].discription}</p></br>
<h3>Languages I learned:</h3>
`;
document.querySelector('.aboutMe-img').innerHTML = `<img src='../image/${projectInfo[1].img}' alt='Developer Image'>`;