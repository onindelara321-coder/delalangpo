// MOBILE MENU
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Remove old error styles
  name.classList.remove("error");
  email.classList.remove("error");
  subject.classList.remove("error");
  message.classList.remove("error");

  // Validation
  if(name.value.trim() === ""){
    alert("Please enter your name.");
    name.classList.add("error");
    name.focus();
    return;
  }

  if(email.value.trim() === ""){
    alert("Please enter your email.");
    email.classList.add("error");
    email.focus();
    return;
  }

  if(subject.value.trim() === ""){
    alert("Please enter a subject.");
    subject.classList.add("error");
    subject.focus();
    return;
  }

  if(message.value.trim() === ""){
    alert("Please enter your message.");
    message.classList.add("error");
    message.focus();
    return;
  }

  // Success message
  alert("Message sent successfully!");

  // Clear form
  form.reset();
});