// Abrir imagenes estilo modal
document.querySelectorAll(".box img").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
    })
})

// Al accionar en cualquier imagen > Ocultar Footer + aparecer btn Back y Caracteristicas.
function ocultarFooter(){
    document.getElementById('footer').style.display='none';
    document.getElementById('back').style.display='flex';
    document.getElementById('caracteristicas').style.display='block';
    document.getElementById('texto-descriptivo').style.display='flex';
}

// Al accionar 'botón back' > Ocultar btn Back y Caracteristicas + aparecer Footer
function aparecer(){
    document.getElementById('footer').style.display='flex';
    document.getElementById('back').style.display='none';
    document.getElementById('caracteristicas').style.display='none';
    document.getElementById('texto-descriptivo').style.display='none';
}

// SUPUESTAMENTE ESTO HACIA QUE VUELVA AL INICIO PERO NO ME ANDA :(
// document.querySelectorAll(".box").forEach(el=>{
//     el.addEventListener("click", function(ev){
//         this.classList.remove("active");
//     })
// })
