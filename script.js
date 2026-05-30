/* ==========================================================================
   CONFIGURACIÓN MAESTRA DE HERRAMIENTAS Y PERFILES (Sin Emojis)
   ========================================================================== */

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
        { id: "SR_Flotas", icon: "directions_car", text: "Flotas (Flotante)", call: "abrirVentanaFlotante(event, 'https://app3.simpliroute.com/settings/fleets', 'SimpliRoutePopup')" },
        { id: "SR_Seguimiento", icon: "share_location", text: "Seguimiento (Flotante)", call: "abrirVentanaFlotante(event, 'https://app3.simpliroute.com/tracking/2026-05-13/vehicles?fleet=44959', 'SimpliRoutePopup')" },
        { id: "SR_Extensiones", icon: "extension", text: "Extensiones (Flotante)", call: "abrirVentanaFlotante(event, 'https://app3.simpliroute.com/es/extensions', 'SimpliRoutePopup')" }
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
        { id: "LCT_Reclamos", icon: "gavel", text: "Reclamos (Flotante)", call: "abrirVentanaFlotante(event, 'https://logistics.falabella.services/lct/lct-login.html', 'LCTPopup')" }
    ],
    "Soporte y Contactos": [
        { id: "Soporte_Contactos", icon: "contact_phone", text: "Contactos (Flotante)", call: "abrirVentanaFlotante(event, 'https://datastudio.google.com/reporting/9f41cc74-1a3c-428b-b2e7-7868d503c4c7/page/My9WF', 'LookerPopup')" },
        { id: "Soporte_Consolidado", icon: "view_list", text: "Consolidado Soporte", call: "abrirPestana(event, 'Soporte_Consolidado')" },
        { id: "Soporte_Genesys", icon: "headset_mic", text: "Genesys Cloud", call: "abrirVentanaFlotante(event, 'https://apps.usw2.pure.cloud/directory/#/home', 'GenesysPopup')" },
        { id: "Soporte_Workfast", icon: "work", text: "Workfast", call: "abrirVentanaFlotante(event, 'https://falabella-workflow.workfast.cl/form/home.aspx?a=1&b=1', 'WorkfastPopup')" }
    ],
    "Mensajería y Correo": [
        { id: "App_WhatsApp", icon: "forum", text: "WhatsApp Web", call: "abrirVentanaFlotante(event, 'https://web.whatsapp.com/', 'WAPopup')" },
        { id: "App_Outlook", icon: "mail", text: "Correo Outlook", call: "abrirVentanaFlotante(event, 'https://outlook.office.com/mail/', 'OutlookPopup')" }
    ],
    "Plantillas Rápidas": [
        { id: "Notas_Mensajes", icon: "quickreply", text: "Plantillas de Mensajes", call: "abrirPestana(event, 'Notas_Mensajes')" }
    ]
};

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
            "Mensajería y Correo": { collapsed: false, items: ["App_WhatsApp", "App_Outlook"] },
            "Plantillas Rápidas": { collapsed: false, items: ["Notas_Mensajes"] }
        }
    },
    "soporte": {
        nombre: "Eq. Soporte",
        mascota: "cat",
        config: {
            "Planillas Estratégicas": { collapsed: true, items: ["SP_CasosVIP", "SP_NoPago", "SP_MantenedorIA"] },
            "Soporte y Contactos": { collapsed: false, items: ["Soporte_Genesys", "Soporte_Workfast", "Soporte_Contactos", "Soporte_Consolidado"] },
            "Herramientas LCT": { collapsed: false, items: ["LCT_Reclamos", "LCT_AgenteIA"] },
            "Mensajería y Correo": { collapsed: false, items: ["App_WhatsApp", "App_Outlook"] },
            "Plantillas Rápidas": { collapsed: false, items: ["Notas_Mensajes"] }
        }
    },
    "comunicaciones": {
        nombre: "Eq. Comunicaciones",
        mascota: "fox",
        config: {
            "Planillas Estratégicas": { collapsed: false, items: ["SP_Comunicaciones"] },
            "Soporte y Contactos": { collapsed: false, items: ["Soporte_Genesys"] },
            "SimpliRoute": { collapsed: false, items: ["SR_Seguimiento"] },
            "Geosort": { collapsed: false, items: ["GS_Seguimiento"] },
            "Mensajería y Correo": { collapsed: false, items: ["App_WhatsApp", "App_Outlook"] },
            "Plantillas Rápidas": { collapsed: false, items: ["Notas_Mensajes"] }
        }
    }
};

