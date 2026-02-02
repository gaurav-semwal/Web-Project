document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("background-music");
  const videoCard = document.querySelector(".aside.left");
  const video = videoCard.querySelector("video");
  const clickButton = document.querySelector(".click-box button");
  const choiceBox = document.querySelector(".choice-box");
  const threedBox = document.querySelector(".threed-box");
  const questionText = document.querySelector(".question-box h1");
  const yesButton = document.querySelector(".choice-box button:first-child");
  const noButton = document.querySelector(".choice-box button:last-child");

  let partnerName = "Bharti Madam Ji";
  let noClickCount = 0;

  function typeWriterEffect(element, text, speed = 100) {
    element.innerHTML = "";
    let i = 0;

    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  function revealChoices() {
    audio.pause();
    audio.currentTime = 0;

    videoCard.classList.remove("hide");
    video.play();

    clickButton.style.display = "none";
    choiceBox.classList.remove("hide");

    questionText.innerHTML = `<span class="partner-name">${partnerName}</span><br><span class="typed-text"></span>`;

    const typedTextElement = document.querySelector(".typed-text");
    setTimeout(() => {
      typeWriterEffect(
        typedTextElement,
        "Kya Bharti Madam Ji Aaj Fries Khilayege? 🍟😋",
      );
    }, 200);
  }

  // FOOD FALLING EFFECT
  function createFood() {
    const foods = ["🍔", "🍕", "🍟", "🍩"];
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("food-container");
    document.body.appendChild(foodContainer);

    for (let i = 0; i < 30; i++) {
      let food = document.createElement("div");
      food.classList.add("food");
      food.innerText = foods[Math.floor(Math.random() * foods.length)];

      food.style.left = Math.random() * 100 + "vw";
      food.style.animationDuration = Math.random() * 2 + 3 + "s";

      foodContainer.appendChild(food);
    }

    setTimeout(() => {
      foodContainer.remove();
    }, 5000);
  }

  yesButton.addEventListener("click", function () {
    questionText.innerHTML = `<span class="partner-name">${partnerName}</span><br><span class="love-text">Thank You Fries Ke Liye 😋</span>`;
    choiceBox.style.display = "none";
    threedBox.classList.remove("hide");

    createFood();
  });

  // NO BUTTON ESCAPES ONLY WHEN CLICKED 😈
  function moveNoButton() {
    const offsetX = Math.random() * 150 - 75;
    const offsetY = Math.random() * 100 - 50;

    noButton.style.position = "relative";
    noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  noButton.addEventListener("mousedown", moveNoButton);
  noButton.addEventListener("touchstart", moveNoButton);

  noButton.addEventListener("click", function () {
    noClickCount++;

    if (noClickCount >= 3) {
      noButton.style.display = "none";
      questionText.innerHTML += `<br><span class="no-choice-text">No option nahi hai 😤</span>`;
    }
  });

  clickButton.addEventListener("click", revealChoices);
});
