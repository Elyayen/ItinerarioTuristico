console.clear();
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger:{
                trigger: ".wrapper",
                start: "top top",
                end: "+=100%",
                pin: true,
                scrub: true,
                // markers: true,
            },
        })
        .to("img", {
            scale: 2,
            z: 350,
            transformOrigin: "center center",
            ease: 'power1.inOut',
        })
        .to(
            ".section.hero", {
                scale: 1.3,
                // opacity: 1,
                boxShadow: `10000px 0 0 0 rgba(0, 0, 0, 0) inset`,
                // height: "120vh",
                transformOrigin: "center center",
                ease: 'power1.inOut',
            },
            "<"
        )
});