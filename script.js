/* ==========================================================================
   CONFIGURACIÓN MAESTRA DE HERRAMIENTAS Y PERFILES
   ========================================================================== */

// Pool de TODAS las extensiones disponibles en la Torre de Control
const DEFINICION_HERRAMIENTAS = {
    "Planillas Estratégicas": [
        { id: "SP_Priorizaciones", icon: "format_list_numbered", text: "Priorizaciones", call: "abrirPestana(event, 'SP_Priorizaciones')" },
        { id: "SP_CasosVIP", icon: "workspace_premium", text: "Casos VIP", call: "abrirPestana(event, 'SP_CasosVIP')" },
        { id: "SP_NoPago", icon: "warning", text: "SP No Pago (Incid.)", call: "abrirPestana(event, 'SP_NoPago')" },
        { id: "SP_Tottus", icon: "storefront", text: "Tottus - Farfana", call: "abrirPestana(event, 'SP_Tottus')" },
        { id: "SP_Ikea", icon: "inventory_2", text: "IKEA", call: "abrirPestana(event, 'SP_Ikea')" },
        { id: "SP_MantenedorIA", icon: "smart_toy", text: "Mantenedor IA", call: "abrirPestana(event, 'SP_MantenedorIA')" },
        { id: "SP_Comunicaciones", icon: "sync_alt", text: "Comunicaciones", call: "abrirPestana(event, 'SP_Comunicaciones')" },
        { id: "SP_TiendasFlujo", icon: "local_shipping", text: "Tiendas Flujo PM", call: "abrirPestana(event, 'SP_TiendasFlujo')" }
    ],
    "SimpliRoute": [
        { id: "SR_Principal", icon: "route", text: "Página Principal", call: "abrirPestana(event, 'SR_Principal')" },
        { id: "SR_Flotas", icon: "directions_car", text: "Flotas (Flotante)", call: "abrirVentanaFlotante('https://app3.simpliroute.com/settings/fleets')" },
        { id: "SR_Seguimiento", icon: "share_location", text: "Seguimiento (Flotante)", call: "abrirVentanaFlotante('https://app3.simpliroute.com/tracking/2026-05-13/vehicles?fleet=44959')" },
        { id: "SR_Extensiones", icon: "extension", text: "Extensiones (Flotante)", call: "abrirVentanaFlotante('https://app3.simpliroute.com/es/extensions')" }
    ],
    "Geosort": [
        { id: "GS_Reporte", icon: "analytics", text: "Reporte Planificación", call: "abrirPestana(event, 'GS_Reporte')" },
        { id: "GS_Seguimiento", icon: "radar", text: "Seguimiento", call: "abrirPestana(event, 'GS_Seguimiento')" },
        { id: "GS_AdminRutas", icon: "edit_road", text: "Admin Rutas", call: "abrirPestana(event, 'GS_AdminRutas')" },
        { id: "GS_PlanifSectores", icon: "map", text: "Planif. Sectores", call: "abrirPestana(event, 'GS_PlanifSectores')" }
    ],
    "Herramientas LCT": [
        { id: "LCT_AgenteIA", icon: "support_agent", text: "Agente IA - LCT", call: "abrirPestana(event, 'LCT_AgenteIA')" },
        { id: "LCT_Guias", icon: "receipt_long", text: "Guías de despacho", call: "abrirPestana(event, 'LCT_Guias')" },
        { id: "LCT_Reclamos", icon: "gavel", text: "LCT - Reclamos", call: "abrirPestana(event, 'LCT_Reclamos')" }
    ],
    "Soporte y Contactos": [
        { id: "Soporte_Contactos", icon: "contact_phone", text: "Contactos", call: "abrirPestana(event, 'Soporte_Contactos')" },
        { id: "Soporte_Consolidado", icon: "view_list", text: "Consolidado Soporte", call: "abrirPestana(event, 'Soporte_Consolidado')" }
    ],
    "Herramientas": [
        { id: "Notas_Mensajes", icon: "quickreply", text: "Plantillas Rápidas", call: "abrirPestana(event, 'Notas_Mensajes')" }
    ]
};

