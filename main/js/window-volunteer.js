let buttonVolunteer = document.querySelector('.block-5-btn-left');
let joinWindow = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-button-window');
let modalBtn = document.querySelector('.modal-button');
let modalBtnText = document.querySelector('.modal-btn-thxs');

buttonVolunteer.onclick = function () {
  joinWindow.style.display = ('block');
}

closeBtn.onclick = function () {
  modalBtnText.style.display = ('none');
  joinWindow.style.display = ('none');
}

modalBtn.onclick = function () {
  modalBtnText.style.display = ('block');
}

