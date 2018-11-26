var ul = document.getElementsByClassName('slide-wrap')[0].querySelector('ul');
var li = document.getElementsByClassName('slide-wrap')[0].querySelectorAll('ul li');
var pager = document.getElementsByClassName('pager')[0].querySelectorAll('span');

for(var i = 0; i < li.length; i++) {
    li[i].style.left = (i * 100) + '%';
}

setTimeout(function() {
    ul.classList.add('one');
    pager[0].classList.remove('active');
    pager[1].classList.add('active');
}, 4000);

setTimeout(function() {
    ul.classList.add('two');
    pager[1].classList.remove('active');
    pager[2].classList.add('active');
}, 8000);


/* 
    setInterval() : 일정 시간마다 반복을 실행하는 함수
    setTimeout() : 일정 시간이 지난 뒤 이벤트 실행
*/