var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var items = $$('ul li')


$('.dropdown-btn').addEventListener('click', function() {
    $('.dropdown-content').classList.toggle('active')
})

items.forEach(function(item) {
    item.addEventListener('click', function() {
       if(item.parentElement.classList.contains('active')) {
           item.parentElement.classList.remove('active')
       }
    })
})

function myFunction() {
    $('.dropdown-nd').classList.toggle('show')
}

function filterFunction() {
    $$('.dropdown-nd a').forEach(function(item) {
        if (item.innerText.toUpperCase().indexOf($('#myInput').value.toUpperCase()) > -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}