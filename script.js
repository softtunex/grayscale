document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-stack .image");
  let currentIndex = 0;

  // Function to switch images
  function switchImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  // Auto-flip every 2 seconds
  setInterval(switchImage, 2000);

  // Add click event to flip images manually
  images.forEach((image) => {
    image.addEventListener("click", switchImage);
  });
});
