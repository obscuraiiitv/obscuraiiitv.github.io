const sponsors = document.getElementById('sponsors');

const { body } = document;


sponsors.addEventListener('click', e => {
    body.classList.toggle('show-sponsors');
});

//navgation
var header = document.getElementById("active");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
//   this.className += " active";
  });
}

