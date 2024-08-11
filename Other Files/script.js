document.addEventListener("DOMContentLoaded", function () {
  // Change the text content of an element with the ID 'example'
  var exampleElement = document.getElementById('example');
  if (exampleElement) {
    exampleElement.textContent = "Welcome to Luclin Enterprises!";
  }

  // Add a click event listener to a button with the ID 'myButton'
  var myButton = document.getElementById('myButton');
  if (myButton) {
    myButton.addEventListener('click', function () {
      alert('Button clicked!');
    });
  }
});