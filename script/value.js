
const projectInfo = [
    {devName: 'Robert Magno',
     devSkills: "A Web & Application Developer",
     devDiscription: "I'm proficient and well-disciplined developer based in Philippines. I'm here to help you build amazing websites that your user will love, delivering both functionality and great user experiences."
    }

];

document.querySelector('.name').innerHTML = `</br>I'm ${projectInfo[0].devName}`;
document.querySelector('.skills').innerHTML = `${projectInfo[0].devSkills}</br>`;
document.querySelector('.greet').innerHTML = "Hello,";
document.querySelector('.paragraph').innerHTML = projectInfo[0].devDiscription;