let button1 = document.querySelector('.block-2-donate-b1')
let button2 = document.querySelector('.block-2-donate-b2')
let button3 = document.querySelector('.block-2-donate-b3')
let p1 = document.querySelector('.block-2-donate-scroll-p1')
let p2 = document.querySelector('.block-2-donate-scroll-p2')
let p3 = document.querySelector('.block-2-donate-scroll-p3')

button1.onclick = function () {
  button1.style.borderColor = ('#3cff00');
  button1.style.borderWidth = ('3px');
  button1.style.fontWeight = ('600');
  p1.style.display = ('block')
  button3.style.borderColor = ('white');
  button3.style.borderWidth = ('1px');
  button3.style.fontWeight = ('500');
  p2.style.display = ('none')
  button2.style.borderColor = ('white');
  button2.style.borderWidth = ('1px');
  button2.style.fontWeight = ('500');
  p3.style.display = ('none')
}

button2.onclick = function () {
  button2.style.borderColor = ('#3cff00');
  button2.style.borderWidth = ('3px');
  button2.style.fontWeight = ('600');
  p2.style.display = ('block')
  button1.style.borderColor = ('white');
  button1.style.borderWidth = ('1px');
  button1.style.fontWeight = ('500');
  p1.style.display = ('none')
  button3.style.borderColor = ('white');
  button3.style.borderWidth = ('1px');
  button3.style.fontWeight = ('500');
  p3.style.display = ('none')
}

button3.onclick = function () {
  button3.style.borderColor = ('#3cff00');
  button3.style.borderWidth = ('3px');
  button3.style.fontWeight = ('600');
  p3.style.display = ('block')
  button1.style.borderColor = ('white');
  button1.style.borderWidth = ('1px');
  button1.style.fontWeight = ('500');
  p1.style.display = ('none')
  button2.style.borderColor = ('white');
  button2.style.borderWidth = ('1px');
  button2.style.fontWeight = ('500');
  p2.style.display = ('none')
}