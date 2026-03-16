const cards=document.querySelectorAll(".patientCard")

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(180,120,255,0.25),
rgba(20,10,40,0.9) 60%)`

})

card.addEventListener("mouseleave",()=>{

card.style.background=
`linear-gradient(150deg,
rgba(255,255,255,0.06),
rgba(0,0,0,0.4))`

})

})
