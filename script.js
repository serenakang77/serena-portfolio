const portfolio = {};

portfolio.darkMode = function(){
    const darkModeButton = document.getElementById("dark-mode-switch")
    darkModeButton.addEventListener("click", function(){
        const headerBackground = document.querySelector("header")
        headerBackground.classList.toggle("darkmode-on")
        // headerBackground.classList.toggle("darkmode-off")
        const bodyBackground = document.querySelector("body")
        bodyBackground.classList.toggle("main-darkmode-on")
        // bodyBackground.classList.toggle("main-darkmode-off")
        const logoElement = document.querySelector(".serena-logo")
        const inputElement = document.getElementById("dark-mode-switch")
        console.log(inputElement.checked);
        const darkModeButtonImage =
        document.querySelector(".header-image-animation img")
        const darkModeButtonElement = document.querySelector(
          ".header-image-animation"
        )
        darkModeButtonImage.classList.toggle("moon-picture")
        // if(darkModeButtonImage.className === "moon-picture"){
        if (
          darkModeButtonImage.className ===
          "sun-picture ball-container moon-picture"
        ) {
          // inputElement.checked = false
          console.log(darkModeButtonImage)
          darkModeButtonElement.innerHTML = `
          <img src="./assets/moon-picture.png" alt="moon image picture" class="moon-picture ball-container">
          <div class="ball-shadow"></div>
          `
          logoElement.innerHTML = `<img src=\"./assets/sk-logo3.png\" alt=\"Serena Kang Logo\">`
        } else {
          console.log(darkModeButtonImage)
          //   inputElement.checked = true
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
  console.log(reveals);
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

window.addEventListener("scroll", () => {return reveal(".animation-left-selection", "animation-left")})
window.addEventListener("scroll", () => {return reveal(".animation-right-selection", "animation-right")})
window.addEventListener("scroll", () => {return reveal(".animation-top-selection", "animation-top")})



function contact(event){
  event.preventDefault();
  const inputElement = document.querySelectorAll("input")
  console.log(inputElement);
  const textElement = document.getElementById("message")
  emailjs
  .sendForm(
      'service_ev7a5kn',
      'template_2gyynww',
      event.target,
      'h8Opj6R8nMRkvcTw2'
      ).then(() => {
          alert("Email has been sent!")
        }).catch(() =>{
            alert("email is temporarily unavailable. Please contact me on serenakang77@gmail.com")
        })
    inputElement[0].value=""
    inputElement[1].value=""
    textElement.value = ""
}

portfolio.menuElement = document.querySelector(".menu-bar")
portfolio.menuBarButton = document.querySelector(".menu-bar-button")
portfolio.closeButton = document.querySelector(".close-button")

portfolio.menuBarButton.addEventListener("click", function () {
  portfolio.menuElement.style.visibility = "visible"
  portfolio.menuElement.style.opacity = "1"
  portfolio.menuBarButton.style.visibility = "hidden"
})

portfolio.closeButton.addEventListener("click", function () {
  portfolio.menuBarButton.style.visibility = "visible"
  portfolio.menuElement.style.visibility = "hidden"
  portfolio.menuElement.style.opacity = "0"
  portfolio.menuElement.style.transition = "visibility 0.5s, opacity 0.5s linear"
})

portfolio.events = () => {

}

portfolio.init = () => {
    portfolio.darkMode()
    // portfolio.observer()
    // portfolio.sendEmail()
}

portfolio.init()