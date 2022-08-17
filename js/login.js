// Step-1: Add click event Handler button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email)
    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password)

    if (email === 'bakir.moral@gmail.com' && password === "mib@sky24j@n") {
        window.location.href = "bank.html"
    }
    else {
        alert("Tui r ashbi na amr bashay")
    }

})

