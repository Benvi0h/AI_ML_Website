const leftButton = document.querySelector('.left_button');
const rightButton = document.querySelector('.right_button')

const carouselTrack = document.querySelector('.carousel_track')

let direction;

leftButton.addEventListener('click',function(){
    if(direction === -1)
    {
        carouselTrack.prependChild(carouselTrack.lastElementChild);
        direction = 1;
    }
    carouselTrack.style.justifyContent = 'flex-end';
    carouselTrack.style.transform = "translate(17%)";
})


rightButton.addEventListener('click',function(){

    direction = -1;
    carouselTrack.style.justifyContent = 'flex-start';
    carouselTrack.style.transform = "translate(-17%)";

})

carouselTrack.addEventListener('transitionend',function()
{
    if(direction === -1){
        carouselTrack.appendChild(carouselTrack.firstElementChild);
    }
    else if(direction === 1)
    {
        carouselTrack.prependChild(carouselTrack.lastElementChild);
    }
    carouselTrack.appendChild(carouselTrack.firstElementChild);

    carouselTrack.style.transition = 'none';
    carouselTrack.style.transform = "translate(0)";
    setTimeout(function(){
        carouselTrack.style.transition = '0.3s';
    }) 
})