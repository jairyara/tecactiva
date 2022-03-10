const matchPassword = () => {
    let firstPasswd = document.getElementById('password');
    let secondPasswd = document.getElementById('confirmPassword');


    if (firstPasswd.value != secondPasswd.value) {
        alert('No coinciden');
    }
}