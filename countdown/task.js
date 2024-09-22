const p = document.getElementById('timer')
let timer = setInterval(() => {p.textContent = Number(p.textContent) - 1}, 1000);
setTimeout(() => {clearInterval(timer); alert('Вы победили в конкурсе!'); }, Number(p.textContent) * 1000);
