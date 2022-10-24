
function darkMode() {
  const darkModeButton = document.getElementById("dark-mode-switch")
  darkModeButton.addEventListener("click", function () {
    const headerBackground = document.querySelector("header")
    const bodyBackground = document.querySelector("body")
    const darkModeButtonImage = document.querySelector(
      ".header-image-animation img"
    )

    headerBackground.classList.toggle("darkmode-on")
    bodyBackground.classList.toggle("main-darkmode-on")
    darkModeButtonImage.classList.toggle("moon-picture")

    const logoElement = document.querySelector(".serena-logo")
    const darkModeButtonElement = document.querySelector(
      ".header-image-animation"
    )

    if (
      darkModeButtonImage.className ===
      "sun-picture ball-container moon-picture"
    ) {
      darkModeButtonElement.innerHTML = `
          <img src="./assets/moon-picture.png" alt="🌙" class="moon-picture ball-container">
          <div class="ball-shadow"></div>
          `
      logoElement.innerHTML = `<img src=\"./assets/sk-logo.png\" alt=\"Serena Kang Logo\">`
    } else {
      darkModeButtonElement.innerHTML = `
          <img src="./assets/sun-picture5.png" alt="🌞" class="sun-picture ball-container">
          <div class="ball-shadow"></div>
          `
      logoElement.innerHTML = `<img src=\"./assets/sk-logo-sun.png\" alt=\"Serena Kang Logo\">`
    }
  })
}

function reveal(className, animationClassName) {
  let reveals = document.querySelectorAll(className);
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(animationClassName);
    } else {
      reveals[i].classList.remove(animationClassName);
    }
  }
}

window.addEventListener("scroll", () => {return reveal(".animation-left-selection", "animation-left")});
window.addEventListener("scroll", () => {return reveal(".animation-right-selection", "animation-right")});
window.addEventListener("scroll", () => {return reveal(".animation-top-selection", "animation-top")});

menuElement = document.querySelector(".menu-bar");
menuBarButton = document.querySelector(".menu-bar-button");
closeButton = document.querySelector(".close-button");

menuBarButton.addEventListener("click", function () {
  menuElement.style.visibility = "visible";
  menuElement.style.opacity = "1";
  menuMove();
})

function makeMenuVisible(){
  menuElement.style.visibility = "hidden";
  menuElement.style.opacity = "0";
  menuElement.style.transition = "visibility 0.5s, opacity 0.5s linear";
}

closeButton.addEventListener("click", function () {
  makeMenuVisible();
})

function menuMove() {
  const website = document.querySelectorAll(".menu-bar a")
  website.forEach((data) => {
    data.addEventListener("click", function () {
      makeMenuVisible()
    })
  })
}

  
init = () => {
  darkMode();
}

init();