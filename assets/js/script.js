window.onload = function () {
  document.querySelector(".menu_mobile").addEventListener("click", function () {
    let menuNav = document.querySelector(".menu nav");
    if (menuNav.style.display == "flex") {
      menuNav.style.display = "none";
    } else {
      menuNav.style.display = "flex";
    }
  });
};