// Perfiles Base por si el usuario es nuevo o borró todo
const PERFILES_DEFAULT = {
    "seguimiento": {
        nombre: "Eq. Seguimiento",
        mascota: "corgi",
        config: {
            "Planillas Estratégicas": { collapsed: false, items: ["SP_Priorizaciones", "SP_CasosVIP", "SP_NoPago", "SP_Tottus", "SP_Ikea", "SP_MantenedorIA", "SP_Comunicaciones", "SP_TiendasFlujo"] },
            "SimpliRoute": { collapsed: false, items: ["SR_Principal", "SR_Flotas", "SR_Seguimiento", "SR_Extensiones"] },
            "Geosort": { collapsed: false, items: ["GS_Reporte", "GS_Seguimiento", "GS_AdminRutas", "GS_PlanifSectores"] },
            "Herramientas LCT": { collapsed: false, items: ["LCT_AgenteIA", "LCT_Guias", "LCT_Reclamos"] },
            "Soporte y Contactos": { collapsed: true, items: ["Soporte_Contactos", "Soporte_Consolidado"] },
            "Herramientas": { collapsed: false, items: ["Notas_Mensajes"] }
        }
    },
    "soporte": {
        nombre: "Eq. Soporte",
        mascota: "cat",
        config: {
            "Planillas Estratégicas": { collapsed: true, items: ["SP_CasosVIP", "SP_NoPago", "SP_MantenedorIA"] },
            "Soporte y Contactos": { collapsed: false, items: ["Soporte_Contactos", "Soporte_Consolidado"] },
            "Herramientas LCT": { collapsed: false, items: ["LCT_Reclamos", "LCT_AgenteIA"] },
            "Herramientas": { collapsed: false, items: ["Notas_Mensajes"] }
        }
    },
    "comunicaciones": {
        nombre: "Eq. Comunicaciones",
        mascota: "fox",
        config: {
            "Planillas Estratégicas": { collapsed: false, items: ["SP_Comunicaciones"] },
            "SimpliRoute": { collapsed: false, items: ["SR_Seguimiento"] },
            "Geosort": { collapsed: false, items: ["GS_Seguimiento"] },
            "Herramientas": { collapsed: false, items: ["Notas_Mensajes"] }
        }
    }
};

// Cargar desde LocalStorage (Clave V3 para la nueva estructura)
let perfilesGuardados = JSON.parse(localStorage.getItem('perfiles_hub_lof1_v3'));
if (!perfilesGuardados || Object.keys(perfilesGuardados).length === 0) {
    perfilesGuardados = JSON.parse(JSON.stringify(PERFILES_DEFAULT)); // Clon profundo
}

document.addEventListener("DOMContentLoaded", () => {
    cargarSelectorPerfiles();
    cambiarPerfil(); // Inicia renderizado visual
});

function guardarEnStorage() {
    localStorage.setItem('perfiles_hub_lof1_v3', JSON.stringify(perfilesGuardados));
}

/* ==========================================================================
   SISTEMA DE GESTIÓN DE PERFILES (CREAR, BORRAR, CAMBIAR)
   ========================================================================== */

function cargarSelectorPerfiles() {
    const selector = document.getElementById('team-profile-selector');
    const valorAnterior = selector.value;
    selector.innerHTML = '';
    
    Object.keys(perfilesGuardados).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.innerText = perfilesGuardados[key].nombre;
        selector.appendChild(option);
    });

    if(perfilesGuardados[valorAnterior]) {
        selector.value = valorAnterior;
    }
}

function crearNuevoPerfil() {
    const nombre = prompt("¿Qué nombre le pondrás a este nuevo perfil?\n(Ej: Turno Tarde, Fin de Semana, Reclamos...)");
    if (!nombre || nombre.trim() === "") return;

    const nuevoId = "perfil_" + Date.now();
    const perfilActualId = document.getElementById('team-profile-selector').value;
    
    // El nuevo perfil hereda las herramientas del perfil que tenías seleccionado
    perfilesGuardados[nuevoId] = {
        nombre: nombre.trim(),
        mascota: "corgi",
        config: JSON.parse(JSON.stringify(perfilesGuardados[perfilActualId].config))
    };

    guardarEnStorage();
    cargarSelectorPerfiles();
    document.getElementById('team-profile-selector').value = nuevoId;
    cambiarPerfil();
}

