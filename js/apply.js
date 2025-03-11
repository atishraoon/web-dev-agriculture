document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.querySelector('input[type="email"]').value.trim();
    let phone = document.querySelectorAll('input[type="text"]')[0].value.trim();
    let fullName = document.querySelectorAll('input[type="text"]')[1].value.trim();
    let fatherName = document.querySelectorAll('input[type="text"]')[2].value.trim();
    let motherName = document.querySelectorAll('input[type="text"]')[3].value.trim();
    let address = document.querySelector('#inputAddress').value.trim();
    let city = document.querySelector('#inputCity').value.trim();
    let state = document.querySelectorAll('input[type="text"]')[4].value.trim();
    let zip = document.querySelector('#inputZip').value.trim();
    let accountNumber = document.querySelectorAll('input[type="text"]')[5].value.trim();

    if (!email || !phone || !fullName || !fatherName || !motherName || !address || !city || !state || !zip || !accountNumber) {
        alert("Error: All fields must be filled out!");
        return;
    }

    alert("Success: Form submitted successfully!");
    document.getElementById("myForm").reset(); // Clear form after submission
});
