let tomoes = document.querySelectorAll('.tomoe');
function set_tomoe(){
    for(let i = 0; i < tomoes.length; i++)
        tomoes[i].style.transform = `rotate(${i / tomoes.length}turn)`;
}
set_tomoe();
