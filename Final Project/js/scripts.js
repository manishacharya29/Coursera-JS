document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can implement logic to send the form data to your server if needed

    document.getElementById('formMessage').innerText = `Thank you, ${name}! Your message has been sent.`;
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
