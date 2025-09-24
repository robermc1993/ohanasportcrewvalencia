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