(function () {
  const header_active = document.querySelector('.header-home');
  const header_colorLogo = document.querySelector('.logotype-home');
  const header_color = document.querySelectorAll('.header-a-home');

  window.onscroll = () => {
    if (window.scrollY > 50) {
      header_active.classList.add('header_active');
      ;
    } else {
      header_active.classList.remove('header_active');
      ;
    }
  };
})();