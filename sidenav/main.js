var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var mainSideNavigation = $('.main-sidenav')
var sideNavigations = $$('.container button')

sideNavigations.forEach(function(sidenav) {
    sidenav.addEventListener('click', function() {
        $('button.active').classList.remove('active')
        this.classList.add('active');
    })
})

$('.sidenav-overplay').addEventListener('click', function() {
    mainSideNavigation.style.width = '250px';
})

$('.sidenav-push').addEventListener('click', function() {
    mainSideNavigation.style.width = '250px';
    $('.container').style.marginLeft = '250px';
})

$('.sidenav-push-w-opacity').addEventListener('click', function() {
    mainSideNavigation.style.width = '250px';
    $('.container').style.marginLeft = '250px';
    $('body').style.backgroundColor = 'rgba(0,0,0,0.9)';
})

$('.close').addEventListener('click', function() {
    mainSideNavigation.style.width = 0;
    $('.container').style.marginLeft = 0;
    $('body').style.backgroundColor = 'white';
})

$('.sidenav-fullwidth').addEventListener('click', function() {
    mainSideNavigation.style.width = '100%';
})




