let tomoe_div = document.createElement('div');
tomoe_div.innerHTML = ',';
tomoe_div.classList.add('tomoe');
let eye = document.querySelector('.eye');

let tomoes = [];
function get_tomoe(){
    tomoes = document.querySelectorAll('.tomoe');
}

function play_audio(){
    new Audio('sharingan.mp3').play();
}

function add_tomoe(){
    play_audio();
    eye.appendChild(tomoe_div.cloneNode(true));
    get_tomoe();
    set_tomoe_rotation();
    if(tomoes.length > 0)
        eye.classList.add('sharingan');
}

function remove_tomoe(){
    eye.removeChild(tomoes[tomoes.length - 1]);
    get_tomoe();
    if(tomoes.length > 0)
        set_tomoe_rotation();
    else
        eye.classList.remove('sharingan');
}

function set_tomoe_rotation(){
    for(let i = 0; i < tomoes.length; i++){
        tomoes[i].style.transform = `rotate(${i / tomoes.length}turn)`;
        tomoes[i].classList.add('fade-anim'); // adding now activates the animation;
    }
}

function update(){
    let size = tomoes.length;
    if(size >= 3){
        for(let i = 0; i < size; i++)
            remove_tomoe();
    }else{
        add_tomoe();
    }
}

document.addEventListener('keydown', event=>{
    switch (event.key) {
        case ' ':
            add_tomoe();
            break;
        case 'Backspace':
            remove_tomoe();
            break;
    }
});
