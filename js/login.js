const SingIn = document.querySelector('li.nav__menu.login');
const bg = document.querySelector('.bg');
const loginForm = document.querySelector('form')

SingIn.addEventListener('click', function () {
    if (!bg.classList.contains('active')) {
        bg.classList.add('active');
        loginForm.classList.add('active');

        function disableScroll() {
            document.body.classList.add("stop-scrolling");
        }
        let stopScroll = disableScroll();
    };
})

bg.addEventListener('click', function () {
    if (bg.classList.contains('active')) {
        loginForm.classList.remove('active');
        bg.classList.remove('active');
    }
})

const formSingIn = document.querySelector('form[type=submit]'); 