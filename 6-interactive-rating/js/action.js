const btnNoClick = document.querySelectorAll('.btn-noClick');
var puntajeElegido = null;

btnNoClick.forEach(btn => {

    btn.addEventListener('click', () => {
        removeClick()
        btn.classList.add('btn-click');
        puntajeElegido = btn.textContent;
    })
})

function removeClick() {
    const btnClick = document.querySelectorAll('.btn-click');

    if (btnClick.length == 1) {
        btnClick.forEach(bc => {
            bc.classList.remove('btn-click')
        })
    }
}


const submit = document.getElementById('btn-submit');

submit.addEventListener('click', () => {

    const verificar = document.querySelectorAll('.btn-click');

    if (verificar.length == 0) {
        alert("Debe elegir un puntaje")
    } else {
        const cardPuntaje = document.getElementById('puntaje');
        const cardThanks = document.getElementById('thanks');
        cardPuntaje.classList.add('oculto');
        cardThanks.classList.remove('oculto');

        const parrafo = document.getElementById('imgn-p');
        parrafo.innerHTML = `You selected ${puntajeElegido} out of 5`;
    }



})

