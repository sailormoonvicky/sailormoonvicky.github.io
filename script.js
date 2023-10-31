document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = [
     'assets/imgs/1.jpg',
     'assets/imgs/2.jpg',
     'assets/imgs/3.jpg'
  ];
  const headerElement = document.querySelector("header");

  function changeBackgroundImage() {
     headerElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
     currentImageIndex++;

     if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
     }
  }

  setInterval(changeBackgroundImage, 7000);
});

function sendEmail() {
  Email.send({
    SecureToken:"81903ad9-ebec-46f3-ae24-8cbaed0cbcec",
    To : 'victoriahuhh@gmail.com',
    From : 'victoriahuhh@gmail.com',
    Subject : "New Contact From Website",
    Body : "Name: " + document.getElementById('name').value
        + "<br> Email: " + document.getElementById('email').value
        + "<br> Message: " + document.getElementById('message').value

}).then(
  message => alert("Message Sent Successfully!")
);
}

function findSmallestInt(arg) {
  return Math.min(arg)
}
