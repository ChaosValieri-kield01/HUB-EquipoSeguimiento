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
        resetViews();
    }
}

function abrirPestana(evt, nombrePestana) {
    let btn = evt.currentTarget;
    let target = document.getElementById(nombrePestana);

    if (!isSplitMode) {
        document.querySelectorAll(".tabcontent").forEach(el => el.classList.remove("active-tab"));
        document.querySelectorAll(".sidebar .tablinks").forEach(el => el.classList.remove("active"));
        target.classList.add("active-tab");
        btn.classList.add("active");
    } else {
        target.classList.toggle("active-tab");
        btn.classList.toggle("active");
    }
}

function resetViews() {
    isSplitMode = false;
    document.getElementById('views-container').classList.remove('split-mode');
    
    const btnSplit = document.getElementById('btn-split');
    btnSplit.innerHTML = '<span class="material-symbols-outlined">splitscreen</span> Modo Multipantalla: OFF';
    btnSplit.classList.remove('active');

    document.querySelectorAll(".tabcontent").forEach(el => el.classList.remove("active-tab"));
    document.querySelectorAll(".sidebar .tablinks").forEach(el => el.classList.remove("active"));

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

/* --- LÓGICA DE LA MASCOTA VIRTUAL PRO (IMÁGENES .PNG) 🐾 --- */
const petContainer = document.getElementById('pet-container');
const petSpeech = document.getElementById('pet-speech');

// Estado de la mascota (Empezamos con Corgi)
let mascotaActual = 'corgi';
let saludoInicial = "¡Guau! ";
let audioActual = new Audio('ladrido.mp3'); 
audioActual.volume = 0.2; // Volumen al 20% corporativo

// Función para cambiar de mascota desde el selector
function cambiarMascota() {
    const selector = document.getElementById('pet-selector');
    mascotaActual = selector.value;
    
    // Limpiamos las clases de tema y aplicamos la nueva (esto dispara el CSS show/hide)
    petContainer.className = '';
    petContainer.classList.add('theme-' + mascotaActual);

    // Cambiar saludo y cargar el sonido correspondiente (si existe localmente)
    switch(mascotaActual) {
        case 'corgi':
            saludoInicial = "¡Guau! ";
            audioActual = new Audio('ladrido.mp3');
            break;
        case 'cat':
            saludoInicial = "¡Miau! ";
            audioActual = new Audio('miau.mp3'); // Requiere archivo local
            break;
        case 'panda':
            saludoInicial = "¡Grrr! (Comiendo bambú) ";
            audioActual = new Audio('panda.mp3'); // Requiere archivo local
            break;
        case 'fox':
            saludoInicial = "¡Ring-ding-ding! ";
            audioActual = new Audio('zorro.mp3'); // Requiere archivo local
            break;
        case 'lion':
            saludoInicial = "¡Roar Operativo! ";
            audioActual = new Audio('rugido.mp3'); // Requiere archivo local (El rugido Pro)
            break;
    }
    audioActual.volume = 0.2; // Mantener volumen corporativo bajo
}

// Lógica de Arrastrar y Soltar (Mantenemos tu función operativa para que no tape celdas)
let timeoutBurbuja;
let isDraggingPet = false;
let wasDragged = false;
let startDragX, startDragY;
let offsetX, offsetY;

petContainer.addEventListener('mousedown', (e) => {
    isDraggingPet = true;
    wasDragged = false;
    startDragX = e.clientX;
    startDragY = e.clientY;

    const rect = petContainer.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
});

document.addEventListener('mousemove', (e) => {
    if (!isDraggingPet) return;

    if (Math.abs(e.clientX - startDragX) > 5 || Math.abs(e.clientY - startDragY) > 5) {
        wasDragged = true;
    }

    if (wasDragged) {
        petContainer.style.right = 'auto';
        petContainer.style.bottom = 'auto';
        petContainer.style.left = `${e.clientX - offsetX}px`;
        petContainer.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDraggingPet = false;
});

// Consejos Operativos del Jefe Leo 😉
const consejosMascota = [
    "Recuerda monitorear siempre el grupo de despachos críticos.",
    "¿Ya revisaste los folios que faltan por levantar hoy?",
    "Ojo con las detenciones, ¡que no se te pase ninguna!",
    "Si un folio no está informado a transporte, ¡levanta la alerta!",
    "¡Revisa que los datos del SP estén correctos!.",
    "Ojo con Leo, jefe del Equipo de Seguimiento 😉."
];

petContainer.addEventListener('click', (e) => {
    if (wasDragged) {
        wasDragged = false;
        return; 
    }

    // Reproducir sonido de la mascota seleccionada (Volumen Corporativo 20%)
    audioActual.currentTime = 0; 
    audioActual.play().catch(() => console.log('Sin audio local para esta mascota. Coloca el archivo .mp3 correspondiente en la carpeta.'));

    // Generar consejo operativo con el saludo específico
    const consejoAleatorio = consejosMascota[Math.floor(Math.random() * consejosMascota.length)];
    petSpeech.innerText = saludoInicial + consejoAleatorio;
    petSpeech.classList.remove('oculto');
    
    clearTimeout(timeoutBurbuja);
    timeoutBurbuja = setTimeout(() => {
        petSpeech.classList.add('oculto');
    }, 5500);
});