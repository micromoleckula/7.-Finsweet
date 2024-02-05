(function () {
  const header_active = document.querySelector('.header');
  const header_colorLogo = document.querySelector('.logotype');
  const header_color = document.querySelectorAll('.header-a');
  let dayNight = document.getElementById('style-css');
  let burger1 = document.querySelector('.burger-item-line1');
  let burger2 = document.querySelector('.burger-item-line2');
  let burger3 = document.querySelector('.burger-item-line3');

  window.onscroll = () => {
    if (window.scrollY > 50) {
      header_active.classList.add('header_active');
      header_colorLogo.style.color = 'white';
      burger1.style.background = 'white';
      burger2.style.background = 'white';
      burger3.style.background = 'white';

      header_color.forEach(element => {
        element.style.color = 'white';
      })

    } else if (dayNight.getAttribute("href") == "/main/styles/day.css") {
      header_active.classList.remove('header_active');
      header_colorLogo.style.color = 'black';
      burger1.style.background = 'black';
      burger2.style.background = 'black';
      burger3.style.background = 'black';
      
      header_color.forEach(element => {
        element.style.color = 'black';
      });
      
    } else {
      header_active.classList.remove('header_active');
      header_colorLogo.style.color = 'white';
      burger1.style.background = 'white';
      burger2.style.background = 'white';
      burger3.style.background = 'white';
      
      header_color.forEach(element => {
        element.style.color = 'white';
      });
    }
  };
})();


