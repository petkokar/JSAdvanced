function notify(message) {
  const div = document.getElementById('notification');
  div.addEventListener('click', () => {
    hideDiv();
  })

  div.textContent = message;
  div.style.display = 'block';


  function hideDiv() {
    div.style.display = 'none';

    div.removeEventListener('click', hideDiv);
  }
}