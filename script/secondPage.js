
export function secondPageClick(){
    const secondPage = document.getElementById('second-page');
    const mainPage = document.getElementById('main-wrapper');
    const body = document.querySelector('body');
    const secondBtn = document.getElementById('second-btn');

    secondBtn.addEventListener('click', function(){
        secondPage.style.display = 'none';
        mainPage.style.display = 'Block';
        body.style.paddingTop = '4rem';

    });
}