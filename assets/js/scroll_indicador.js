if (window.innerWidth > 768) {
let indicador = document.getElementById('indicador');
let maxHeigth = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    let porcentagem = (window.scrollY / maxHeigth) * 100;

    indicador.style.width = `${porcentagem}%`;
})}