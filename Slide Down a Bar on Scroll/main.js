window.onscroll = function() {
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.querySelector('.nav').style.top = 0;
    } else {
        document.querySelector('.nav').style.top = "-50px";
    }
};
