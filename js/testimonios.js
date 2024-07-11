"use strict"

document.getElementById('formularioReview').onsubmit = function(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let review = document.getElementById('review').value;
    
    let nuevoElemento = document.createElement('div');
    nuevoElemento.className = 'carousel-item' + (document.getElementById('contenidoCarrusel').children.length === 0 ? ' active' : '');
    nuevoElemento.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">"${review}"</p>
                <footer class="blockquote-footer">${nombre}</footer>
            </div>
        </div>
    `;
    document.getElementById('contenidoCarrusel').appendChild(nuevoElemento);
    
    this.reset();
};