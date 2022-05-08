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