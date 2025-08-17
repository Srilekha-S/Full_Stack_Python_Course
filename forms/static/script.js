function validateForm(){
    let name = document.forms[0].name.value;
    let email = document.forms[0].email.value;
    let message = document.forms[0].message.value;

    if (!name || !email || !message) {
        alert("All fields are required.");
        return false;
    }
    return true
}