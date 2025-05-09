document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("magic8");
  button.onclick = function() {
    const fortunes = [
      "Definitely!",
      "Ask again later.",
      "Certainly.",
      "No.",
      "Don't count on it",
      "Try again after The Elder Scrolls 6 is released."
    ];

    const answer = Math.floor(Math.random() * fortunes.length);
    prediction = fortunes[answer];
    alert("The magic 8 ball says... " + prediction)
  };
});