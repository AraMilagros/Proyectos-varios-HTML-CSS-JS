const panels = document.querySelectorAll('.cards'); //esta capturando todas las clases .panel
const direction = document.querySelectorAll('.direction');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

direction.forEach(d => {
    d.addEventListener('click', () => {
        const dir = document.getElementById("main");
        console.log(dir.classList.contains("horizontal"))
        if(dir.classList.contains("horizontal")){
            dir.classList.remove('horizontal')
            dir.classList.add('vertical')
        }else{
            dir.classList.remove('vertical')
            dir.classList.add('horizontal')
        }
    })
})

