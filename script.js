// --- Read More Toggle --- //
function toggleReadMore() {
  const moreText = document.getElementById("kerala-full");
  const btn = document.getElementById("read-more-btn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

// ------------------ IMAGE SLIDER ------------------ //
let currentSlide = 0;
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-play every 5s
setInterval(nextSlide, 3000);

// ------------------ CARD SLIDER ------------------ //
let cardIndex = 0;
const cardSlider = document.getElementById("card-slider");
const cards = cardSlider.querySelectorAll(".card");
const totalCards = cards.length;
const visibleCards = 3;

function showCard(index) {
  if (index < 0) {
    cardIndex = totalCards - visibleCards;
  } else if (index > totalCards - visibleCards) {
    cardIndex = 0;
  } else {
    cardIndex = index;
  }
  cardSlider.style.transform = `translateX(-${cardIndex * (cards[0].offsetWidth + 20)}px)`;
}

function nextCard() {
  showCard(cardIndex + 1);
}

function prevCard() {
  showCard(cardIndex - 1);
}

// Auto-scroll cards every 2s
let cardInterval = setInterval(nextCard, 2000);

// Pause on hover
cardSlider.addEventListener("mouseenter", () => clearInterval(cardInterval));
cardSlider.addEventListener("mouseleave", () => {
  cardInterval = setInterval(nextCard, 1500);
});

// ------------------ LANGUAGE SWITCH ------------------ //
function changeLanguage(lang) {
  const selectField = document.querySelector("select.goog-te-combo");
  if (selectField) {
    selectField.value = lang;
    selectField.dispatchEvent(new Event("change"));
  }
}
