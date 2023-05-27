// JavaScript code for modifying the page dynamically
// Example: Change the header background color on mouseover
var header = document.getElementById('idh1');

header.addEventListener('mouseover', function () {
  header.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}
