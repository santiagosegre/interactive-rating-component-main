const lis = document.querySelectorAll('li');
lis.forEach(li => {
  li.addEventListener('click', () => {
    // Remove a classe 'active' de todos os elementos
    lis.forEach(li => li.classList.remove('active'));
    // Adiciona a classe 'active' ao elemento clicado
    li.classList.add('active');
  });
});

const ratings = document.querySelectorAll('.ratings li');
const ratingsSection = document.querySelector(".rating-section");
const thanksSection = document.querySelector(".thanks");

ratings.forEach(rating => {
  const value = rating.textContent;
});

const button = document.querySelector('#btn-submit');
const notaSelecionada = document.querySelector('#notaSelecionada');

button.addEventListener('click', () => {
  // Obter a nota selecionada
  const nota = document.querySelector('.ratings li.active');
  if (nota) {
    const notaSelecionadaTexto = nota.textContent;
    
    ratingsSection.classList.add('hidden');
    thanksSection.classList.remove('hidden');

    // Atualizar o conteúdo do elemento desejado com a nota selecionada
    notaSelecionada.textContent = notaSelecionadaTexto;
  } else {
    alert('Nenhuma nota selecionada!');
  }
});

