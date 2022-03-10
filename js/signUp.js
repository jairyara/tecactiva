let currentTab = 0; 

const showTab = (n) => {
  
  let step = document.getElementsByClassName("step");
  step[n].style.display = "flex";

  if (n == 0) {
    document.getElementById("prev-btn").style.display = "none";
  } else {
    document.getElementById("prev-btn").style.display = "inline";
  }
  if (n == (step.length - 1)) {
    document.getElementById("next-btn").innerHTML = "Enviar";
  } else {
    document.getElementById("next-btn").innerHTML = "Siguiente";
  }
  fixStepIndicator(n);
}

const nextPrev = (n) => {
  let step = document.getElementsByClassName("step");
  if (n == 1 && !validateForm()) return false;
  step[currentTab].style.display = "none";
  currentTab = currentTab + n;
  let buttons = document.getElementById('buttons');
  let msg = document.getElementById('msg');
  if (currentTab >= step.length) {
    document.getElementById("signUp").submit();
    buttons.classList.add('disabled');
    msg.classList.add('msg-active');
    return false;
  }
  showTab(currentTab);
}

const validateForm = () => {
  let x, y, i, valid = true;
  let firstPasswd = document.getElementById('password');
  let secondPasswd = document.getElementById('confirmPassword');
  x = document.getElementsByClassName("step");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  if (firstPasswd.value != secondPasswd.value) {
      alert('No coinciden las contraseñas')
      valid = false;
    }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

const fixStepIndicator = (n) => {
    let i, x = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace("active", "");
    }
    x[n].className += " active";
  }

showTab(currentTab); 
