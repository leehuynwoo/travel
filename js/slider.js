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




    //  스크롤 위치에 비쥬얼 에셋 위치 변경
    const nav = document.querySelector("#nav");
    const visual = document.querySelector("#visual");
    const navHeight = nav.getBoundingClientRect().height;
    const visualHeight = visual.getBoundingClientRect().height;
    let goediImg = document.querySelector("#Geodi")
    let weareGeodi = document.querySelector("#weareGeodi")

    window.addEventListener("scroll", () => {
        if (window.scrollY > visualHeight) {
            nav.setAttribute("style", "background: white;");
        } else {
            nav.setAttribute("style", "background: transparent;");
        }
    });

    window.addEventListener("scroll", () => {
        let value = document.documentElement.scrollTop;
        goediImg.style.top = value * 0.4 + 'px';
        weareGeodi.style.bottom = value * 0.5 + 'px';

        let aa = weareGeodi.getBoundingClientRect().height;
        let aaa = weareGeodi.style.top;
    });

    // 마우스 커서 
    const cursor = document.querySelector('div.cursors');
    const balls = cursor.querySelectorAll('div');

    let aimX = 0
    let aimY = 0

    balls.forEach((ball, index) => {
        let currentX = 0
        let currentY = 0

        let speed = 0.2 - index * 0.0018

        const animate = function () {
            currentX += (aimX - currentX) * speed
            currentY += (aimY - currentY) * speed

            ball.style.left = currentX + "px"
            ball.style.top = currentY + "px"

            requestAnimationFrame(animate)
        }

        animate()

    });


    document.addEventListener("mousemove", function (event) {
        aimX = event.pageX
        aimY = event.pageY
    })
})





// 유튜브 썸네일 바꾸기 + 재생 아이콘 클릭
$(function () {


    //비디오 재생 버튼
    $('.btn-play').on('click', function () {

        let index = $('.btn-play').index(this)
        playerList[index].playVideo()
        $('.player').eq(index).show()
    })

    var playerList = new Array();

    function onYouTubeIframeAPIReady() {
        for (let i = 0; i < 3; i++) {

            let player = new onYouTubeIframeAPIReady.Player('player' + i, {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });

            playerList.push(player)
        }
    }




});