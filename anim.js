


let tl = gsap.timeline()


const split = new SplitType("#preloaderText");
const chars = split.chars
const charsL = split.chars.length

function curve(i) {
    let n = i / charsL * 6.28;
    return (Math.cos(n)) * - 200
}


tl.from('.preloader__item', {
    duration: 1,
    stagger: 0.33,
    yPercent: -100,
}).to('.preloader__item', {
    duration: .7,
    stagger: 0.25,
    yPercent: 100,
})
.staggerFrom('.char', 0.8, {
    ease: Back.easeOut, x: 100, cycle:{y: curve}, opacity:0,
}, 0.02)
.staggerTo('.char', 0.8, {
    ease: Back.easeOut,
    cycle: {y: [100, -100], rotation: [-120, 120]},
    opacity: 0,
}, 0.03, "+=1").to('.preloader', {
    clipPath: 'inset(50% 50% 50% 50%)',
    duration: .3,
})

