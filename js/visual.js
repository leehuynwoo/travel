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
