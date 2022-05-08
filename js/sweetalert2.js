$().ready(function () {
    $(".nav__menu.pakage, .nav__menu.experience").click(function () {
        Swal.fire({
            icon: 'error',
            title: '컨텐츠를 준비하고 있어요!.',
            text: '더 좋은 모습으로 찾아올께요',
            footer: '<a href="">1:1 고객센터 이용</a>'
        });

    });
});


