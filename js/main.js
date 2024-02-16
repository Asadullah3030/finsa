Shery.makeMagnet('.magnet')
Shery.mouseFollower()
// Shery.hoverWithMediaCircle('.hvr',{videos:["./video/1.mp4"] } )

// Shery.textAnimate(".hero-text h1" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 2,
//     y: 10,
//     letterSpacing:0,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 0.2, 0.320, 0.2)",
//     multiplier: 0.1,
//   });

gsap.to('.navbar',{
    backgroundColor: 'black',
    height:'5.7rem',
    fontSize:1.3,
    scrollTrigger:{
        scroller: 'body',
        trigger:'.navbar',
        start: 'top -5%',
        end: 'top -5',
        // markers: true,
        scrub:2,
    }
})

gsap.to('.navbar-collapse',{
    backgroundColor: 'black',
    // height:'5.7rem',
    fontSize:1.3,
    scrollTrigger:{
        scroller: 'body',
        trigger:'.navbar-collapse',
        start: 'top -1%',
        end: 'top -1%',
        // markers: true,
        scrub:2,
    }
})

gsap.from('.hero-text h1',{
    opacity:0,
    y:50,
    stagger:0.2,
})