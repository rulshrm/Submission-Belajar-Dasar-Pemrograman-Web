document.addEventListener('DOMContentLoaded', function () {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
          link.addEventListener('click', function (e) {
              e.preventDefault();
  
              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);
  
              if (targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop - 50,
                      behavior: 'smooth'
                  });
              }
          });
      });
  
      // Toggle menu
      const menuIcon = document.querySelector('.menu-icon');
      const navList = document.querySelector('.nav-list ul');
  
      menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show-menu');
      });
  });
  