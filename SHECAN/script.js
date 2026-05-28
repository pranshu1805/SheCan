gsap.from("nav",{
  y:-100,
  opacity:0,
  duration:1
})

gsap.from("#overlay h1",{
  x:300,
  opacity:0,
  duration:1.5,
  ease:"power3.out"
})

gsap.from("#overlay p",{
  y:40,
  opacity:0,
  duration:1,
  delay:0.4
})

gsap.from("#overlay button",{
  scale:0,
  opacity:0,
  duration:0.8,
  delay:0.7
})

gsap.from(".card",{
  y:80,
  opacity:0,
  duration:1,
  stagger:0.2
})

gsap.from(".stat",{
  y:80,
  opacity:0,
  duration:1,
  stagger:0.2
})