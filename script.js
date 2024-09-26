document.getElementById("donationForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the name and amount from the form
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const upiId = "6309814215@ptyes"; // Replace with your UPI ID
    const transactionNote = "Donation"; // Transaction note
    const currency = "INR"; // Currency

    // UPI deep link for PhonePe or other UPI apps
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&tn=${transactionNote}&am=${amount}&cu=${currency}`;

    // Save the name and amount to local storage
    localStorage.setItem("donorName", name);
    localStorage.setItem("donationAmount", amount);

    // Redirect user to UPI app for donation
    window.location.href = upiUrl;

    // Optional: Update the UI to show a message
    document.getElementById("message").innerText = "Redirecting to PhonePe for payment...";
};
