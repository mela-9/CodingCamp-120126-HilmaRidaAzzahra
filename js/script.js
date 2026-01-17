// 1. Prompt Nama saat Refresh
window.onload = function() {
    let userName = prompt("Halo! Siapa nama Anda?");
    if (userName === "" || userName === null) {
        userName = "Customer";
    }
    document.getElementById("welcome-title").innerText = "Hi " + userName + ", Welcome To Doughy Delight";
};

// 2. Logika Form Pemesanan & Validasi
const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil Data
    const name = document.getElementById('name-input').value;
    const date = document.getElementById('date-input').value;
    const genderElem = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('msg-input').value;
    const time = new Date().toLocaleString();

    // Validasi Dasar
    if (!genderElem) {
        alert("Mohon pilih jenis kelamin.");
        return;
    }

    const gender = genderElem.value;

    // Tampilkan ke Result Box
    document.getElementById('res-name').innerText = name;
    document.getElementById('res-date').innerText = date;
    document.getElementById('res-gender').innerText = gender;
    document.getElementById('res-msg').innerText = message ? message : "-";
    document.getElementById('current-time').innerText = time;

    alert("Pesanan atas nama " + name + " berhasil dikirim!");
});