function eliminarPerfilActual() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    
    // Proteger el perfil principal
    if(perfilActualId === 'seguimiento') {
        alert("🛡️ Por seguridad operativa, el perfil 'Eq. Seguimiento' no se puede eliminar.");
        return;
    }

    if (confirm(`¿Estás completamente seguro de eliminar el perfil "${perfilesGuardados[perfilActualId].nombre}"?`)) {
        delete perfilesGuardados[perfilActualId];
        guardarEnStorage();
        cargarSelectorPerfiles();
        cambiarPerfil();
    }
}

function cambiarPerfil() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const perfil = perfilesGuardados[perfilActualId];
    
    // Cargar la mascota preferida de este equipo
    document.getElementById('pet-selector').value = perfil.mascota || "corgi";
    actualizarMascotaUI(perfil.mascota || "corgi");
    
    renderizarMenuLateral();
    resetViews();
}

/* ==========================================================================
   RENDERIZADO DINÁMICO DEL MENÚ Y ARRASTRE (DRAG & DROP)
   ========================================================================== */

function renderizarMenuLateral() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const config = perfilesGuardados[perfilActualId].config;
    const container = document.getElementById('sidebar-menu-container');
    container.innerHTML = '';

    Object.keys(DEFINICION_HERRAMIENTAS).forEach(sectionName => {
        const sectionConfig = config[sectionName];
        if (!sectionConfig || sectionConfig.items.length === 0) return; // Omitir secciones vacías

        const wrapper = document.createElement('div');
        wrapper.className = 'menu-section-wrapper';
        wrapper.dataset.section = sectionName;

        // Cabecera (Click para contraer/expandir)
        const header = document.createElement('div');
        header.className = `menu-section-header ${sectionConfig.collapsed ? 'collapsed' : ''}`;
        header.onclick = () => toggleSection(wrapper);
        
        const textSpan = document.createElement('span');
        textSpan.className = 'text';
        textSpan.innerText = sectionName;

        const caretSpan = document.createElement('span');
        caretSpan.className = 'material-symbols-outlined caret';
        caretSpan.innerText = 'expand_less';

        header.appendChild(textSpan);
        header.appendChild(caretSpan);

        // Contenedor de Botones (Arrastrable)
        const content = document.createElement('div');
        content.className = `menu-section-content ${sectionConfig.collapsed ? 'collapsed' : ''}`;

        content.addEventListener('dragover', handleDragOver);
        content.addEventListener('drop', handleDrop);

        // Crear Botones según el orden guardado
        sectionConfig.items.forEach(itemId => {
            const tool = DEFINICION_HERRAMIENTAS[sectionName].find(t => t.id === itemId);
            if (tool) {
                const btn = document.createElement('button');
                btn.className = 'tablinks';
                btn.id = 'btn-' + tool.id;
                btn.draggable = true;
                btn.setAttribute('onclick', tool.call);
                
                btn.addEventListener('dragstart', handleDragStart);
                btn.addEventListener('dragend', handleDragEnd);

                const icon = document.createElement('span');
                icon.className = 'material-symbols-outlined icon';
                icon.innerText = tool.icon;

                const title = document.createElement('span');
                title.className = 'text';
                title.innerText = tool.text;

                btn.appendChild(icon);
                btn.appendChild(title);
                content.appendChild(btn);
            }
        });

        wrapper.appendChild(header);
        wrapper.appendChild(content);
        container.appendChild(wrapper);
    });
}

function toggleSection(wrapper) {
    const header = wrapper.querySelector('.menu-section-header');
    const content = wrapper.querySelector('.menu-section-content');
    header.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
    guardarEstadoPerfil();
}

