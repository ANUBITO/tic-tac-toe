var td1 = document.getElementById('td1');
var td2 = document.getElementById('td2');
var td3 = document.getElementById('td3');
var td4 = document.getElementById('td4');
var td5 = document.getElementById('td5');
var td6 = document.getElementById('td6');
var td7 = document.getElementById('td7');
var td8 = document.getElementById('td8');
var td9 = document.getElementById('td9');

td1.addEventListener("click", td1fun);
td2.addEventListener("click", td2fun);
td3.addEventListener("click", td3fun);
td4.addEventListener("click", td4fun);
td5.addEventListener("click", td5fun);
td6.addEventListener("click", td6fun);
td7.addEventListener("click", td7fun);
td8.addEventListener("click", td8fun);
td9.addEventListener("click", td9fun);

td1.style.cursor = 'pointer';
td2.style.cursor = 'pointer';
td3.style.cursor = 'pointer';
td4.style.cursor = 'pointer';
td5.style.cursor = 'pointer';
td6.style.cursor = 'pointer';
td7.style.cursor = 'pointer';
td8.style.cursor = 'pointer';
td9.style.cursor = 'pointer';

var DiagonalLeftToRight = 0;
var DiagonalRightToLeft = 0;
var FirstLineHorizontal = 0;
var MiddleLineHorizontal = 0;
var LastLineHorizontal = 0;
var FirstLineVertical = 0;
var MiddleLineVertical = 0;
var LastLineVertical = 0;

function td1fun() {
    DiagonalLeftToRight++;
    FirstLineHorizontal++;
    FirstLineVertical++;
    td1.style.backgroundColor = 'yellow';
    td1.removeEventListener('click', td1fun);
    WinCheck();
}

function td2fun() {
    FirstLineHorizontal++;
    MiddleLineVertical++;
    td2.style.backgroundColor = 'yellow';
    td2.removeEventListener('click', td2fun);
    WinCheck();
}

function td3fun() {
    DiagonalRightToLeft++;
    FirstLineHorizontal++;
    LastLineVertical++;
    td3.style.backgroundColor = 'yellow';
    td3.removeEventListener('click', td3fun);
    WinCheck();
}

function td4fun() {
    FirstLineVertical++;
    MiddleLineHorizontal++;
    td4.style.backgroundColor = 'yellow';
    td4.removeEventListener('click', td4fun);
    WinCheck();
}

function td5fun() {
    MiddleLineHorizontal++;
    MiddleLineVertical++;
    DiagonalRightToLeft++;
    DiagonalLeftToRight++;
    td5.style.backgroundColor = 'yellow';
    td5.removeEventListener('click', td5fun);
    WinCheck();
}

function td6fun() {
    MiddleLineHorizontal++;
    LastLineVertical++;
    td6.style.backgroundColor = 'yellow';
    td6.removeEventListener('click', td6fun);
    WinCheck();
}

function td7fun() {
    FirstLineVertical++;
    LastLineHorizontal++;
    DiagonalRightToLeft++;
    td7.style.backgroundColor = 'yellow';
    td7.removeEventListener('click', td7fun);
    WinCheck();
}

function td8fun() {
    LastLineHorizontal++;
    MiddleLineVertical++;
    td8.style.backgroundColor = 'yellow';
    td8.removeEventListener('click', td8fun);
    WinCheck();
}

function td9fun() {
    LastLineHorizontal++;
    LastLineVertical++;
    DiagonalLeftToRight++;
    td9.style.backgroundColor = 'yellow';
    td9.removeEventListener('click', td9fun);
    WinCheck();
}

function WinCheck() {
    console.log(DiagonalLeftToRight);
    console.log(DiagonalRightToLeft);
    console.log(FirstLineVertical);
    console.log(FirstLineHorizontal);
    console.log(MiddleLineVertical);
    console.log(MiddleLineHorizontal);
    console.log(LastLineHorizontal);
    console.log(LastLineVertical);

    if((DiagonalLeftToRight == 3)||(DiagonalRightToLeft == 3)||(FirstLineVertical == 3)||(FirstLineHorizontal == 3)||(MiddleLineVertical == 3)||(MiddleLineHorizontal == 3)||(LastLineVertical == 3)||(LastLineHorizontal == 3)) {
        window.alert('win');
    } else {
        return
    }
}