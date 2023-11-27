 let inputText = "every human text possesses an element of chance, something that has not been foreseen. the greater the assumed degree of separation between author and _____, the greater the text's ability to mean, and the freer the reader is to generate meanings and shape the contents of the ____.This text becomes infinitely deep.                                                                            The                                                                                           interpretive                      act            results                           in              a         physical                                             modification of                 the                                           subject.";
let typedText = "";
let currentIndex = 0;
let minTypingSpeed = 20; // Minimum typing speed (milliseconds per character)
let maxTypingSpeed = 150; // Maximum typing speed (milliseconds per character)
let lastTypedTime = 0;
let rightMarginPercentage = 10; // Adjust the right margin as a percentage of the screen width
let font;

function preload() {
  font = loadFont('Txt Regular.ttf');
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  textFont(font);
  stroke(2);
  textAlign(LEFT, TOP); // Align text to the left
}

function draw() {
  background(255);
  fill(0);

  // Calculate the right margin based on the screen width
  let rightMargin = (width * rightMarginPercentage) / 100;

  // Calculate the maximum text width
  let maxTextWidth = width - rightMargin;

  // Display the typed text with right margin
  text(typedText, 20, 20, maxTextWidth);

  // Check if there are characters left to type
  if (currentIndex < inputText.length) {
    // Check if enough time has passed to type the next character
    if (millis() - lastTypedTime > getRandomTypingSpeed()) {
      // Type the next character
      typedText += inputText.charAt(currentIndex);
      currentIndex++;
      lastTypedTime = millis();
    }
  }
}

function getRandomTypingSpeed() {
  return random(minTypingSpeed, maxTypingSpeed);
}
