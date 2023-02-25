const cards = document.querySelectorAll(".card");

//   cards.forEach(card => {
//     const rotateCard = ({ x, y }) => {
//     const cardRect = card.getBoundingClientRect();
//     const posX = x - cardRect.x;;
//     const posY = y - cardRect.y;
//     const ratioX = posX / cardRect.width;
//     const ratioY = posY / cardRect.height;
//     card.style.setProperty('--ratio-x', ratioX);
//     card.style.setProperty('--ratio-y', ratioY);
//     };

//     document.body.addEventListener('pointermove', rotateCard);

//   });

const images = document.querySelectorAll(".image_container");
const names = document.querySelectorAll(".name_container");
const desigs = document.querySelectorAll(".designation_container");
const text_container = document.querySelectorAll(".text_container");
const mail_opacity = document.querySelectorAll(".mail_container");
const linked_opacity = document.querySelectorAll(".linked_container");


cards.forEach(function callback(card,index){
  card.addEventListener("mouseenter", MouseEnter);
  card.addEventListener("mouseleave", MouseLeave);

  function MouseEnter()
  {
    images[index].classList.add("active");
    names[index].classList.add("name_container_active");
    desigs[index].classList.add("designation_container_active");
    text_container[index].classList.add("text_container_active");
    mail_opacity[index].classList.add("mail_container_active");
    linked_opacity[index].classList.add("linked_container_active");
  }
  function MouseLeave()
  {
    images[index].classList.remove("active");
    names[index].classList.remove("name_container_active");
    desigs[index].classList.remove("designation_container_active");
    text_container[index].classList.remove("text_container_active");
    mail_opacity[index].classList.remove("mail_container_active");
    linked_opacity[index].classList.remove("linked_container_active");
  }
})

const NavBar = document.querySelector(".navbar");

document.addEventListener("scroll",Navbar_Scroll);

function Navbar_Scroll()
{
  if(document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130)
  { 
    NavBar.style.height = "10px";
    NavBar.style.boxShadow = "0 0 10px";
    NavBar.style.opacity = "0";
  }
  else
  {
    NavBar.style.height = "10vh";
    NavBar.style.boxShadow = "0 0 0px";
    NavBar.style.opacity = "1";
  }
}