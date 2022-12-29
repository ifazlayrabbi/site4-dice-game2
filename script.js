
'use strict'


let player1 = Math.ceil(Math.random()*6)
let player2 = Math.ceil(Math.random()*6)

document.querySelector('.player1img').setAttribute('src', 'images/dice' + player1 + '.png')
document.querySelector('.player2img').setAttribute('src', 'images/dice'+player2+'.png')


if(player1 == player2)
    document.getElementsByTagName('h1')[0].innerHTML='<i class="fa-solid fa-flag-checkered"></i> Draw! <i class="fa-solid fa-flag-checkered"></i>'
else if(player1 > player2)
    document.getElementsByTagName('h1')[0].innerHTML='<i class="fa-solid fa-flag-checkered"></i> Player 1 wins!'
else
    document.getElementsByTagName('h1')[0].innerHTML='Player 2 wins! <i class="fa-solid fa-flag-checkered"></i>'
