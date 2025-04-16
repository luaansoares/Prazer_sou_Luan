if (window.innerWidth > 600) {
    window.revelar = ScrollReveal({ reset: true });

 //home

revelar.reveal('.efeito_home', {
    duration: 3500,
    distance: '90px',
    
})

revelar.reveal('.efeito_titulo', {
    duration: 3000,
    distance: '90px',
    origin: 'top'
})




revelar.reveal('.efeito_img', {
    duration: 3000,
    distance: '90px',
    delay: 500,
    
})

//SOBREMIM
revelar.reveal('.efeito_sobre', {
    duration: 3000,
    distance: '90px',
    
    origin: 'right'
})


 //PROJETOS

revelar.reveal('.efeito_titulo2', {
    duration: 3000,
    distance: '40px',
    origin: 'top'
    
})


revelar.reveal('.efeito_delay', {
    duration: 3000,
    distance: '90px',
    delay: 300,
    origin: 'bottom'
})

revelar.reveal('.efeito_delay_1', {
    duration: 3000,
    distance: '90px',
    delay: 500,
    origin: 'bottom'
})

revelar.reveal('.efeito_delay_2', {
    duration: 3000,
    distance: '90px',
    delay: 700,
    origin: 'bottom'
})

revelar.reveal('.efeito_breve', {
    duration: 3000,
    distance: '90px',
    delay: 1000,
    
})

}