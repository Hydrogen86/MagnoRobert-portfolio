document.addEventListener('DOMContentLoaded', function(){

    const Fpage = document.getElementById('front-page');
    Fpage.innerHTML = `
        <div class="inner-box">
            <p>Hi, I'm <p>
            <h1>Robert<br>Magno</h1>
            <p>Let's Work<br>Together</p>
            <button id="frontPage-btn">Learn more about me</button>
        </div>
    `;

    frontPageClick();

});

function frontPageClick(){
    const frontPage = document.getElementById('front-page');
    const secondPage = document.getElementById('second-page');
    const firstBtn = document.getElementById('frontPage-btn');

    firstBtn.addEventListener('click', function(){
        frontPage.style.display = 'none';
        secondPage.style.display = 'Block';
    });

    
}