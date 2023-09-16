document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = [
     '/Users/zhenghanhu/Frontend/Projects/zhengHan.github.io/assets/imgs/1.jpg',
     '/Users/zhenghanhu/Frontend/Projects/zhengHan.github.io/assets/imgs/2.jpg',
     '/Users/zhenghanhu/Frontend/Projects/zhengHan.github.io/assets/imgs/3.jpg',
     '/Users/zhenghanhu/Frontend/Projects/zhengHan.github.io/assets/imgs/4.jpg',
     '/Users/zhenghanhu/Frontend/Projects/zhengHan.github.io/assets/imgs/5.jpg',
     '/Users/zhenghanhu/Frontend/Projects/zhengHan.github.io/assets/imgs/6.jpg',
     '/Users/zhenghanhu/Frontend/Projects/zhengHan.github.io/assets/imgs/7.jpg'
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
