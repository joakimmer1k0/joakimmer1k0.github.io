
function showAlert() {
    var usernameInputt = document.getElementById('INPUTusername');
    var passwordInputt = document.getElementById('INPUTcomment');
    var usernameInput = document.getElementById('INPUTusername').value.trim();
    var passwordInput = document.getElementById('INPUTcomment').value.trim();var clickCount = 0;

    if (passwordInput !== '' && usernameInput !== '') {
        alert("Your user review was sent, please wait for staff to check and add it!\nPlease don't spam or we cant add your comment!\n\n FOR SUPPORT JOIN TO DISCORD");
        usernameInputt.value = '';
        passwordInputt.value = '';
    } else {
        alert("Please fill in both username and comment!");
    }
}

function openPopup() {
    document.getElementById('iosPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('iosPopup').style.display = 'none';
}

function openPopupA() {
    document.getElementById('androidPopup').style.display = 'block';
}

function closePopupA() {
    document.getElementById('androidPopup').style.display = 'none';
}

function openPopupP() {
    document.getElementById('pcPopup').style.display = 'block';
}

function closePopupP() {
    document.getElementById('pcPopup').style.display = 'none';
}

document.getElementById("textToCopy").addEventListener("click", function() {
    copyToClipboard();
});

function copyToClipboard() {
    // Get the text to copy
    var textToCopy = document.getElementById("textToCopy");

    // Create a temporary textarea element
    var textarea = document.createElement("textarea");
    textarea.value = textToCopy.innerText;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // You can provide visual feedback or a notification here
    alert("Text copied to clipboard: " + textToCopy.innerText);
}