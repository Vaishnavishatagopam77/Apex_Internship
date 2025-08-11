document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMsg = document.getElementById("formMsg");

    if (!name || !email || !message) {
        formMsg.textContent = "Please fill all fields.";
        formMsg.style.color = "red";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMsg.textContent = "Invalid email address.";
        formMsg.style.color = "red";
        return;
    }

    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "green";
    this.reset();
});
