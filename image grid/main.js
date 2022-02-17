var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var buttons = $$('.btn')
var cols = $$('.col')

currentBtn(1)

function currentBtn(n) {
    cols.forEach((col, index) => {
        col.style.flex = `0 0 ${(100/n)}%`;
        if(n > index) {
            col.style.display = 'block';
        } else {
            col.style.display = 'none';
        }
    });
}

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        $('.btn.active').classList.remove('active');
        this.classList.add('active')
    })
});



