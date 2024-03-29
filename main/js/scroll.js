(function () {
  const header_active = document.querySelector('.header');
  const header_colorLogo = document.querySelector('.logotype');
  const header_color = document.querySelectorAll('.header-a');
  let dayNight = document.getElementById('style-css');

  window.onscroll = () => {
    if (window.scrollY > 50) {
      header_active.classList.add('header_active');
      header_colorLogo.style.color = 'white';

      document.querySelectorAll('.burger-item-close div, .burger-item div').forEach(item => {
        item.style.background = 'white';
    });
        
      
      header_color.forEach(element => {
        element.style.color = 'white';
      })

    } else if (dayNight.getAttribute("href") == "/main/styles/day.css") {
      header_active.classList.remove('header_active');
      header_colorLogo.style.color = 'black';
      
      document.querySelectorAll('.burger-item-close div, .burger-item div').forEach(item => {
        item.style.background = 'black';
    });
      
      header_color.forEach(element => {
        element.style.color = 'black';
      });
      
    } else {
      header_active.classList.remove('header_active');
      header_colorLogo.style.color = 'white';
      
      document.querySelectorAll('.burger-item-close div, .burger-item div').forEach(item => {
        item.style.background = 'white';
    });
      
      header_color.forEach(element => {
        element.style.color = 'white';
      });
    }
  };
})();


