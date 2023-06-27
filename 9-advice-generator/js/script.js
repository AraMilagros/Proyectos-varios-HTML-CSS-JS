let bandera = true;

function getApi() {
    const urlApi = "https://api.adviceslip.com/advice";

    const numAdvice = document.querySelector('#cardBody--label');
    const advice = document.querySelector('#cardBody--p');

    fetch(urlApi)
        .then(res => res.json())
        .then(response => {
            numAdvice.innerHTML = `Advice #${response.slip.id}`;
            advice.innerHTML = `"${response.slip.advice}"`
        })
}

if (bandera) {
    getApi();
    bandera = false;
}