const SingIn = document.querySelector('li.nav__menu.login');
const bg = document.querySelector('.bg');
const loginForm = document.querySelector('.login_modal')
const menus = document.querySelectorAll('.nav__menu:not(:last-child)');

SingIn.addEventListener('click', function () {
    if (!bg.classList.contains('on')) {
        bg.classList.add('on');
        loginForm.classList.add('on');
        function disableScroll() {
            document.body.classList.add("stop-scrolling");
        }
        let stopScroll = disableScroll();
    } else {
        loginForm.classList.remove('on');
        bg.classList.remove('on');
        document.body.classList.remove("stop-scrolling");
    }
})

bg.addEventListener('click', function () {
    if (bg.classList.contains('on')) {
        loginForm.classList.remove('on');
        bg.classList.remove('on');
        document.body.classList.remove("stop-scrolling");
    }
})

var intViewportWidth = window.innerWidth;
console.log(Window.innerWidth);