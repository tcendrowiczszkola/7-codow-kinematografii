const images = ['img/ruchomyzamekhauru.png', 'img/kamienienaszaniec.png', 'img/herkules.png', 'img/to.png', 'img/spiritedaway.png', 'img/dexter.png', 'img/sherlock.png'];
let currentIndex = 0;
function changeImage(){
const changeImage =
document.getElementByld('changeImg');
currentIndex = (currentIndex + 1) % images.length;
zdjecie.src = images[currentIndex];}
setInterval(changeImage, 3000);