let perfilesGuardados = JSON.parse(localStorage.getItem('perfiles_hub_lof1_v10'));
if (!perfilesGuardados || Object.keys(perfilesGuardados).length === 0) {
    perfilesGuardados = JSON.parse(JSON.stringify(PERFILES_DEFAULT));
}

document.addEventListener("DOMContentLoaded", () => {
    cargarSelectorPerfiles();
    cambiarPerfil(); 
    verificarTutorial(); 
});

function guardarEnStorage() {
    localStorage.setItem('perfiles_hub_lof1_v10', JSON.stringify(perfilesGuardados));
}

/* ==========================================================================
   SISTEMA DE GESTIÓN DE PERFILES
   ========================================================================== */
function cargarSelectorPerfiles() {
    const selector = document.getElementById('team-profile-selector');
    const valorAnterior = selector.value;
    selector.innerHTML = '';
    Object.keys(perfilesGuardados).forEach(key => {
        const option = document.createElement('option');
        option.value = key; option.innerText = perfilesGuardados[key].nombre;
        selector.appendChild(option);
    });
    if(perfilesGuardados[valorAnterior]) selector.value = valorAnterior;
}

function crearNuevoPerfil() {
    const nombre = prompt("Ingresa el nombre para el nuevo perfil:\n(Ej: Turno Noche, Monitoreo...)");
    if (!nombre || nombre.trim() === "") return;
    const nuevoId = "perfil_" + Date.now();
    const perfilActualId = document.getElementById('team-profile-selector').value;
    perfilesGuardados[nuevoId] = {
        nombre: nombre.trim(), mascota: "corgi",
        config: JSON.parse(JSON.stringify(perfilesGuardados[perfilActualId].config))
    };
    guardarEnStorage(); cargarSelectorPerfiles();
    document.getElementById('team-profile-selector').value = nuevoId; cambiarPerfil();
}

function eliminarPerfilActual() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    if(perfilActualId === 'seguimiento') {
        alert("Por seguridad operativa, el perfil 'Eq. Seguimiento' no se puede eliminar.");
        return;
    }
    if (confirm(`¿Estás seguro de eliminar el perfil "${perfilesGuardados[perfilActualId].nombre}"?`)) {
        delete perfilesGuardados[perfilActualId];
        guardarEnStorage(); cargarSelectorPerfiles(); cambiarPerfil();
    }
}

function cambiarPerfil() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const perfil = perfilesGuardados[perfilActualId];
    document.getElementById('pet-selector').value = perfil.mascota || "corgi";
    actualizarMascotaUI(perfil.mascota || "corgi");
    renderizarMenuLateral(); resetViews();
}

/* ==========================================================================
   RENDERIZADO DINÁMICO DEL MENÚ Y ARRASTRE
   ========================================================================== */
