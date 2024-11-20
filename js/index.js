const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

function sendToWhattsapp() {
  let number = "+919421035852";

  let name = document.getElementById("text").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  var url =
    "https://wa.me/" +
    number +
    "?text=" +
    "Name : " +
    name +
    "%0a" +
    "Email : " +
    email +
    "%0a" +
    "Message : " +
    message +
    "%0a%0a";

  window.open(url, "_blank").focus();
}
