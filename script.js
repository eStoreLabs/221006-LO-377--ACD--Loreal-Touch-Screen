//ScrollReveal
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 400,
  });
  ScrollReveal().reveal('.main__title', {
    delay: 100,
    origin: 'top',
    mobile: true,
  });
  ScrollReveal().reveal('.main__productSingle--liftactive', {
    delay: 100,
    origin: 'left',
    mobile: true,
  });
  ScrollReveal().reveal('.main__productSingle--dercos', {
    delay: 200,
    origin: 'left',
    mobile: true,
  });
  ScrollReveal().reveal('.main__productSingle--laroche', {
    delay: 100,
    origin: 'right',
    mobile: true,
  });
  ScrollReveal().reveal('.main__productSingle--cerave', {
    delay: 200,
    origin: 'right',
    mobile: true,
  });
  ScrollReveal().reveal(
    '.about-me-container, .project-item-container, .contact-container',
    {
      delay: 200,
      mobile: true,
    }
  );

  ScrollReveal().reveal('.main__footer', {
    delay: 100,
    origin: 'bottom',
    mobile: true,
  });