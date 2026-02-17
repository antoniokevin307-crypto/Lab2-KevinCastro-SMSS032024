// 1. Evento 'click': Cambia el texto al hacer un click normal
document.getElementById('box1').addEventListener('click', function () {
    const originalText = '(Click)';
    const originalColor = '#b2dfdb'; // Teal claro original
    const p = this.querySelector('p');

    p.textContent = '¡Hiciste un click!';
    this.style.backgroundColor = '#80cbc4';

    setTimeout(() => {
        p.textContent = originalText;
        this.style.backgroundColor = originalColor;
    }, 2000);
});

// 2. Evento 'dblclick': Cambia el color al hacer doble click
document.getElementById('box2').addEventListener('dblclick', function () {
    const originalText = '(Doble Click)';
    const originalColor = '#fff9c4'; // Amarillo claro original
    const p = this.querySelector('p');

    p.textContent = '¡Doble click detectado!';
    this.style.backgroundColor = '#fff59d';

    setTimeout(() => {
        p.textContent = originalText;
        this.style.backgroundColor = originalColor;
    }, 2000);
});

// 3. Evento 'mouseover': Aumenta el tamaño cuando el cursor entra
const box3 = document.getElementById('box3');
box3.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.05)';
    this.querySelector('p').textContent = 'Cursor encima';
});
// Reset para Box 3
box3.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
    this.querySelector('p').textContent = '(Mouse Over)';
});


// 4. Evento 'mouseout': Cambia el texto cuando el cursor sale de la caja
const box4 = document.getElementById('box4');
box4.addEventListener('mouseout', function () {
    this.querySelector('h3').textContent = '¡REGRESA!';
    this.querySelector('p').textContent = 'El cursor salió';
});
// Reset para Box 4
box4.addEventListener('mouseover', function () {
    this.querySelector('h3').textContent = 'EVENTO AQUÍ';
    this.querySelector('p').textContent = '(Mouse Out)';
});

// 5. Evento 'contextmenu': Bloquea el menú de click derecho y lanza alerta
document.getElementById('box5').addEventListener('contextmenu', function (evento) {
    evento.preventDefault(); // Evita que salga el menú por defecto del navegador
    const p = this.querySelector('p');
    const originalText = '(Click Derecho)';

    p.textContent = 'Menú bloqueado';
    alert('Has presionado click derecho (contextmenu)');

    setTimeout(() => {
        p.textContent = originalText;
    }, 2000);
});

// 6. Evento 'mousedown': Pone un borde mientras se mantiene presionado el botón del ratón
const box6 = document.getElementById('box6');
box6.addEventListener('mousedown', function () {
    this.style.border = '2px solid red';
    this.querySelector('p').textContent = 'Botón presionado';
});
// Reset para Box 6
function resetBox6() {
    box6.style.border = '2px solid transparent';
    box6.querySelector('p').textContent = '(Mouse Down)';
}
box6.addEventListener('mouseup', resetBox6);
box6.addEventListener('mouseleave', resetBox6);

// 7. Evento 'mouseup': Quita el borde cuando se suelta el botón del ratón
// Nota: Para que este evento tenga sentido visualmente por sí solo, 
// a veces se combina con mousedown, pero aquí lo tratamos como "al soltar".
document.getElementById('box7').addEventListener('mouseup', function () {
    this.style.border = '2px solid green';
    this.querySelector('p').textContent = 'Botón soltado';

    setTimeout(() => {
        this.style.border = '2px solid transparent';
        this.querySelector('p').textContent = '(Mouse Up)';
    }, 2000);
});

// 8. Evento 'mousemove': Muestra las coordenadas del ratón dentro de la caja
const box8 = document.getElementById('box8');
box8.addEventListener('mousemove', function (evento) {
    this.querySelector('p').textContent = `Coordenadas: X=${evento.offsetX}, Y=${evento.offsetY}`;
});
// Reset para Box 8
box8.addEventListener('mouseleave', function () {
    this.querySelector('p').textContent = '(Mouse Move)';
});