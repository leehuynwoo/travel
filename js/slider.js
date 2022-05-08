document.addEventListener("DOMContentLoaded", function (event) {

    const swiper1 = new Swiper('.recoslider', {
        grabCursor: true,
    });

    const swiper2 = new Swiper('.photo_slider', {
        direction: 'horizontal',            /* 슬라이드 방향 : 'vertical' , 'horizontal' */
        loop: true,                         // 반복여부
        // autoplay: {                         // 자동재생
        //     delay: 3000,                    // 슬라이드 당 지연시간 (ms)
        //     pauseOnMouseEnter: true,        // 마우스 올리면, 자동재생 멈춤
        //     disableOnInteraction: true,     // 인터렉션(화살표,드래그,...) 중 자동재생 비활성화        
        // },
        speed: 2000,                        // 슬라이드가 넘어가는 시간 (ms)
        slidesPerView: 3,                   // 보여지는 슬라이드 개수
        spaceBetween: 25,                   // 슬라이드 간 여백

        grabCursor: true,                   // 마우스커서를 잡는 손가락 모양
    });

    const swiper3 = new Swiper('.experience', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    
    });
})





