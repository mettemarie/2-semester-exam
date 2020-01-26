// Get the modal
var modal = document.getElementById("myModal");

// Get maps
var lyshojen_map = document.getElementById("lyshojen")
var skovfaldet_map = document.getElementById("skovfaldet")

// Get the buttons that opens the modal
var lyshojen_btn = document.getElementById("lyshojen-btn");
var skovfaldet_btn = document.getElementById("skovfaldet-btn");

// Get the element that closes the modal
var close = document.getElementsByClassName("close")[0];

// Function to open the modal with the specific map
function openModal(map) {
  modal.style.display = "block";
  map.style.display = "block";
}

// Function that closes the modal and both maps
function closeModal() {
  modal.style.display = "none";
  lyshojen_map.style.display = "none";
  skovfaldet_map.style.display = "none";
}

// When the user clicks on the button, open the modal
lyshojen_btn.onclick = function() {
  openModal(lyshojen_map)
}
skovfaldet_btn.onclick = function() {
  openModal(skovfaldet_map)
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  closeModal()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal()
  }
}