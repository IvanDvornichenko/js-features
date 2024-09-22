const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const hole1 = document.getElementById('hole1');
const hole2 = document.getElementById('hole2');
const hole3 = document.getElementById('hole3');
const hole4 = document.getElementById('hole4');
const hole5 = document.getElementById('hole5');
const hole6 = document.getElementById('hole6');
const hole7 = document.getElementById('hole7');
const hole8 = document.getElementById('hole8');
const hole9 = document.getElementById('hole9');





hole1.onclick = () => {
    if (hole1.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")  
        dead.textContent = 0
        lost.textContent = 0   
    }
}

hole2.onclick = () => {
    if (hole2.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")  
        dead.textContent = 0
        lost.textContent = 0   
    }
}

hole3.onclick = () => {
    if (hole3.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")   
        dead.textContent = 0
        lost.textContent = 0  
    }
}

hole4.onclick = () => {
    if (hole4.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")   
        dead.textContent = 0
        lost.textContent = 0  
    }
}

hole5.onclick = () => {
    if (hole5.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли") 
        dead.textContent = 0
        lost.textContent = 0    
    }
}

hole6.onclick = () => {
    if (hole6.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")   
        dead.textContent = 0
        lost.textContent = 0  
    }
}

hole7.onclick = () => {
    if (hole7.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")   
        dead.textContent = 0
        lost.textContent = 0  
    }
}

hole8.onclick = () => {
    if (hole8.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")   
        dead.textContent = 0
        lost.textContent = 0  
    }
}

hole9.onclick = () => {
    if (hole9.className.includes( 'hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) == 10) {
        alert("Вы победили")  
        dead.textContent = 0
        lost.textContent = 0  
    }
    
    if (Number(lost.textContent) == 5) {
        alert("Вы проиграли")  
         
    }
}


