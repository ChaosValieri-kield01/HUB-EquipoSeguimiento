/* --- NAVEGACIÓN Y COLAPSO DE MENÚ --- */
let isSplitMode = false;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.getElementById('toggle-icon');
    
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        toggleIcon.innerText = "menu"; 
    } else {
        toggleIcon.innerText = "menu_open"; 
    }
}

/* --- LÓGICA DEL MODO MULTIPANTALLA --- */
function toggleSplitMode() {
    isSplitMode = !isSplitMode;
    const container = document.getElementById('views-container');
    const btnSplit = document.getElementById('btn-split');

    if(isSplitMode) {
        container.classList.add('split-mode');
        btnSplit.innerHTML = '<span class="material-symbols-outlined">splitscreen</span> Modo Multipantalla: ON';
        btnSplit.classList.add('active');
    } else {
        container.classList.remove('split-mode');
        btnSplit.innerHTML = '<span class="material-symbols-outlined">splitscreen</span> Modo Multipantalla: OFF';
        btnSplit.classList.remove('active');
        resetViews(); // Si se apaga, volvemos a la normalidad automáticamente
    }
}

function abrirPestana(evt, nombrePestana) {
    let btn = evt.currentTarget;
    let target = document.getElementById(nombrePestana);

    if (!isSplitMode) {
        // MODO NORMAL: Apaga todas las ventanas y botones, enciende solo la seleccionada
        document.querySelectorAll(".tabcontent").forEach(el => el.classList.remove("active-tab"));
        document.querySelectorAll(".sidebar .tablinks").forEach(el => el.classList.remove("active"));
        
        target.classList.add("active-tab");
        btn.classList.add("active");
    } else {
        // MODO DIVIDIDO: Activa/Desactiva ventanas individuales sin cerrar las demás
        target.classList.toggle("active-tab");
        btn.classList.toggle("active");
    }
}

function resetViews() {
    // Apaga modo dividido
    isSplitMode = false;
    document.getElementById('views-container').classList.remove('split-mode');
    
    const btnSplit = document.getElementById('btn-split');
    btnSplit.innerHTML = '<span class="material-symbols-outlined">splitscreen</span> Modo Multipantalla: OFF';
    btnSplit.classList.remove('active');

    // Oculta todas las ventanas
    document.querySelectorAll(".tabcontent").forEach(el => el.classList.remove("active-tab"));
    document.querySelectorAll(".sidebar .tablinks").forEach(el => el.classList.remove("active"));

    // Deja solo Priorizaciones abierta por defecto como "Home"
    document.getElementById('SP_Priorizaciones').classList.add("active-tab");
    document.querySelector('[onclick="abrirPestana(event, \'SP_Priorizaciones\')"]').classList.add("active");
}

/* --- LÓGICA DE COPIADO INTELIGENTE --- */
function copiarMensaje(cardElement, index) {
    const textoACopiar = document.getElementById(`msg-${index}`).innerText;

    navigator.clipboard.writeText(textoACopiar).then(() => {
        cardElement.classList.add('copied');
        const boton = cardElement.querySelector('.btn-copy');
        const textoOriginalBoton = boton.innerText;
        boton.innerText = "¡Copiado ✓!";

        setTimeout(() => {
            cardElement.classList.remove('copied');
            boton.innerText = textoOriginalBoton;
        }, 2500);
    }).catch(err => console.error('Error al copiar: ', err));
}

/* --- LÓGICA DEL CORGI ASISTENTE 🐶 --- */
const pupils = document.querySelectorAll('.pupil');
let isMoving = false;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(moverOjos);
    }
});

function moverOjos() {
    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = 4; 
        
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
    isMoving = false;
}

// Recuerda tener tu archivo "ladrido.mp3" en la misma carpeta
const sonidoLadrido = new Audio('ladrido.mp3');

const consejosCorgi = [
    "¡Guau! Recuerda monitorear siempre el grupo de despachos críticos.",
    "¿Ya revisaste los folios que faltan por levantar hoy?",
    "Ojo con las detenciones, ¡que no se te pase ninguna!",
    "Si un folio no está informado a transporte, ¡levanta la alerta!",
    "¡Revisa que los datos del SP estén correctos!.",
    "Ojo con Leo, jefe del Equipo de Seguimiento 😉."
];

const corgiContainer = document.getElementById('corgi-container');
const corgiSpeech = document.getElementById('corgi-speech');
let timeoutBurbuja;

corgiContainer.addEventListener('click', () => {
    sonidoLadrido.currentTime = 0; 
    sonidoLadrido.play().catch(() => console.log('Audio bloqueado o archivo no encontrado.'));

    const consejoAleatorio = consejosCorgi[Math.floor(Math.random() * consejosCorgi.length)];
    corgiSpeech.innerText = consejoAleatorio;
    corgiSpeech.classList.remove('oculto');
    
    clearTimeout(timeoutBurbuja);
    timeoutBurbuja = setTimeout(() => {
        corgiSpeech.classList.add('oculto');
    }, 5500);
});