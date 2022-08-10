const hamburgerBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
// const navLinksActive = document.querySelector(".nav-links-active");

hamburgerBtn.addEventListener("click", () => {
  //   console.log("click");

  if (!hamburgerBtn.classList.contains("hamburger-close")) {
    hamburgerBtn.classList.add("hamburger-close");
    navLinks.classList.add("nav-links-active");
  } else {
    hamburgerBtn.classList.remove("hamburger-close");
    navLinks.classList.remove("nav-links-active");
  }
});
