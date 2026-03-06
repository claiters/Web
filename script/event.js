clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dblclick')
//-----------------------------------------------------

clickBox.addEventListener('click', () => {
   cr = Math.random() * 256
   cg = Math.random() * 256
   cb = Math.random() * 256
    clickBox.style.backgroundColor = `rgb(${cr} ${cg} ${cb})`
    clickBox.style.color = 'white'
})


x = 0
y = 0

document.addEventListener('keydown', (event) =>{
    if (event.key == 'ArrowRight'){x = x + 10}
    if (event.key == 'ArrowUp'){y = y - 10}
      if (event.key == 'ArrowDown'){y = y + 10}
      if (event.key == 'ArrowLeft'){x = x - 10}
        moveBox.style.transform = `translate(${x}px, ${y}px)`

})

hoverBox.addEventListener('mouseenter', () => {
hoverBox.style.height = "120px"
hoverBox.style.width = "500px"
})

hoverBox.addEventListener('mouseleave', () =>{
hoverBox.style.height = "60px"
hoverBox.style.width = "250px"
})


thing = 0
thingy = 0

dblclickBox.addEventListener('dblclick', () =>{
  window.close()
})

spinBox.addEventListener('click', () =>{
  spinBox.classList.add("start")
})
