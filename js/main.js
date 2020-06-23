// Ocultar Footer + aparecer btn Back y Caract.
function ocultarFooter(){
    document.getElementById('footer').style.display='none';
    document.getElementById('back').style.display='flex';
    document.getElementById('caracteristicas').style.display='block';   
}

// Abrir imagenes
document.querySelectorAll(".box img").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
    })
})


// Ocultar btn Back y Caract + aparecer Footer
function aparecer(){
    document.getElementById('footer').style.display='flex';
    document.getElementById('back').style.display='none';
    document.getElementById('caracteristicas').style.display='none';
}


// SUPUESTAMENTE ESTO HACIA QUE VUELVA AL INICIO PERO NO ME ANDA :(

// document.querySelectorAll(".box").forEach(el=>{
//     el.addEventListener("click", function(ev){
//         this.classList.remove("active");
//     })
// })
