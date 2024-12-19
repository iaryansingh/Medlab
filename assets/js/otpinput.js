// Otp input
const otp = document.getElementById('otp');
var uniquecode = document.querySelectorAll(".code-input");
var mykey = "0123456789".split("");

// Adding unique name and autocomplete attributes for each input
uniquecode.forEach((input, index) => {
    input.setAttribute('name', `otp_digit_${index+1}`); // Unique name for each input
    input.setAttribute('autocomplete', 'one-time-code'); // Suggest browser it's a one-time code input

    input.addEventListener("input", handle_unique_input);
    input.addEventListener("keydown", handle_backspace);
    input.addEventListener("paste", handle_paste); // Add paste event listener
    input.addEventListener("change", handle_autofill); // Detect changes for autofill
});

function handle_unique_input(event) {
    let current = event.target;
    let index = parseInt(current.classList[1].split("__")[2]);

    if (mykey.indexOf("" + event.data + "") != -1) {
        current.value = event.data; 
        var next = current.nextElementSibling;
        if (next && index < uniquecode.length) {
            next.focus(); 
        }
    }

    // Collect the values from all inputs to form the full OTP
    collect_otp();
}

function handle_backspace(event) {
    let current = event.target;
    if (event.key === "Backspace" && current.value === "") {
        var prev = current.previousElementSibling;
        if (prev) {
            prev.focus(); // Move to the previous input
        }
    }
}

// Handle paste event for auto-fill or manual paste
function handle_paste(event) {
    event.preventDefault(); // Prevent the default paste behavior
    let pasteData = (event.clipboardData || window.clipboardData).getData('text'); // Get the pasted data

    // Make sure the pasted data is a 4-digit number (since it's OTP)
    if (/^[0-9]{4}$/.test(pasteData)) {
        // Distribute the pasted data across the input fields
        uniquecode.forEach((input, i) => {
            input.value = pasteData[i] || ""; // Assign each digit to the respective input
        });
        // Collect the values from all inputs to form the full OTP
        collect_otp();
    }
}

// Handle autofill by splitting the filled OTP across the input fields
function handle_autofill(event) {
    const current = event.target;
    if (current.value.length > 1) {
        // Distribute the autofilled OTP across the input fields
        let autofilledData = current.value.trim();
        if (/^[0-9]{4}$/.test(autofilledData)) {
            uniquecode.forEach((input, i) => {
                input.value = autofilledData[i] || "";
            });
        }
        collect_otp(); // Ensure hidden OTP field is updated
    }
}

// Collect the OTP from all the inputs and set it to the hidden input
function collect_otp() {
    var codeInput = "";
    uniquecode.forEach(input => {
        codeInput += input.value;
    });
    otp.value = codeInput; // Set the hidden field value
}