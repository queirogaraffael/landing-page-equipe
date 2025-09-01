document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const sendButton = document.querySelector('.send-button');

  if (form) {
    form.addEventListener('submit', (e) => {
      // Evita o envio padrão do formulário
      e.preventDefault();

      // Limpa mensagens de erro anteriores
      clearErrors();

      let isValid = true;

      // Validação do campo Nome
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Por favor, insira seu nome.');
        isValid = false;
      }

      // Validação do campo E-mail
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Por favor, insira seu e-mail.');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Por favor, insira um e-mail válido.');
        isValid = false;
      }

      // Validação do campo Mensagem
      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Por favor, insira uma mensagem.');
        isValid = false;
      }

      if (isValid) {
        // Se a validação passar, você pode enviar o formulário
        alert('Formulário enviado com sucesso!');
        form.submit();
      }
    });
  }

  function showError(input, message) {
    const parent = input.parentElement;
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    parent.appendChild(errorElement);
    input.classList.add('invalid');
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  }

  function isValidEmail(email) {
    // Regex simples para validação de e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});