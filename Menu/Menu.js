const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle("menu--open");
  if (menu.classList.contains("active")) {
    TweenMax.to(menu, 0.15, { width: 0 });
    TweenMax.to(menuList, 0.15, { opacity: 0 });
    menu.classList.remove("active");
  } else {
    TweenMax.to(menu, 0.15, { width: 1200 });
    TweenMax.to(menuList, 0.15, { opacity: 1 });
    menu.classList.add("active");
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
const menuList = menu.querySelector("ul");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
