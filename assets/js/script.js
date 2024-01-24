document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('m-nav');
  const menu = document.getElementById('menu');
  const closeBtn = document.getElementById('close-btn');
  const mobileNavLinks = document.querySelectorAll('#navlinks a');

  menu.addEventListener('click', function () {
    nav.classList.toggle('show');
  });

  closeBtn.addEventListener('click', function () {
    nav.classList.remove('show');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      nav.classList.remove('show');
    });
  });
  
});
