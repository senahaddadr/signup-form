function checkPassword() {
    password1 = document.querySelector('#password').value;
    password2 = document.querySelector('#confirm-password').value;

    if (password1 == '')
        alert ("Please enter Password");
            
    else if (password2 == '')
        alert ("Please confirm your password");
            
    else if (password1 != password2) {
        alert ("Passwords did not match, please try again.")
        return false;
    }

    else{
        alert("Password accepted: Say goodbye to your boat!")
        return true;
    }
    alert(password2)
}

const confirmButton =  document.querySelector(".button")

confirmButton.addEventListener('click', () => checkPassword())