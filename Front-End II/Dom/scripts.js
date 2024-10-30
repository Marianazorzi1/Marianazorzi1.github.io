const p = document.querySelector('#paragrafo')
const img = document.querySelector('#divImg')
const input = document.querySelector('#txt')

// divImg.addEventListener('click', () =>{
//     divImg.style.border = '2px solid black'
// })
function pMouse(){
    divImg.style.border = '2px solid black';

}
function sMouse(){
    divImg.style.border = 'none ';
    
}

divImg.addEventListener('mouseover', pMouse);
divImg.addEventListener('mouseout', sMouse);

p.onclick = ()=>{
    alert('Paragrafo clicado')
}
const clique = () => {
    console.log("botão clicavél")
    alert("Botão clicavél")
}

function pressTecla(){
    if (window.getComputedStyle(divImg, null).getPropertyValue
    ('background-color') ==='rgb(0,0,0)'){
        divImg.style.backgoundColor = 'rgb(255,255,255)'    
    }
    else{
        divImg.style.backgoundColor = 'rgb(0,0,0)'
    }
}



