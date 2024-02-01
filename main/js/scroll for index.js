(function () {
  const header_active = document.querySelector('.header');
  const header_colorLogo = document.querySelector('.logotype');
  const header_color = document.querySelectorAll('.header-a');

  window.onscroll = () => {
    if (window.scrollY > 50) {
      header_active.classList.add('header_active');
      header_colorLogo.style.color = 'white';
      
      header_color.forEach(element => {
        element.style.color = 'white';
      });
    } else {
      header_active.classList.remove('header_active');
      header_colorLogo.style.color = 'white';
      
      header_color.forEach(element => {
        element.style.color = 'white';
      });
    }
  };
})();