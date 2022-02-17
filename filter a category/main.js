var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var buttons = $$('.btn')
var cols = $$('.col')

filterSelection('all')

function filterSelection(items) {
    if (items == 'all')  {items = ''}
    cols.forEach(col => {
        filterRemoveClass(col, 'show')
        if(col.className.indexOf(items) > -1) {filterAddClass(col, 'show')}
    });
}

function filterAddClass(element, name) {
    var elementArray = element.className.split(' ');
    var nameArray = name.split(' ')

    nameArray.forEach(className => {
        if(className.indexOf(elementArray) == -1) {
            element.className += ' ' + name;
        }
    });
}

function filterRemoveClass(element, name) {
    var elementArray = element.className.split(' ');
    var nameArray = name.split(' ')

    nameArray.forEach(className => {
        while (elementArray.indexOf(className) > -1) {
            elementArray.splice(elementArray.indexOf(className), 1)
        }
    });
    element.className = elementArray.join(' ');
}



buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        $('.btn.active').classList.remove('active')
        this.classList.add('active')
    })
});

