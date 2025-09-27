    //Constantes galería
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.hero h1, .hero p, .hero .cta-buttons a, .about, .routes, .gallery, .news, .contact form').forEach(el => {
      observer.observe(el);
    });

   
    //Galería
    scrollLeftBtn.addEventListener('click', () => {
      galleryWrapper.scrollBy({
        left: -300, // Ajusta el valor para la cantidad de píxeles que quieres desplazar
        behavior: 'smooth'
      });
    });

    scrollRightBtn.addEventListener('click', () => {
      galleryWrapper.scrollBy({
        left: 300, // Ajusta el valor para la cantidad de píxeles que quieres desplazar
        behavior: 'smooth'
      });
    });