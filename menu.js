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