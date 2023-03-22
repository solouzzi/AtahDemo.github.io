


// Seleccionar todas las preguntas
const questions = document.querySelectorAll('.faq');
const arrow = document.getElementById('arrow-icon');

const rotated = false;




// Iterar sobre cada pregunta y agregar un evento de clic
questions.forEach((question) => {
  question.addEventListener('click', () => {
    // Seleccionar la respuesta correspondiente a la pregunta
    
    const answer = question.querySelector('.answer');
    const arrow = question.querySelector('.arrow-icon');
    
    
    
    
    
    

    // Cambiar la altura máxima de la respuesta para que se muestre o se oculte
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      
    }

    if (rotated) {
      arrow.style.transform = "rotate(90deg)";
      rotated = false;
    } else {
      arrow.style.transform = "rotate(180deg)";
      rotated = true;
    }
  });
});


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
});






