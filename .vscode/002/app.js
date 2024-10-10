let receber=document.querySelector('#receber');
even();
function even(){
    document.addEventListener('DOMContentLoaded',()=>{
        // receber.innerHTML=prompt('Qual [e o teu nome?');
        let a=prompt('Qual [e o teu nome?');
        if(a===null || a==='' || a===' '|| a==='  '|| a==='   '|| a==='    '|| a==='     '|| a==='      '){
            document.location.reload();
        }
    })
}
function on(){

    receber.classList.add('a','s');
    // receber.setAttribute('class','a')
    // receber.appendChild(document.createTextNode('  eu sou odjey'));
setInterval(()=>{
        receber.appendChild(document.createTextNode('    eu sou odjey'));
        // receber.remove();
    },2000);
}