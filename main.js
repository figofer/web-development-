const header = document.querySelector("header");

function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.addEventListener("scroll", handleScroll);


// Jawaban untuk nomor 6
function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    };
}

//  7
function isNumber(str) {
    return !isNaN(str);
}

//  8
function checkboxIsChecked() {
    const status = document.getElementById('status');
    return status.checked;
}

// 9
function validateFormData(data) {
    if (!data) {
        return false;
    }

    if (!isNumber(data.zipCode)) {
        return false;
    }

    if (!checkboxIsChecked()) {
        return false;
    }

    return true;
}

//  10

function submit() {
    event.preventDefault()
    const data = handleGetFormData();
    const isValid = validateFormData(data);
    const warning = document.getElementById('warning');

    if (!isValid) {
        warning.textContent = 'Periksa form anda sekali lagi';
    } else {
        warning.textContent = '';
        
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', submit);