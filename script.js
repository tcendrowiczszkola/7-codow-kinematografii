const images = ['ruchomyzamekhauru.png', 'kamienienaszaniec.png', 'herkules.png', 'to.png', 'spiritedaway.png', 'dexter.png', 'sherlock.png'];
let currentIndex = 0;
function changeImage(){
const changeImage =
document.getElementByld('changeImg');
currentIndex = (currentIndex + 1) % images.length;
zdjecie.src = images[currentIndex];}
setInterval(changeImage, 3000);