function renderizarMenuLateral() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const config = perfilesGuardados[perfilActualId].config;
    const container = document.getElementById('sidebar-menu-container');
    container.innerHTML = '';

    Object.keys(DEFINICION_HERRAMIENTAS).forEach(sectionName => {
        const sectionConfig = config[sectionName];
        if (!sectionConfig || sectionConfig.items.length === 0) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'menu-section-wrapper';
        wrapper.dataset.section = sectionName;

        const header = document.createElement('div');
        header.className = `menu-section-header ${sectionConfig.collapsed ? 'collapsed' : ''}`;
        header.onclick = () => toggleSection(wrapper);
        
        const textSpan = document.createElement('span');
        textSpan.className = 'text'; textSpan.innerText = sectionName;
        const caretSpan = document.createElement('span');
        caretSpan.className = 'material-symbols-outlined caret'; caretSpan.innerText = 'expand_less';

        header.appendChild(textSpan); header.appendChild(caretSpan);

        const content = document.createElement('div');
        content.className = `menu-section-content ${sectionConfig.collapsed ? 'collapsed' : ''}`;
        content.addEventListener('dragover', handleDragOver);
        content.addEventListener('drop', handleDrop);

        sectionConfig.items.forEach(itemId => {
            const tool = DEFINICION_HERRAMIENTAS[sectionName].find(t => t.id === itemId);
            if (tool) {
                const btn = document.createElement('button');
                btn.className = 'tablinks'; btn.id = 'btn-' + tool.id; btn.draggable = true;
                btn.setAttribute('onclick', tool.call);
                btn.addEventListener('dragstart', handleDragStart); btn.addEventListener('dragend', handleDragEnd);

                const icon = document.createElement('span');
                icon.className = 'material-symbols-outlined icon'; icon.innerText = tool.icon;
                const title = document.createElement('span');
                title.className = 'text'; title.innerText = tool.text;

                btn.appendChild(icon); btn.appendChild(title); content.appendChild(btn);
            }
        });
        wrapper.appendChild(header); wrapper.appendChild(content); container.appendChild(wrapper);
    });
}

function toggleSection(wrapper) {
    const header = wrapper.querySelector('.menu-section-header');
    const content = wrapper.querySelector('.menu-section-content');
    header.classList.toggle('collapsed'); content.classList.toggle('collapsed');
    guardarEstadoPerfil();
}

let draggedItem = null;
function handleDragStart(e) { draggedItem = this; setTimeout(() => this.classList.add('dragging'), 0); }
function handleDragEnd(e) { this.classList.remove('dragging'); draggedItem = null; guardarEstadoPerfil(); }
function handleDrop(e) { }
function handleDragOver(e) {
    e.preventDefault();
    const container = this; const afterElement = getDragAfterElement(container, e.clientY);
    if (afterElement == null) container.appendChild(draggedItem);
    else container.insertBefore(draggedItem, afterElement);
}
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.tablinks:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect(); const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) return { offset: offset, element: child };
        else return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function guardarEstadoPerfil() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const config = perfilesGuardados[perfilActualId].config;
    document.querySelectorAll('.menu-section-wrapper').forEach(wrapper => {
        const sectionName = wrapper.dataset.section;
        const isCollapsed = wrapper.querySelector('.menu-section-content').classList.contains('collapsed');
        const items = Array.from(wrapper.querySelectorAll('.tablinks')).map(btn => btn.id.replace('btn-', ''));
        if(!config[sectionName]) config[sectionName] = {};
        config[sectionName].collapsed = isCollapsed; config[sectionName].items = items;
    });
    guardarEnStorage();
}

/* ==========================================================================
   MODAL DE PERSONALIZACIÓN
   ========================================================================== */
function abrirModalPerfil() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    document.getElementById('modal-profile-name').innerText = perfilesGuardados[perfilActualId].nombre;
    const listDiv = document.getElementById('modal-tools-list'); listDiv.innerHTML = '';
    const config = perfilesGuardados[perfilActualId].config;

    Object.keys(DEFINICION_HERRAMIENTAS).forEach(section => {
        const secTitle = document.createElement('div'); secTitle.className = 'modal-section-title'; secTitle.innerText = section;
        listDiv.appendChild(secTitle);
        DEFINICION_HERRAMIENTAS[section].forEach(tool => {
            const label = document.createElement('label'); label.className = 'modal-checkbox-group';
            const cb = document.createElement('input'); cb.type = 'checkbox'; cb.value = tool.id; cb.dataset.section = section;
            if(config[section] && config[section].items.includes(tool.id)) cb.checked = true;
            label.appendChild(cb); label.appendChild(document.createTextNode(tool.text)); listDiv.appendChild(label);
        });
    });
    document.getElementById('modal-perfil').classList.remove('oculto');
}

function cerrarModalPerfil() { document.getElementById('modal-perfil').classList.add('oculto'); }

