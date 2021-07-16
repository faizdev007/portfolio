`function autoResizeDiv()
{
    document.getElementById('main').style.height = window.innerHeight +'px';
    document.getElementById('aboutme').style.height = window.innerHeight +'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();`
