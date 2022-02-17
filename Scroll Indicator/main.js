window.onscroll = function() {
    var top = document.body.scrollTop || document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight
    var current = document.documentElement.clientHeight
    var scroll = (top/(height - current))*100
    document.querySelector('.process-bar').style.width = scroll + '%';
}