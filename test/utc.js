document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("utc");
  button.onclick = function() {
    now = new Date();
    utctime = now.toGMTString(); 
    alert("The current UTC time is: " + utctime)
  };
});