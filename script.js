function checkTranslation() {
  const englishPhrase = document.getElementById('englishPhrase').value;
  const lunarianTranslation = document.getElementById('lunarianTranslation').value;

  // Here, you would have logic to check if the translation is correct and provide feedback to the user
  // This could involve comparing the user's input with the correct translations and displaying a success message if it matches

  // Example logic:
  if (englishPhrase === "Hello" && lunarianTranslation === "Lundar") {
    alert("Correct translation! Well done!");
  } else {
    alert("Incorrect translation. Try again!");
  }
}
