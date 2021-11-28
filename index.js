let tomoe_div = document.createElement('div');
tomoe_div.innerHTML = ',';
tomoe_div.classList.add('tomoe');
let full_eye = document.querySelector('.full-eye');
let eye = document.querySelector('.eye');
let rinnegan = false;

let tomoes = [];
function get_tomoe(){
    tomoes = document.querySelectorAll('.tomoe');
}

function play_sharingan(){
    new Audio('sharingan.mp3').play();
}

function play_rinnegan(){
    new Audio('rinnegan.mp3').play();
}

function add_tomoe(){
    play_sharingan();
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
    if(rinnegan){
        rinnegan = false;
        full_eye.classList.remove('rinnegan');
        return;
    }
    let size = tomoes.length;
    if(size >= 3){
        for(let i = 0; i < size; i++)
            remove_tomoe();
        full_eye.classList.add('rinnegan');
        rinnegan = true;
        play_rinnegan();
    }else{
        add_tomoe();
    }
}

document.addEventListener('keydown', event=>{
    switch (event.key) {
        case ' ':
            update();
            break;
        case '+':
            add_tomoe();
            break;
        case '-':
        case 'Backspace':
            remove_tomoe();
            break;
        default:
            // console.log(event.key);
            // console.log(event.keyCode);
    }
});
