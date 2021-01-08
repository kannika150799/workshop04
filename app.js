var modal = document.getElementById("myModal");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");

img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

function myFunction() {
    window.open(
    "https://siamceladon.com/",
    "_blank",
    "width=600,height=600"
  );
}
