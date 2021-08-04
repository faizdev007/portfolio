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

document.getElementById('year').innerHTML=year;

var clicks = 0;

document.querySelector('#menutag').addEventListener('click',function(){
    clicks += 1;

  if(clicks % 2 == 1)
    { 
        document.querySelector('aside').style.flex="unset";
        document.querySelector('.mainheader img').style.classList="hidden";
        document.querySelector('.mainheader ul').style.visibility="hidden";
        document.querySelector('footer').style.visibility="hidden";
        document.querySelector('aside').style.width="40px";
        document.querySelector('aside').classList="slid2";
        document.querySelector('#menutag').style.transform="rotate(270deg)";
        document.querySelector('#menutag').style.transition=".5s";
    }
  else if(clicks % 2 == 0)
  {
    document.querySelector('.mainheader img').style.visibility="visible";
    document.querySelector('.mainheader ul').style.visibility="visible";
    document.querySelector('footer').style.visibility="visible";
    document.querySelector('aside').classList="newslid";
    document.querySelector('footer').style.with="full";
    document.querySelector('aside').style.flex="";
    document.querySelector('#menutag').style.transform="rotate(180deg)";
  }
})

