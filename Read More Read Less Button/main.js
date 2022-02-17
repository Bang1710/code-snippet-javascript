var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var dot = $('.dots')
var more = $('.more')
var btn = $('.myBtn')

btn.addEventListener('click', function() {
    if(btn.innerText == 'Read more') {
        dot.style.display = 'none';
        more.style.display = 'inline';
        btn.innerText = 'Read less';
    } else {
        dot.style.display = 'inline-block';
        more.style.display = 'none';
        btn.innerText = 'Read more';
    }
})