/* LÓGICA DE DRAG AND DROP (Arrastrar Pestañas) */
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    setTimeout(() => this.classList.add('dragging'), 0);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedItem = null;
    guardarEstadoPerfil(); // Guardar el nuevo orden al soltar
}

function handleDragOver(e) {
    e.preventDefault();
    const container = this;
    const afterElement = getDragAfterElement(container, e.clientY);
    if (afterElement == null) {
        container.appendChild(draggedItem);
    } else {
        container.insertBefore(draggedItem, afterElement);
    }
}

function handleDrop(e) { }

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.tablinks:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/* GUARDAR EL ESTADO (Colapso y Orden) EN LOCALSTORAGE */
function guardarEstadoPerfil() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const config = perfilesGuardados[perfilActualId].config;

    document.querySelectorAll('.menu-section-wrapper').forEach(wrapper => {
        const sectionName = wrapper.dataset.section;
        const isCollapsed = wrapper.querySelector('.menu-section-content').classList.contains('collapsed');
        const items = Array.from(wrapper.querySelectorAll('.tablinks')).map(btn => btn.id.replace('btn-', ''));
        
        if(!config[sectionName]) config[sectionName] = {};
        config[sectionName].collapsed = isCollapsed;
        config[sectionName].items = items;
    });

    guardarEnStorage();
}

/* ==========================================================================
   MODAL DE PERSONALIZACIÓN DE PESTAÑAS
   ========================================================================== */
function abrirModalPerfil() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const nombre = perfilesGuardados[perfilActualId].nombre;
    document.getElementById('modal-profile-name').innerText = nombre;
    
    const listDiv = document.getElementById('modal-tools-list');
    listDiv.innerHTML = '';

    const config = perfilesGuardados[perfilActualId].config;

    // Crear Checkboxes para todas las herramientas disponibles en el Pool
    Object.keys(DEFINICION_HERRAMIENTAS).forEach(section => {
        const secTitle = document.createElement('div');
        secTitle.className = 'modal-section-title';
        secTitle.innerText = section;
        listDiv.appendChild(secTitle);

        DEFINICION_HERRAMIENTAS[section].forEach(tool => {
            const label = document.createElement('label');
            label.className = 'modal-checkbox-group';
            
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.value = tool.id;
            cb.dataset.section = section;
            
            // Marcar si ya está activo en el perfil
            if(config[section] && config[section].items.includes(tool.id)) {
                cb.checked = true;
            }

            label.appendChild(cb);
            label.appendChild(document.createTextNode(tool.text));
            listDiv.appendChild(label);
        });
    });

    document.getElementById('modal-perfil').classList.remove('oculto');
}

function cerrarModalPerfil() {
    document.getElementById('modal-perfil').classList.add('oculto');
}

function guardarPersonalizacion() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const configActual = perfilesGuardados[perfilActualId].config;
    
    const nuevaConfig = {};
    
    // Preparar estructura base manteniendo colapsos
    Object.keys(DEFINICION_HERRAMIENTAS).forEach(section => {
        nuevaConfig[section] = {
            collapsed: configActual[section] ? configActual[section].collapsed : false,
            items: []
        };
    });

    // Agregar lo marcado
    const checkboxes = document.querySelectorAll('#modal-tools-list input[type="checkbox"]');
    checkboxes.forEach(cb => {
        if (cb.checked) {
            nuevaConfig[cb.dataset.section].items.push(cb.value);
        }
    });

    // Respetar el orden previo que el usuario había arrastrado
    Object.keys(nuevaConfig).forEach(section => {
        const oldItems = configActual[section] ? configActual[section].items : [];
        nuevaConfig[section].items.sort((a, b) => {
            let idxA = oldItems.indexOf(a);
            let idxB = oldItems.indexOf(b);
            if (idxA === -1) idxA = 999;
            if (idxB === -1) idxB = 999;
            return idxA - idxB;
        });
    });

    perfilesGuardados[perfilActualId].config = nuevaConfig;
    guardarEnStorage();
    
    cerrarModalPerfil();
    renderizarMenuLateral();
}

