container = document.getElementById('container')
text = document.getElementById('text')

totalTime = 7500
breatheTime = (totalTime / 5) * 2
holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerText = 'Breathe In...'
    container.classList.add('grow')
    container.classList.remove('shrink')

    setTimeout(() =>{
        text.innerText = 'Hold!'

        setTimeout(() => {
            text.innerText = 'Breathe out...'
            container.classList.remove('grow')
            container.classList.add('shrink')
        },holdTime)

    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)
