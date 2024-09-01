// made own database and push into local storage
let database = [
    { email: "daniyaltallat0@gmail.com", passward: "1234" },
    { email: "asdf@gmail.com", passward: "2222" },
    { email: "asdfg@gmail.com", passward: "2222" },
    { email: "asdfgh@gmail.com", passward: "3333" },
    { email: "asdfghj@gmail.com", passward: "4444" }
]
let array=JSON.parse(localStorage.getItem("values")) || [];
array.push(database);
localStorage.setItem("values", JSON.stringify(array))
// --------------------------------------------------------------------------------------------------

// these containers are selected to append invalid msg boxes
let input_container_1 = document.querySelector(".input_container_1");
let input_container_2 = document.querySelector(".input_container_2");
let invalidmsgbox = document.querySelector(".invalidmsgbox");
let invalidmsgbox2 = document.querySelector(".invalidmsgbox2");

let a = document.createElement("div");
a.innerHTML = `<div class="msg">
<p class="emailMsg">email not found. Please Sign up first</p>
</div>`;

let b = document.createElement("div");
b.innerHTML = `<div class="msg">
<p class="emailMsg">Wrong Password</p>
</div>`;
// ----------------------------------------------------------------------------------------------------


// when user click on signin get data from email input box and passward input box
// Then take out data from local storage & store in array 
//apply find method of array to check email exists in database
let signin = document.querySelector(".sign-in");


signin.addEventListener("click", (event) => {
    let email = document.querySelector(".email").value; 
    let pass = document.querySelector(".pass").value;
   
    event.preventDefault();

    // Retrieve the users array from local storage
    let users = JSON.parse(localStorage.getItem("values")) || [];

    // Flatten the nested array (since we might have nested arrays in values)
    users = users.flat();

    // Find the user by email
    let userfound = users.find(user => user.email === email);

    if (userfound) {
        // Check if the password matches
        if (userfound.passward === pass) {
            window.location.href = "index2.html"; // Success, redirect to the next page
        } else {
            // Wrong password
            invalidmsgbox2.append(b);
            removemsg2();
        }
    } else {
        // Email not found
        invalidmsgbox.append(a);
        removemsg1();
    }
});



let removemsg1 = ()=>{
    input_container_1.addEventListener("click", ()=>{
        a.remove();
    })
};

let removemsg2=()=>{
input_container_2.addEventListener("click",()=>{
    b.remove();
})
};

let signup = document.querySelector(".sign-in_apl");

signup.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "signup.html";
});