function login(event) {
    event.preventDefault();  // Prevent form submission

    // Retrieve username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the credentials are valid (for now, we're using hardcoded values)
    if (username === "user" && password === "password") {
        // Hide login and show main content
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

function callAirHostess() {
    alert("Air hostess has been notified.");
}

function orderFood() {
    const foodChoice = document.getElementById('food').value;
    alert(`You have ordered: ${foodChoice}`);
}

function makeCall() {
    alert("Direct call initiated.");
}

function requestSeatExchange() {
    alert("Seat exchange requested.");
}

function notifyMedicalAssistance() {
    alert("Medical assistance has been notified.");
}

function checkFlightStatus() {
    document.getElementById('flight-status-message').textContent = "Flight is on time.";
}

function viewEntertainment() {
    document.getElementById('entertainment-options').classList.toggle('hidden');
}
