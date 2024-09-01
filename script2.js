let signupbtn = document.querySelector(".signupbtn");
let errormsg = document.querySelector(".errormsg");

signupbtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    // Clear any previous error messages
    errormsg.innerHTML = '';

    let signupemail = document.querySelector(".input2").value;
    let signuppass = document.querySelector(".input3").value;

    // Improved email regex to match most valid emails
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(signupemail) || signupemail === "") {
        displayError("Please enter a valid email that includes @ and a valid domain.");
        return;
    }

    if (signuppass.length < 8) {
        displayError("Password must contain at least 8 characters.");
        return;
    }

    let upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(signuppass)) {
        displayError("Password must contain at least 1 uppercase letter.");
        return;
    }

    // Proceed with storing the user
    let users = JSON.parse(localStorage.getItem("values")) || [];
    if (users.some(user => user.email === signupemail)) {
        alert("Email already exists. Please log in.");
        return;
    }

    users.push({ email: signupemail, passward: signuppass });
    localStorage.setItem("values", JSON.stringify(users));

    // Notify success
    let c = document.createElement("div");
    c.innerHTML = `
        <div class="acc">
            Account Created Successfully
        </div>
    `;
    let successfully = document.querySelector(".successfully");
    successfully.innerHTML = '';  // Clear previous success messages
    successfully.append(c);

    signupbtn.disabled = true;
    signupbtn.style.opacity = 0.5;

    setTimeout(() => {
        window.location.href = "index.html"; // Redirect to sign-in page
    }, 2000);
});

function displayError(message) {
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML = `
        <div class="msg">
            <p class="emailMsg">${message}</p>
        </div>`;
    errormsg.innerHTML = '';  // Clear previous error messages
    errormsg.append(errorDiv);
}
