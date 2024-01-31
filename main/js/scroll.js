(function () {
  const header_active = document.querySelector('.header')
  window.onscroll = () => {
      if (window.scrollY > 50) {
          header_active.classList.add('header_active')}
          else {
          header_active.classList.remove('header_active')}
  }
}())