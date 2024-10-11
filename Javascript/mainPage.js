const scrollContainer = document.querySelector('.col');

    function scrollRight() {
      scrollContainer.scrollBy({ left: 150, behavior: 'smooth' });
    }

    function scrollLeft() {
      scrollContainer.scrollBy({ left: -150, behavior: 'smooth' });
    }
    