document.querySelector("button[type='submit']").addEventListener("click", (event) => {
  event.preventDefault();

  let username = document.getElementById('username').value.trim();
  let password = document.getElementById('password').value.trim();
  let error = document.getElementById('error') || document.createElement('div');

  let users = JSON.parse(localStorage.getItem('users')) || [];

  let existingUser = users.find(user => user.username === username && user.password === password);

  if (!existingUser) {
    error.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
    error.className = "text-danger mb-3";
    document.querySelector(".card-body").prepend(error);
    return;
  }

  localStorage.setItem('isLogin', JSON.stringify({ username: existingUser.username, username: existingUser.username }));

  window.location.href = "products.html";
});

