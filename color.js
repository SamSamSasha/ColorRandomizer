let colorButton = document.querySelector(".colorChanger")

let numberColor = document.querySelector(".numberColor")

let body = document.querySelector("body")

function randomizer(){
    let rgbNumber = Math.random() * 255
    let rgbNumberFloored = Math.floor(rgbNumber)
    let rgbNumber1 = Math.random() * 255
    let rgbNumberFloored1 = Math.floor(rgbNumber1)
    let rgbNumber2 = Math.random() * 255
    let rgbNumberFloored2 = Math.floor(rgbNumber2)
    console.log(rgbNumberFloored)
    numberColor.innerText = `${rgbNumberFloored}, ${rgbNumberFloored1}, ${rgbNumberFloored2}`
    body.style.backgroundColor = `rgb(${rgbNumberFloored}, ${rgbNumberFloored1}, ${rgbNumberFloored2})`
}


colorButton.addEventListener("click", randomizer)

