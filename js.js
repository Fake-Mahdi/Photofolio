let display = document.getElementById("display");
var tableau = new Array(
  "images/gallery-1.jpg",
  "images/gallery-2.jpg",
  "images/gallery-3.jpg",
  "images/gallery-4.jpg",
  "images/gallery-5.jpg",
  "images/gallery-6.jpg",
  "images/gallery-7.jpg",
  "images/gallery-8.jpg",
  "images/gallery-9.jpg",
  "images/gallery-10.jpg",
  "images/gallery-11.jpg",
  "images/gallery-12.jpg",
  "images/gallery-13.jpg",
  "images/gallery-14.jpg",
  "images/gallery-15.jpg",
  "images/gallery-16.jpg"
);

var len = tableau.length;
let marque = ""; // create an empty string to accumulate the markup
for (let i = 0; i < len; i++) {
  marque += `<div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <img src="${tableau[i]}" class="img-responsive img-rounded" alt="">
            </div>`;
}

console.log(marque);
display.innerHTML = marque;