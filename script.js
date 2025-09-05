// --- Main Image Slider ---
let slideIndex = 0;
const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('img');
const totalSlides = slides.length;

function toggleReadMore() {
  var moreText = document.getElementById("more-text");
  var btn = document.getElementById("read-more-btn");
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

function showSlide() {
  slider.style.transform = `translateX(${-slideIndex * 100}vw)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide();
}
setInterval(nextSlide, 2000);
showSlide();

// --- Card Slider ---
let cardIndex = 0;
const cardSlider = document.getElementById('card-slider');
const cards = cardSlider.querySelectorAll('.card');
const visibleCards = 3;
let cardInterval;

function showCards() {
  cardSlider.style.transform = `translateX(${-cardIndex * (cards[0].offsetWidth + 30)}px)`;
}

function nextCard() {
  cardIndex = (cardIndex < cards.length - visibleCards) ? cardIndex + 1 : 0;
  showCards();
}

function prevCard() {
  cardIndex = (cardIndex > 0) ? cardIndex - 1 : 0;
  showCards();
}

function startCardInterval() {
  stopCardInterval();
  cardInterval = setInterval(nextCard, 1500);
}

function stopCardInterval() {
  if (cardInterval) clearInterval(cardInterval);
}

cardSlider.addEventListener('mouseenter', stopCardInterval);
cardSlider.addEventListener('mouseleave', startCardInterval);

window.addEventListener('resize', showCards);

function changeLanguage(lang) {
  var selectField = document.querySelector("select.goog-te-combo");
  if (selectField) {
    selectField.value = lang;
    selectField.dispatchEvent(new Event("change"));
  }

