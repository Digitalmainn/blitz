document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('typing-heading');
    const text = "QuickStep\u2122";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        heading.textContent += text[index];
        index++;
        setTimeout(typeEffect, 50); // Adjust typing speed (milliseconds)
      }
    }

    typeEffect();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('typing-p');
    const text = "From Our Store to Your Doorstep!!";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        heading.textContent += text[index];
        index++;
        setTimeout(typeEffect, 50); // Adjust typing speed (milliseconds)
      }
    }

    typeEffect();
  });
