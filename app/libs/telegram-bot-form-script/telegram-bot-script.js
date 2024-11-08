const botToken = '6138840787:AAFMxqaoViiCF22tskdznuhhoLUlBy6cmBw';
const chatId = '422713968';
const feedbackForm = document.getElementById('feedbackForm');
const notyf = new Notyf({
  position: { x: 'center', y: 'top' },
  types: [
    { type: 'success', background: '#034A72', duration: 3000, icon: false },
    { type: 'error', background: '#f44336', duration: 3000, icon: false }
  ]
});

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('nameFF').value;
  const email = document.getElementById('contactFF').value;
  const message = document.getElementById('projectFF').value;
  handleFeedbackForm(name, email, message);
});

function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const data = { chat_id: chatId, text: message };

  axios.post(url, data)
    .then(response => {
      console.log('Notification sent successfully');
      notyf.success('Notification sent successfully');
    })
    .catch(error => {
      console.error('Error sending notification', error);
      notyf.error('Error sending notification');
    });
}

function handleFeedbackForm(name, email, message) {
  const feedbackMessage = `Новая обратная связь:\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;
  sendToTelegram(feedbackMessage);
  document.getElementById('nameFF').value = '';
  document.getElementById('contactFF').value = '';
  document.getElementById('projectFF').value = '';
}
