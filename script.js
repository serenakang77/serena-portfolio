const portfolio = {};

portfolio.darkMode = function(){
    const darkModeButton = document.getElementById("dark-mode-switch")
    darkModeButton.addEventListener("click", function(){
        
        const headerBackground = document.querySelector("header")
        const bodyBackground = document.querySelector("body")
        const darkModeButtonImage = document.querySelector(".header-image-animation img")

        headerBackground.classList.toggle("darkmode-on")
        bodyBackground.classList.toggle("main-darkmode-on")
        darkModeButtonImage.classList.toggle("moon-picture")

        const logoElement = document.querySelector(".serena-logo")
        const darkModeButtonElement = document.querySelector(".header-image-animation")

        if (
          darkModeButtonImage.className ===
          "sun-picture ball-container moon-picture"
        ) {
          darkModeButtonElement.innerHTML = `
          <img src="./assets/moon-picture.png" alt="moon image picture" class="moon-picture ball-container">
          <div class="ball-shadow"></div>
          `
          logoElement.innerHTML = `<img src=\"./assets/sk-logo3.png\" alt=\"Serena Kang Logo\">`
        } else {
          darkModeButtonElement.innerHTML = `
          <img src="./assets/sun-picture5.png" alt="sun image picture" class="sun-picture ball-container">
          <div class="ball-shadow"></div>
          `
          logoElement.innerHTML = `<img src=\"./assets/sk-logo4.png\" alt=\"Serena Kang Logo\">`
        }

    })
}

function reveal(className, animationClassName) {
  let reveals = document.querySelectorAll(className)
  // console.log(reveals);
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight
    let elementTop = reveals[i].getBoundingClientRect().top
    let elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(animationClassName)
    } else {
      reveals[i].classList.remove(animationClassName)
    }
  }
}

// if(window.innerWidth >= 850){
  window.addEventListener("scroll", () => {return reveal(".animation-left-selection", "animation-left")})
  window.addEventListener("scroll", () => {return reveal(".animation-right-selection", "animation-right")})
  window.addEventListener("scroll", () => {return reveal(".animation-top-selection", "animation-top")})
// }

portfolio.menuElement = document.querySelector(".menu-bar")
portfolio.menuBarButton = document.querySelector(".menu-bar-button")
portfolio.closeButton = document.querySelector(".close-button")

portfolio.menuBarButton.addEventListener("click", function () {
  portfolio.menuElement.style.visibility = "visible"
  portfolio.menuElement.style.opacity = "1"
  portfolio.menuBarButton.style.visibility = "hidden"
  portfolio.menuMove()
})

portfolio.closeButton.addEventListener("click", function () {
  portfolio.menuBarButton.style.visibility = "visible"
  portfolio.menuElement.style.visibility = "hidden"
  portfolio.menuElement.style.opacity = "0"
  portfolio.menuElement.style.transition = "visibility 0.5s, opacity 0.5s linear"
})

portfolio.menuMove = function(){
  const website = document.querySelectorAll(".menu-bar a")
  console.log(website);
  website.forEach((data) => {
    data.addEventListener("click", function(){
      portfolio.menuBarButton.style.visibility = "visible"
      portfolio.menuElement.style.visibility = "hidden"
      portfolio.menuElement.style.opacity = "0"
      portfolio.menuElement.style.transition =
        "visibility 0.5s, opacity 0.5s linear"
    })
  })
}

  // portfolio.test = (event) => {
  //   console.log(event.target);
  //   event.target.addEventListener("click", function(){
  //     console.log("Wow");
  //   })
  // }
  
  portfolio.init = () => {
    portfolio.darkMode()
    
    // portfolio.observer()
    // portfolio.sendEmail()
}

portfolio.init()