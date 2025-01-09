// Validasi form masuk
function validateLoginForm(event) {
  event.preventDefault(); // Mencegah pengiriman form default
  const username = document.querySelector('#login-username').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (!username || !password) {
    alert('Username dan password harus diisi!');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    
    localStorage.setItem('isLoggedIn', 'true'); // Tandai pengguna sebagai login
    window.location.href = '../index.html'; // Arahkan ke halaman home
  } else {
    alert('Username atau password salah!');
  }
}

// Validasi form daftar
function validateRegisterForm(event) {
  event.preventDefault(); // Mencegah pengiriman form default
  const username = document.querySelector('#register-username').value.trim();
  const password = document.querySelector('#register-password').value.trim();
  const confirmPassword = document.querySelector('#register-confirm-password').value.trim();

  if (!username || !password || !confirmPassword) {
    alert('Semua bidang harus diisi!');
    return;
  }

  if (password !== confirmPassword) {
    alert('Password dan konfirmasi password tidak cocok!');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    alert('Username sudah terdaftar! Silakan gunakan username lain.');
    return;
  }

  // Simpan pengguna baru ke Local Storage
  saveUserToLocalStorage(username, password);
  alert('Pendaftaran berhasil! Anda dapat masuk sekarang.');
}

// Fungsi untuk menyimpan pengguna baru ke Local Storage  