function guardarPersonalizacion() {
    const perfilActualId = document.getElementById('team-profile-selector').value;
    const configActual = perfilesGuardados[perfilActualId].config;
    const nuevaConfig = {};
    
    Object.keys(DEFINICION_HERRAMIENTAS).forEach(section => {
        nuevaConfig[section] = { collapsed: configActual[section] ? configActual[section].collapsed : false, items: [] };
    });

    const checkboxes = document.querySelectorAll('#modal-tools-list input[type="checkbox"]');
    checkboxes.forEach(cb => { if (cb.checked) nuevaConfig[cb.dataset.section].items.push(cb.value); });

    Object.keys(nuevaConfig).forEach(section => {
        const oldItems = configActual[section] ? configActual[section].items : [];
        nuevaConfig[section].items.sort((a, b) => {
            let idxA = oldItems.indexOf(a); let idxB = oldItems.indexOf(b);
            if (idxA === -1) idxA = 999; if (idxB === -1) idxB = 999;
            return idxA - idxB;
        });
    });

    perfilesGuardados[perfilActualId].config = nuevaConfig; guardarEnStorage(); cerrarModalPerfil(); renderizarMenuLateral();
}

/* ==========================================================================
   NAVEGACIÓN MULTIPANTALLA (SISTEMA DE VENTANAS MÓVILES TIPO ESCRITORIO)
   ========================================================================== */
let isSplitMode = false;
let activeZIndex = 100;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar'); const toggleIcon = document.getElementById('toggle-icon');
    sidebar.classList.toggle('collapsed'); toggleIcon.innerText = sidebar.classList.contains('collapsed') ? "menu" : "menu_open"; 
}

function toggleSplitMode() {
    isSplitMode = !isSplitMode;
    const container = document.getElementById('views-container'); const btnSplit = document.getElementById('btn-split');

    if(isSplitMode) {
        container.classList.add('split-mode');
        btnSplit.innerHTML = '<span class="material-symbols-outlined">splitscreen</span> Modo Multipantalla: ON';
        btnSplit.classList.add('active');

        let offset = 20;
        document.querySelectorAll('.tabcontent.active-tab').forEach(tab => {
            activeZIndex++; tab.style.zIndex = activeZIndex;
            tab.style.left = offset + 'px'; tab.style.top = offset + 'px';
            tab.style.width = '45%'; tab.style.height = '60%'; tab.style.position = 'absolute';
            offset += 40;
        });
    } else {
        container.classList.remove('split-mode');
        btnSplit.innerHTML = '<span class="material-symbols-outlined">splitscreen</span> Modo Multipantalla';
        btnSplit.classList.remove('active');
        
        document.querySelectorAll('.tabcontent').forEach(tab => {
            tab.style.left = ''; tab.style.top = ''; tab.style.width = '100%'; tab.style.height = '100%';
            tab.style.position = ''; tab.style.zIndex = '';
        });
        resetViews();
    }
}

function abrirPestana(evt, nombrePestana) {
    let btn = evt.currentTarget || evt.target.closest('.tablinks');
    let target = document.getElementById(nombrePestana);
    if (!target) return; 

    if (!isSplitMode) {
        document.querySelectorAll(".tabcontent").forEach(el => el.classList.remove("active-tab"));
        document.querySelectorAll(".sidebar .tablinks").forEach(el => el.classList.remove("active"));
        target.classList.add("active-tab"); if (btn) btn.classList.add("active");
    } else {
        const wasActive = target.classList.contains("active-tab");
        target.classList.toggle("active-tab"); if (btn) btn.classList.toggle("active");

        if (!wasActive) {
            activeZIndex++; target.style.zIndex = activeZIndex;
            target.style.left = '50px'; target.style.top = '50px'; target.style.width = '450px'; target.style.height = '400px'; target.style.position = 'absolute';
        }
    }
}

