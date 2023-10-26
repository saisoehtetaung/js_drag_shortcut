const getbox = document.querySelector('.box');
const getboxtitle = document.querySelector('.boxtitle');
const getbtns = document.querySelector('.btns');


getbox.addEventListener('click', function () {
    // getbtns.classList.toggle('show');
    getbtns.classList.add('show');
});

getbox.addEventListener('dblclick', function () {
    getbtns.classList.remove('show');
});


getbox.addEventListener('click',function(e){
	if(e.detail === 3){
	dragme(getbox);
	}
});
//dragme(getbox);


function dragme(getele) {
    var getcx, getcy, setcx, setcy;

    //design  1
    // getele.onmousedown = getmousedown;

    //design 2
    if (getele) {
        getboxtitle.onmousedown = getmousedown(getele);
    }

    function getmousedown(e) {

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx, getcy);

        document.onmousemove = dragme;

        document.onmouseup = stopdragme;
    }

    function dragme(e) {
        // console.log(e.target);

        setcx = getcx - e.clientX;
        setcy = getcy - e.clientY;
        // console.log(setcx, setcy);

        getcx = e.clientX;
        getcy = e.clientY;

        // console.log(getcx, setcx);
        // console.log(getcy, setcy);

        const btnleft = getele.offsetLeft;
        const btntop = getele.offsetTop;

        // const btnsleft = getbtns.offsetLeft;
        // const btnstop = getbtns.offsetTop;
        // console.log(btnleft, btntop);

        getele.style.left = (btnleft - setcx) + "px";
        getele.style.top = (btntop - setcy) + "px";

        // getbtns.style.left = (btnsleft - setcx) + "px";
        // getbtns.style.top = (btnstop - setcy) + "px";
        // console.log(btnleft - setcx, btntop-setcy);

        getbtns.classList.remove('show');
    }

    function stopdragme() {
        document.onmousemove = null;
        document.onmouseup = null;
    }


    function smallmenu(icobox) {
        if (icobox.classList.contains('btn-icon')) {
            console.log('yes');
        }
    }
}


