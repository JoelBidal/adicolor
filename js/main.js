// Abrir imagenes estilo modal
let boxSelected;
document.querySelectorAll(".box img").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        boxSelected = el.parentNode;
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
    boxSelected.classList.remove('active');
    document.getElementById('footer').style.display='flex';
    document.getElementById('back').style.display='none';
    document.getElementById('caracteristicas').style.display='none';
    document.getElementById('texto-descriptivo').style.display='none';
}
