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

// Jawaban untuk nomor 7
function isNumber(str) {
    return !isNaN(str);
}

// Jawaban untuk nomor 8
function checkboxIsChecked() {
    const status = document.getElementById('status');
    return status.checked;
}

// Jawaban untuk nomor 9
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

// Jawaban untuk nomor 10
function submit(event) {
    event.preventDefault();

    const data = handleGetFormData();
    const isValid = validateFormData(data);

    const warning = document.getElementById('warning');

    if (!isValid) {
        warning.textContent = 'Periksa form anda sekali lagi';
    } else {
        warning.textContent = '';
        // Lakukan proses submit form disini
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', submit);