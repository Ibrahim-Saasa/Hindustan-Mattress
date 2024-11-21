const pretty = {
  "[javascript]": {
    "editor.formatOnSave": false,
  },
};

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

// if (close) {
//   close.addEventListener("click", () => {
//     nav.classList.remove("active");
//   });
// };

// function sendToWhatsapp() {
//   let number = "+919421035852";

//   let name = document.getElementById("text").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;

//   var url = "https://wa.me/" + number + "?text=" 
//   + "Name : " +name+ "%0a"
//   + "Email : " +email+ "%0a"
//   + "Message : " +message+ "%0a%0a"

//   window.open(url, "_blank").focus();
// }

function sendToWhatsapp() {
  // Get input elements
  let nameInput = document.getElementById("text");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");

  // Validate inputs
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Please fill in all fields");
    return;
  }

  // Use the phone number from the contact details
  let number = "+917499863338"; // Updated phone number from contact.html

  // Create URL-encoded message
  let message = 
    "Name: " + encodeURIComponent(nameInput.value) + "%0a" +
    "Email: " + encodeURIComponent(emailInput.value) + "%0a" +
    "Message: " + encodeURIComponent(messageInput.value);

  // Open WhatsApp with pre-filled message
  let url = "https://wa.me/" + number + "?text=" + message;

  // Open in new tab and focus
  window.open(url, "_blank").focus();
}