  
        let indiceDaFotoAtual = 0;
        
        let egito = document.querySelector('#egito');
        let brasil = document.querySelector('#brasil');
        let grecia = document.querySelector('#grecia');
        egito.addEventListener('mouseover', () =>{
          indiceDaFotoAtual = 0;
          grecia.classList.remove('selecionado');
          brasil.classList.remove('selecionado');
          egito.classList.add('selecionado');
        })
        egito.addEventListener('mouseout', ()=>{
          egito.classList.remove('selecionado');
        })
        brasil.addEventListener('mouseover', () =>{
          indiceDaFotoAtual = 1
          grecia.classList.remove('selecionado');
          egito.classList.remove('selecionado');
          brasil.classList.add('selecionado');
        })
        brasil.addEventListener('mouseout', ()=>{
          brasil.classList.remove('selecionado');
        })
        grecia.addEventListener('mouseover', () =>{
          indiceDaFotoAtual = 2;
          egito.classList.remove('selecionado');
          brasil.classList.remove('selecionado');
          grecia.classList.add('selecionado');
        })
        grecia.addEventListener('mouseout', ()=>{
          grecia.classList.remove('selecionado');
        })
        
        nomeDasImgens = [
              egito,
              brasil,
              grecia
        ];

      /*menu*/


let logo = document.querySelector('#logo');
let menuEl = document.querySelector('#menu');

logo.addEventListener('click', () => {
if(menuEl.classList == 'ativado'){
  console.log('fechou');
  menuEl.classList.remove('ativado');

}else{
  console.log('abriu');
  menuEl.classList.add('ativado');
}
})
        