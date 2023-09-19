const divBg = document.getElementById('cmobile-bg');
const home = document.getElementById('i-home');
const work = document.getElementById('i-work');
const blog = document.getElementById('i-blog');
const user = document.getElementById('i-user');

home.addEventListener('click', () => {
    determinarClase('home');

    if(work.classList.contains('active')){
        work.classList.remove('active');
    }else if (blog.classList.contains('active')){
        blog.classList.remove('active');
    }else{
        user.classList.remove('active');
    }
});

work.addEventListener('click', () => {
    determinarClase('work');
    if(home.classList.contains('active')){
        home.classList.remove('active');
    }else if (blog.classList.contains('active')){
        blog.classList.remove('active');
    }else{
        user.classList.remove('active');
    }
});

blog.addEventListener('click', () => {
    determinarClase('blog');
    if(home.classList.contains('active')){
        home.classList.remove('active');
    }else if (work.classList.contains('active')){
        work.classList.remove('active');
    }else{
        user.classList.remove('active');
    }
});

user.addEventListener('click', () => {
    determinarClase('us');
    if(home.classList.contains('active')){
        home.classList.remove('active');
    }else if (blog.classList.contains('active')){
        blog.classList.remove('active');
    }else{
        work.classList.remove('active');
    }
});

const determinarClase = (claseLlamada) => {

    divBg.removeAttribute('class');
    
    switch(claseLlamada){
        case 'home':
            divBg.classList.add('home');
            home.classList.add('active')
            console.log('home')
        break;

        case 'work':
            divBg.classList.add('work');
            work.classList.add('active');
            console.log('work');
        break;

        case 'blog':
            divBg.classList.add('blog');
            blog.classList.add('active');
            console.log('blog');
        break;
        
        case 'us':
            divBg.classList.add('us');
            user.classList.add('active');
            console.log('us');
        break;
    }
}