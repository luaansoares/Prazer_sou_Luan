let btnMenu = document.getElementById('btn_menu');
let menu = document.getElementById('menu_mobile');
let overlay = document.getElementById('overlay_menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir_menu');
    overlay.classList.add('mostrar_overlay'); 
});

function fecharMenu() {
    menu.classList.remove('abrir_menu');
    overlay.classList.remove('mostrar_overlay'); 
}

menu.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);