/* ==========================================================================
   NAVEGACIÓN MULTIPANTALLA Y MENÚ LATERAL
   ========================================================================== */
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
    let btn = evt.currentTarget || evt.target.closest('.tablinks');
    let target = document.getElementById(nombrePestana);

    if (!target) return; // Evitar errores si se eliminó una ventana

    if (!isSplitMode) {
        document.querySelectorAll(".tabcontent").forEach(el => el.classList.remove("active-tab"));
        document.querySelectorAll(".sidebar .tablinks").forEach(el => el.classList.remove("active"));
        target.classList.add("active-tab");
        if (btn) btn.classList.add("active");
    } else {
        target.classList.toggle("active-tab");
        if (btn) btn.classList.toggle("active");
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

    // Simular clic en la primera pestaña que esté visible según el perfil
    const primerBoton = document.querySelector('.sidebar .tablinks');
    if(primerBoton) {
        primerBoton.click();
    }
}

/* ==========================================================================
   HERRAMIENTAS ADICIONALES (COPIAR, SIMPLIROUTE FLOTANTE, MASCOTAS)
   ========================================================================== */
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

let ventanaSimpli = null;

function abrirVentanaFlotante(url) {
    const width = 1100;
    const height = 750;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    ventanaSimpli = window.open(
        url, 
        'SimpliRoutePopup', 
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes`
    );

    if (ventanaSimpli) {
        ventanaSimpli.focus();
    }
}

function traerSimpliAlFrente() {
    if (ventanaSimpli && !ventanaSimpli.closed) {
        ventanaSimpli.focus();
    } else {
        alert("¡Primero debes abrir Flotas, Seguimiento o Extensiones desde el menú izquierdo!");
    }
}

/* --- LÓGICA DE LA MASCOTA VIRTUAL PRO 🐾 --- */
const petContainer = document.getElementById('pet-container');
const petSpeech = document.getElementById('pet-speech');

let mascotaActual = 'corgi';
let saludoInicial = "¡Guau! ";
let audioActual = new Audio('ladrido.mp3'); 
audioActual.volume = 0.2; 

function cambiarMascota() {
    const selector = document.getElementById('pet-selector');
    const perfilActualId = document.getElementById('team-profile-selector').value;
    
    mascotaActual = selector.value;
    actualizarMascotaUI(mascotaActual);
    
    // Guardar la mascota elegida en el perfil actual
    if(perfilesGuardados[perfilActualId]) {
        perfilesGuardados[perfilActualId].mascota = mascotaActual;
        guardarEnStorage();
    }
}

function actualizarMascotaUI(mascotaStr) {
    petContainer.className = '';
    petContainer.classList.add('theme-' + mascotaStr);

    switch(mascotaStr) {
        case 'corgi':
            saludoInicial = "¡Guau! ";
            audioActual = new Audio('ladrido.mp3');
            break;
        case 'cat':
            saludoInicial = "¡Miau! ";
            audioActual = new Audio('miau.mp3');
            break;
        case 'panda':
            saludoInicial = "¡Grrr! (Comiendo bambú) ";
            audioActual = new Audio('panda.mp3');
            break;
        case 'fox':
            saludoInicial = "¡Ring-ding-ding! ";
            audioActual = new Audio('zorro.mp3');
            break;
        case 'lion':
            saludoInicial = "¡Roar Operativo! ";
            audioActual = new Audio('rugido.mp3');
            break;
    }
    audioActual.volume = 0.2;
}

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

    audioActual.currentTime = 0; 
    audioActual.play().catch(() => console.log('Sin audio local para esta mascota.'));

    const consejoAleatorio = consejosMascota[Math.floor(Math.random() * consejosMascota.length)];
    petSpeech.innerText = saludoInicial + consejoAleatorio;
    petSpeech.classList.remove('oculto');
    
    clearTimeout(timeoutBurbuja);
    timeoutBurbuja = setTimeout(() => {
        petSpeech.classList.add('oculto');
    }, 5500);
});