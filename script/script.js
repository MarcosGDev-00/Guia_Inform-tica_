function toggleAccordion(element) {
  // Obtém o elemento pai (item do acordeão)
  var item = element.parentNode;

  // Obtém o corpo do item do acordeão
  var body = item.querySelector('.accordion-item-body');

  // Alterna a visibilidade do corpo do item do acordeão
  if (body.style.display === 'none') {
    body.style.display = 'block';
  } else {
    body.style.display = 'none';
  }
}