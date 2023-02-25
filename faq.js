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