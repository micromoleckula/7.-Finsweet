let button = document.querySelector('.burger-item')
let buttonClose = document.querySelector('.burger-item-close')
let nav = document.querySelector('.burger-list')



button.onclick = function () {
  nav.style.display = ('block');
  button.style.display = ('none');
  buttonClose.style.display = ('block');
}

buttonClose.onclick = function () {
  nav.style.display = ('none');
  button.style.display = ('block');
  buttonClose.style.display = ('none');
}