function login(username, password) {
    if (username === 'admin' && password === 'p@ssword') {
        alert('Login สำเร็จ');
    } else {
        alert('Login ไม่สำเร็จ');
    }
}
let username = prompt('enter username');
let password = prompt('enter password');
//call
// login("admin","p@ssword");
login(username, password);