let helloLength = 0;
let hello = '';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    helloEl = $('#hello');   
    hello = $('#hello').text();
    type();
});

function type() {
    helloEl.html(hello.substr(0, helloLength++));
    if(helloLength < hello.length+1) {
        setTimeout('type()', 75);
    } else {
        helloLength = 0;
        hello = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'normal', 'swing').animate({
        opacity: 1
    }, 'normal', 'swing');
}