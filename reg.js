let but = document.getElementById("but-signup");

but.addEventListener("click", (event) => {
  event.preventDefault(); 

  let username = document.getElementById('username').value.trim();
  let password = document.getElementById('password').value.trim();
  let error = document.getElementById('error');

  if (username.length < 5) {
    error.textContent = "اسم المستخدم يجب أن يكون أكثر من 4 أحرف.";
    return;
  }


  if (password.length < 4) {
    error.textContent = "كلمة المرور يجب أن تكون أكثر من 3 أحرف.";
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  let existingUser = users.find(user => user.username === username);
  if (existingUser) {
    error.textContent = "اسم المستخدم أو البريد الإلكتروني موجود بالفعل. الرجاء اختيار بيانات أخرى.";
    return;
  }

  users.push({ username, password });

  localStorage.setItem('users', JSON.stringify(users));

  localStorage.setItem('isLogin', JSON.stringify({ username , password}));

  window.location.href = "products.html";
});