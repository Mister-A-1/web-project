const slider = document.querySelector('.image-slider');
const nextButton = document.getElementById('nextButton');
const imagesPerRow = 3; // Change this to control the number of images per view
const imageItems = document.querySelectorAll('.image-item');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  const totalImages = imageItems.length;
  const maxIndex = Math.ceil(totalImages / imagesPerRow) - 1;

  // Move to the next set of images
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reset to the first set (optional behavior)
  }

  // Calculate the new transform value
  const sliderWidth = slider.offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
});
