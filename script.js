document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = [
     'assets/imgs/1.jpg',
     'assets/imgs/2.jpg',
     'assets/imgs/3.jpg',
     'assets/imgs/4.jpg',
     'assets/imgs/5.jpg',
     'assets/imgs/6.jpg',
     '/assets/imgs/7.jpg'
  ];
  const headerElement = document.querySelector("header");

  function changeBackgroundImage() {
     headerElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
     currentImageIndex++;

     if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
     }
  }

  setInterval(changeBackgroundImage, 2000);
});
