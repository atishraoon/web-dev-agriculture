document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let email = document.getElementById("exampleFormControlInput1").value.trim();
    let phone = document.getElementsByTagName("input")[1].value.trim();
    let fullName = document.getElementsByTagName("input")[2].value.trim();
    let textarea = document.getElementById("exampleFormControlTextarea1").value.trim();
    
    if (!email || !phone || !fullName || !textarea) {
        alert("Error: All fields must be filled out!");
        return;
    }
    
    alert("Success: Form submitted successfully!");
    document.getElementById("myForm").reset(); // Clear form after submission
});
