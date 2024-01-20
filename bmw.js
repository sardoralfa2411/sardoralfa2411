function submitForm() {
    // Bu joyda foydalanuvchi ma'lumotlarini yuborish logikasi bo'ladi
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Bu yerdan foydalanuvchi ma'lumotlarini ishlab chiqish mumkin
    console.log('Ism va Familiya: ' + fullName);
    console.log('Email: ' + email);
    console.log('Parol: ' + password);
}
