document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("dice");
  button.onclick = function() {
    const roll = Math.ceil(Math.random() * 6);
    alert("You rolled a: " + roll)
  };
});