function resetViews() {
    isSplitMode = false;
    document.getElementById('views-container').classList.remove('split-mode');
    const btnSplit = document.getElementById('btn-split');
    btnSplit.innerHTML = '<span class="material-symbols-outlined">splitscreen</span> Modo Multipantalla';
    btnSplit.classList.remove('active');

    document.querySelectorAll(".tabcontent").forEach(el => {
        el.classList.remove("active-tab"); el.style.left = ''; el.style.top = '';
        el.style.width = '100%'; el.style.height = '100%'; el.style.position = ''; el.style.zIndex = '';
    });
    document.querySelectorAll(".sidebar .tablinks").forEach(el => el.classList.remove("active"));
    const primerBoton = document.querySelector('.sidebar .tablinks'); if(primerBoton) primerBoton.click();
}

/* Lógica de Arrastre de Ventanas (Drag & Drop en Multipantalla) */
let isDraggingWindow = false; let dragTarget = null; let startXW, startYW, initialLeftW, initialTopW;

document.querySelectorAll('.tabcontent').forEach(tab => {
    const header = tab.querySelector('.window-header');
    tab.addEventListener('mousedown', () => { if(isSplitMode) { activeZIndex++; tab.style.zIndex = activeZIndex; } });
    if(header) {
        header.addEventListener('mousedown', (e) => {
            if (!isSplitMode) return;
            isDraggingWindow = true; dragTarget = tab; startXW = e.clientX; startYW = e.clientY;
            initialLeftW = tab.offsetLeft; initialTopW = tab.offsetTop;
            document.body.classList.add('dragging-window'); 
        });
    }
});
document.addEventListener('mousemove', (e) => {
    if (!isDraggingWindow || !dragTarget) return;
    dragTarget.style.left = `${initialLeftW + (e.clientX - startXW)}px`;
    dragTarget.style.top = `${initialTopW + (e.clientY - startYW)}px`;
});
document.addEventListener('mouseup', () => {
    if(isDraggingWindow) { isDraggingWindow = false; dragTarget = null; document.body.classList.remove('dragging-window'); }
});

/* ==========================================================================
   HERRAMIENTAS RÁPIDAS
   ========================================================================== */
function copiarMensaje(cardElement, index) {
    const textoACopiar = document.getElementById(`msg-${index}`).innerText;
    navigator.clipboard.writeText(textoACopiar).then(() => {
        cardElement.classList.add('copied'); const boton = cardElement.querySelector('.btn-copy'); const textoOriginalBoton = boton.innerText;
        boton.innerText = "¡Copiado ✓!"; setTimeout(() => { cardElement.classList.remove('copied'); boton.innerText = textoOriginalBoton; }, 2500);
    }).catch(err => console.error('Error al copiar: ', err));
}


/* ==========================================================================
   CONTROL DE VENTANAS FLOTANTES (INVOCACIÓN INTELIGENTE)
   ========================================================================== */
// Usamos memoria global para evitar recargas
let ventanasFlotantes = window.ventanasFlotantes || {};

function mostrarAvisoFoco(winName) {
    let aviso = document.createElement('div');
    aviso.innerHTML = `Ventana de operación encontrada. <br><span style="font-size: 11px; color: #94a3b8;">Revisa tu barra de tareas si no la ves.</span>`;
    aviso.style.position = 'fixed'; aviso.style.bottom = '20px'; aviso.style.left = '50%';
    aviso.style.transform = 'translateX(-50%)'; aviso.style.background = '#0f172a';
    aviso.style.color = '#B2D234'; aviso.style.padding = '12px 24px';
    aviso.style.borderRadius = '8px'; aviso.style.zIndex = '9999';
    aviso.style.boxShadow = '0 10px 15px rgba(0,0,0,0.3)';
    aviso.style.textAlign = 'center'; aviso.style.fontWeight = '600';
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 3500);
}

