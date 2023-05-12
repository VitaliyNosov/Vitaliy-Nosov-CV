
const botToken = '6138840787:AAFMxqaoViiCF22tskdznuhhoLUlBy6cmBw';
const chatId = '422713968';
const feedbackForm = document.getElementById('feedbackForm');

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
       console.log('Уведомление успешно отправлено в Telegram');
       alert('Уведомление успешно отправлено в Telegram');
     })
     .catch(error => {
       console.error('Ошибка отправки уведомления в Telegram:', error);
       alert('Ошибка отправки уведомления в Telegram:');
     });

 }


// function handleFeedbackForm(name, email, message) {

//    const feedbackMessage = `Новая обратная связь:\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;
//    sendToTelegram(feedbackMessage);
//  }

 function handleFeedbackForm(name, email, message) {
  const feedbackMessage = `Новая обратная связь:\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;
  sendToTelegram(feedbackMessage);

  // Очистить поля формы после отправки
  document.getElementById('nameFF').value = '';
  document.getElementById('contactFF').value = '';
  document.getElementById('projectFF').value = '';
}