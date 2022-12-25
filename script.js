var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');
var sponsers = document.getElementById('scrollingSponsers');

leftButton.addEventListener('click', () => {
    sponsers.scrollLeft -= 510;
    console.log('Clicked left');
});

rightButton.addEventListener('click', () => {
    sponsers.scrollLeft += 510;
    console.log('Clicked right');
    console.log(sponsers.scrollLeft);
});


setInterval(moveLeft, 2000);
var temp = 100;
function moveLeft(){
    if(sponsers.scrollLeft == temp) sponsers.scrollLeft = 0;
    else sponsers.scrollLeft +=500;
    temp = sponsers.scrollLeft;
}