function abrirVentanaFlotante(e, url, winName) {
    if (e && e.preventDefault) e.preventDefault(); 

    try {
        if (ventanasFlotantes[winName] && !ventanasFlotantes[winName].closed) {
            ventanasFlotantes[winName].focus(); 
            mostrarAvisoFoco(winName); 
            return; 
        }
    } catch(err) { console.log("Estado de ventana..."); }

    let width = 1100; let height = 750;
    if (url.includes("whatsapp")) { width = 850; height = 800; }
    if (url.includes("outlook")) { width = 1000; height = 800; }
    if (url.includes("datastudio")) { width = 1200; height = 800; }
    if (url.includes("pure.cloud")) { width = 1200; height = 800; } 
    if (url.includes("workfast")) { width = 1100; height = 800; } 

    const left = (screen.width - width) / 2; const top = (screen.height - height) / 2;
    ventanasFlotantes[winName] = window.open(url, winName, `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes`);
    
    if (ventanasFlotantes[winName]) {
        ventanasFlotantes[winName].focus();
    }
}

// Los botones superiores SOLO llaman al frente
function traerVentanaAlFrente(e, winName) {
    if(e && e.preventDefault) e.preventDefault();
    if (ventanasFlotantes[winName] && !ventanasFlotantes[winName].closed) {
        ventanasFlotantes[winName].focus();
        mostrarAvisoFoco(winName);
    } else {
        alert("¡Aún no has abierto esta herramienta! Iníciala desde el menú lateral izquierdo para poder usar este acceso directo.");
    }
}

/* ==========================================================================
   SISTEMA DE ONBOARDING (TUTORIAL NO INVASIVO)
   ========================================================================== */
const pasosTutorial = [
    { icon: "splitscreen", title: "1. Modo Multipantalla", desc: "Activa este modo para dividir tu pantalla. Puedes arrastrar las ventanas desde su título oscuro y cambiar su tamaño desde la esquina inferior derecha. ¡Arma tu escritorio ideal!" },
    { icon: "picture_in_picture_alt", title: "2. Ventanas Flotantes", desc: "Plataformas como SimpliRoute, LCT, WhatsApp y Outlook se abren en mini-ventanas seguras. Usa los botones de la barra superior para invocarlas rápidamente si se esconden." },
    { icon: "tune", title: "3. Perfiles Personalizados", desc: "Crea diferentes perfiles para tu equipo. Haz clic en el engranaje (⚙️) para activar o desactivar herramientas, y arrastra los botones del menú lateral para ordenarlos como prefieras. ¡El sistema lo recordará!" },
    { icon: "pets", title: "4. Mascota Operativa", desc: "Elige tu compañero en la barra superior. Puedes arrastrarlo por la pantalla para que no estorbe. Hazle clic para escuchar sus consejos operativos mientras trabajas." }
];
let pasoActualTutorial = 0;

function verificarTutorial() {
    if(!localStorage.getItem('tutorial_hub_v1_visto')) {
        setTimeout(() => { document.getElementById('tutorial-toast').classList.remove('oculto'); }, 2000);
    }
}
function cerrarToastTutorial() {
    document.getElementById('tutorial-toast').classList.add('oculto');
    localStorage.setItem('tutorial_hub_v1_visto', 'true');
}
function iniciarTutorial() {
    document.getElementById('tutorial-toast').classList.add('oculto');
    localStorage.setItem('tutorial_hub_v1_visto', 'true');
    pasoActualTutorial = 0; renderizarPasoTutorial();
    document.getElementById('modal-tutorial').classList.remove('oculto');
}
function abrirTutorial() { iniciarTutorial(); }
function cerrarTutorial() { document.getElementById('modal-tutorial').classList.add('oculto'); }
function siguienteTutorial() { pasoActualTutorial++; renderizarPasoTutorial(); }

function renderizarPasoTutorial() {
    const step = pasosTutorial[pasoActualTutorial];
    const body = document.getElementById('tutorial-body');
    body.innerHTML = `
        <div class="tutorial-image ${pasoActualTutorial === 0 ? 'green' : ''}">
            <span class="material-symbols-outlined">${step.icon}</span>
        </div>
        <h3 class="tutorial-title">${step.title}</h3>
        <p class="tutorial-desc">${step.desc}</p>
    `;
    const dots = document.getElementById('tutorial-dots'); dots.innerHTML = '';
    for(let i=0; i<pasosTutorial.length; i++) {
        dots.innerHTML += `<div class="dot ${i === pasoActualTutorial ? 'active' : ''}"></div>`;
    }
    const btnNext = document.getElementById('btn-next-tutorial');
    if(pasoActualTutorial === pasosTutorial.length - 1) {
        btnNext.innerText = "¡Empezar a trabajar!"; btnNext.onclick = cerrarTutorial;
    } else {
        btnNext.innerText = "Siguiente"; btnNext.onclick = siguienteTutorial;
    }
}

