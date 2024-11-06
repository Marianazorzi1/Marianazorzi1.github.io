const imgAmpliada = document.querySelector('#imgAmpliada');
const miniaturas = document.querySelectorAll('.miniatura');

miniaturas.forEach(miniatura =>{
    miniatura.addEventListener('click', ()=>{
        miniaturas.forEach(miniatura =>{
            miniatura.style.opacity = '0.4';
        })
        imgAmpliada.src = miniatura.src;
        imgAmpliada.style.display = 'block';
        miniatura.style.opacity = '1';

    })
})





// document.addEventListener("DOMContentLoaded", function() {
//     const imgAmpliada = document.getElementById("imgAmpliada");
//     const miniaturas = document.querySelectorAll(".miniatura");

//     function handleImageClick(event) {

//         const clickedImage = event.target;

//         imgAmpliada.src = clickedImage.src;


//         imgAmpliada.style.display = "block";


//         miniaturas.forEach(image => {
//             image.style.opacity = "0.4";
//         });

 
//         clickedImage.style.opacity = "1";
//     }

    
//     miniaturas.forEach(image => {
//         image.addEventListener("click", handleImageClick);
//     });
// });