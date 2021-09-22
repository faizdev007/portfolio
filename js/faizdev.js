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
      document.querySelector('.menu').style.left="-170px";
      document.querySelector('#bargertop').classList.add('bargernorme');
      document.querySelector('#bargerbottom').classList.add('bargernorme');
      document.querySelector('aside').classList.add('adjustmenu');
      document.querySelector('#menutag').style.width="fit-content";
      document.querySelector('#menutag').style.transition=".5s";
    }
  else if(clicks % 2 == 0)
  {
    document.querySelector('#bargertop').style.transform="rotate(45deg)";
    document.querySelector('.menu').style.left="0px";
    document.querySelector('#bargerbottom').style.transform="rotate(135deg)";
    document.querySelector('aside').classList.remove('adjustmenu');
    document.querySelector('#bargertop').classList.remove('bargernorme');
    document.querySelector('#bargerbottom').classList.remove('bargernorme');
  }
})