/* ==========================================================================
   LA MASCOTA VIRTUAL PRO 🐾
   ========================================================================== */
const petContainer = document.getElementById('pet-container');
const petSpeech = document.getElementById('pet-speech');
let mascotaActual = 'corgi';
let saludoInicial = "¡Guau! ";
let audioActual = new Audio('ladrido.mp3'); audioActual.volume = 0.2; 

function cambiarMascota() {
    const selector = document.getElementById('pet-selector');
    const perfilActualId = document.getElementById('team-profile-selector').value;
    mascotaActual = selector.value; actualizarMascotaUI(mascotaActual);
    if(perfilesGuardados[perfilActualId]) { perfilesGuardados[perfilActualId].mascota = mascotaActual; guardarEnStorage(); }
}

function actualizarMascotaUI(mascotaStr) {
    petContainer.className = ''; petContainer.classList.add('theme-' + mascotaStr);
    switch(mascotaStr) {
        case 'corgi': saludoInicial = "¡Guau! "; audioActual = new Audio('ladrido.mp3'); break;
        case 'cat': saludoInicial = "¡Miau! "; audioActual = new Audio('miau.mp3'); break;
        case 'panda': saludoInicial = "¡Grrr! "; audioActual = new Audio('panda.mp3'); break;
        case 'fox': saludoInicial = "¡Ring-ding-ding! "; audioActual = new Audio('zorro.mp3'); break;
        case 'lion': saludoInicial = "¡Roar Operativo! "; audioActual = new Audio('rugido.mp3'); break;
    }
    audioActual.volume = 0.2;
}

let timeoutBurbuja; let isDraggingPet = false; let wasPetDragged = false; let startDragX, startDragY; let offsetX, offsetY;

petContainer.addEventListener('mousedown', (e) => {
    isDraggingPet = true; wasPetDragged = false; startDragX = e.clientX; startDragY = e.clientY;
    offsetX = e.clientX - petContainer.getBoundingClientRect().left; offsetY = e.clientY - petContainer.getBoundingClientRect().top;
});
document.addEventListener('mousemove', (e) => {
    if (!isDraggingPet) return;
    if (Math.abs(e.clientX - startDragX) > 5 || Math.abs(e.clientY - startDragY) > 5) wasPetDragged = true;
    if (wasPetDragged) { petContainer.style.right = 'auto'; petContainer.style.bottom = 'auto'; petContainer.style.left = `${e.clientX - offsetX}px`; petContainer.style.top = `${e.clientY - offsetY}px`; }
});
document.addEventListener('mouseup', () => { isDraggingPet = false; });

const consejosMascota = [
    "Recuerda monitorear siempre el grupo de despachos críticos.",
    "¿Ya revisaste los folios que faltan por levantar hoy?",
    "Ojo con las detenciones, ¡que no se te pase ninguna!",
    "Si un folio no está informado a transporte, ¡levanta la alerta!",
    "Ojo con Leo, jefe del Equipo de Seguimiento."
];

petContainer.addEventListener('click', (e) => {
    if (wasPetDragged) { wasPetDragged = false; return; }
    audioActual.currentTime = 0; audioActual.play().catch(() => console.log('Sin audio local.'));
    petSpeech.innerText = saludoInicial + consejosMascota[Math.floor(Math.random() * consejosMascota.length)];
    petSpeech.classList.remove('oculto');
    clearTimeout(timeoutBurbuja); timeoutBurbuja = setTimeout(() => { petSpeech.classList.add('oculto'); }, 5500);
});