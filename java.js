// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeAbout")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modalproj = document.getElementById("myModalproj");

// Get the button that opens the modal
var btn = document.getElementById("myPRJCTS");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeProj")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modalproj.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalproj.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalproj) {
    modalproj.style.display = "none";
  }
}
