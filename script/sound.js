buttons = document.querySelector('.buttons')
sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

for (let i = 0; i < 6; i = i + 1){
btn = document.createElement('button')
//This puts the element into the div called buttons
btn.innerText=sounds[i]
btn.classList.add('btn')
btn.addEventListener(`click`, () =>{
    document.querySelector(`.${sounds[i]}`).play()
})
buttons.appendChild(btn)
}




