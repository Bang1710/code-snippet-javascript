var btn = document.querySelector('.btn')

window.onscroll = function() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

btn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}