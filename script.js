let index = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('#slider img');
const totalSlides = slides.length;

function showSlide() {
  slider.style.transform = `translateX(${-index * 100}vw)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
}

const readMoreBtn = document.getElementById("read-more-btn");
const keralaFull = document.getElementById("kerala-full");

readMoreBtn.addEventListener("click", () => {
  if (keralaFull.style.display === "none") {
    keralaFull.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    keralaFull.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});
