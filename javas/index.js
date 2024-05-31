

    // function login() {
    //     const accountType = document.getElementById("account-type").value;
    //     const username = document.getElementById("username").value;
    //     const password = document.getElementById("password").value;

    //     // Perform login logic based on account type, username, and password
    //     // Redirect to the appropriate dashboard page
    //     if (accountType === "user") {
    //         window.location.href = "MARSHAI/user_dashboard.html";
    //     } else if (accountType === "admin") {
    //         window.location.href = "MARSHAI/admin_dashboard.html";
    //     } else {
    //         window.location.href = "MARSHAI/guest_dashboard.html";
    //     }
    // }
    

    // const collegeSelect = document.getElementById('college-select');
    // const submitBtn = document.getElementById('submit-btn');
    // const loginBox = document.getElementById('login-box');
    // const container = document.querySelector('.container');
    
    // collegeSelect.addEventListener('change', (e) => {
    //     if (e.target.value) {
    //         loginBox.classList.remove('hidden');
    //         container.removeChild(collegeSelect);
    //         container.removeChild(submitBtn);
    //     } else {
    //         loginBox.classList.add('hidden');
    //     }
    // });
    
    // submitBtn.addEventListener('click', () => {
    //     // Handle form submission here
    // });
    // function validateLogin() 
    // addEventListener("submit",function(e){
    //     // Get the selected account type and user input
    //     e.preventDefault()
    //     const accountType = document.getElementById("account-type").value;
    //     const username = document.getElementById("username").value;
    //     const password = document.getElementById("password").value;
    
    //     // Set the valid username and password for each account type
    //     const user = { username: "user", password: "password" };
    //     const admin = { username: "admin", password: "admin" };
    //     const guest = { username: "guest", password: "guest" };
    
    //     // Validate the user input based on the selected account type
    //     if (accountType === "user" && username === user.username && password === user.password) {
    //         // Redirect to the user dashboard
    //         window.location.href = "user-dashboard.html";
    //     } else if (accountType === "admin" && username === admin.username && password === admin.password) {
    //         // Redirect to the admin dashboard
    //         window.location.href = "admin-dashboard.html";
    //     } else if (accountType === "guest" && username === guest.username && password === guest.password) {
    //         // Redirect to the guest dashboard
    //         window.location.href = "guest-dashboard.html";
    //     } else {
    //         // Display an error message
    //         alert("Invalid username or password");
    //     }
    // }
    document.getElementById("login-form").addEventListener("submit", function(e){
        // Get the selected account type and user input
        e.preventDefault()
        const accountType = document.getElementById("account-type").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        // Set the valid username and password for each account type
        const user = { username: "user", password: "password" };
        const admin = { username: "admin", password: "admin" };
        const guest = { username: "guest", password: "guest" };
    
        // Validate the user input based on the selected account type
        if (accountType === "user" && username === user.username && password === user.password) {
            // Redirect to the user dashboard
            window.location.href = "user-dashboard.html";
        } else if (accountType === "admin" && username === admin.username && password === admin.password) {
            // Redirect to the admin dashboard
            window.location.href = "admin-dashboard.html";
        } else if (accountType === "guest" && username === guest.username && password === guest.password) {
            // Redirect to the guest dashboard
            window.location.href = "guest-dashboard.html";
        } else {
            // Display an error message
            alert("Invalid username or password");
        }
    });