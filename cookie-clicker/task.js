const clicker = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = () => {
    clicker.textContent = Number(clicker.textContent) + 1;
    if (Number(clicker.textContent) % 2) {
        cookie.width += 40;
        cookie.height += 40;
    } else {
        cookie.width -= 40;
        cookie.height -= 40;
    }
}