document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg'
  ];
  const headerElement = document.querySelector("header");
  headerElement.style.backgroundImage = `url(${images[currentImageIndex]})`;

  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    headerElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex++;
  }

  setInterval(changeBackgroundImage, 5000);
});

function sendEmail() {
  Email.send({
    SecureToken:"698954f4-1f2c-4e8c-9e8d-75c7e73e2cf9",
    To : 'victoriahuhh@gmail.com',
    From : 'victoriahuhh@gmail.com',
    Subject : "New Contact From Website",
    Body : "Name: " + document.getElementById('name').value
        + "<br> Email: " + document.getElementById('email').value
        + "<br> Message: " + document.getElementById('message').value

}).then(
  message => {
    alert("Message Sent Successfully!");
  })
  .catch(error => {
    alert("Failed to send the message. Please try again later.");
    console.error("Email sending error: ", error);
  });
}
