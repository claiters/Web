moveBox = document.querySelector(".move")

x = 0
y = 0
rot = 0
sec = 0
document.addEventListener(`keydown`, (event) =>{
    if (event.key == `ArrowUp`){
        y -= 10
        rot -= 90
    }
     if (event.key == `ArrowLeft`){
        x -= 10
        rot -= 90
    }
     if (event.key == `ArrowRight`){
        x += 10
        rot += 90
    }
     if (event.key == `ArrowDown`){
        y += 10
        rot += 90
    }
    org1 = (Math.random() * 100)
    org2 = (Math.random() * 100)
    sec = (Math.random() * 2 + .05)
    moveBox.style.transformOrigin = `${org1}% ${org2}%`
    moveBox.style.transition = `transform ${sec}s`
    moveBox.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg)`
})
