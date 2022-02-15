var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var buttons = $$('.btn')
var cols = $$('.col')


function currentBtn(n) {
    cols.forEach(col => {
        col.style.flex = `0 0 ${(100/n)}%`;
    });
}

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        $('.btn.active').classList.remove('active');
        this.classList.add('active')
    })
});



