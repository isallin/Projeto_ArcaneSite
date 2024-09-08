document.addEventListener('DOMContentLoaded', function(){ 
    const swiper = new Swiper('.carousel__wrapper', {
        spaceBetween: 30,

        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            0:{
                slidesPerView:1
            },
            768:{
                slidesPerView:3
            },
            1023:{
                slidesPerView:5
            }
        }

    });
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual<alturaHero){
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    function ocultaElementosDoHeader(){
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }
    
    function exibeElementosDoHeader(){
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

});