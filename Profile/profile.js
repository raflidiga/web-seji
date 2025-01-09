// Fungsi untuk mengedit profil
function editProfile() {
    let namaBaru = prompt("Masukkan nama baru:", document.getElementById('nama').innerText);
    let umurBaru = prompt("Masukkan umur baru:", document.getElementById('umur').innerText);

    if (namaBaru !== null && umurBaru !== null) {
        document.getElementById('nama').innerText = namaBaru;
        document.getElementById('umur').innerText = umurBaru;
        alert("Profil berhasil diperbarui!");
    }
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const authButton = document.getElementById('auth-button');

if (isLoggedIn) {
  authButton.textContent = 'Logout';
  authButton.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'false'); // Logout pengguna
    window.location.href = 'Login/Masuk.html'; // Kembali ke halaman login
  });z
} else {
  authButton.textContent = 'Masuk';
  authButton.addEventListener('click', () => {
    window.location.href = 'Login/Masuk.html'; // Arahkan ke halaman login
  });
}
}
