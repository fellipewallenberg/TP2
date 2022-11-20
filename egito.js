function mudaPosicao(e){
let left = {}
left = parseInt(Math.random() * 2000);
let right = {}
right = parseInt(Math.random() * -2000);
let posicao = left+right;
console.log(posicao + 'px');
e.style.paddingTop = '100px';
}

let camelos = document.querySelector('.camelos');
camelos.addEventListener('mouseover', mudaPosicao);
/*for(let i=0; i<camelos.length; i++)
    camelos[i].addEventListener('mouseover', mudaPosicao);*/


    function expandir (e){
        window.alert('oiio');
        let botaoEl = e.currentTarget;
        let pEl = e.children;
        pEl.classList.add('expandido')
        if(pEl.classList == 'expandido')
        botaoEl.innerHTML = '-';
        else
        botaoEl.innerHTML = '+';
        
       
    
    }
    
    
    let expadirEl = document.querySelectorAll('.botton')
    
    for(let i = 0; i<expadirEl.length; i++)
        expadirEl[i].addEventListener('click', expandir)