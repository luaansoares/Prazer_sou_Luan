let calcScrollValue = () => {
    let scroolProgress = document.getElementById('botao_scroll');
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scroolValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scroolProgress.style.display = "grid";
    } else {
        scroolProgress.style.display = "none";
    }

    scroolProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scroolProgress.style.background = `conic-gradient(var(--Laranja) ${scroolValue}%, #d7d7d7 ${scroolValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

