var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "white";
// trigger this function when scrolled

window.onscroll = function (event) {
  var scroll = window.pageYOffset;

  if (scroll < 100) {
    // trigger green

    body.style.backgroundColor = "green";
  } else if (scroll >= 100 && scroll < 300) {
    // trigger white

    body.style.backgroundColor = "yellow";
  } else if (scroll >= 300 && scroll < 600) {
    // trigger yellow

    body.style.backgroundColor = "blue";
  } else if (scroll >= 600 && scroll < 900) {
    // trigger grey

    body.style.backgroundColor = "white";
  } else if (scroll >= 900 && scroll < 1200) {
    // trigger red

    body.style.backgroundColor = "red";
  }
};
