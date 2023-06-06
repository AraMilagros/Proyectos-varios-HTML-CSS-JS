const btnIcono = document.getElementById("btn-icono");
const nav = document.getElementById('content-nav');
const fondo = document.getElementById('bg-fondo');

btnIcono.addEventListener('click', ()=>{
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
        // fondo.classList.remove('active')
    }else{
        nav.classList.add('active');
        // fondo.classList.add("active");
    }

})
