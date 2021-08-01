`function autoResizeDiv()
{
    document.getElementById('main').style.height = window.innerHeight +'px';
    document.getElementById('aboutme').style.height = window.innerHeight +'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();`

function onopenmodal(modal){
    const websiteURL = modal.parentElement.querySelector('a').href;
    document.querySelector('iframe').src = websiteURL;
}

function onclosemodal(modal){
    document.querySelector('iframe').src = ' ';
}

const date=new Date();

const year=date.getFullYear();

const value=document.getElementById('year').innerHTML=year;



