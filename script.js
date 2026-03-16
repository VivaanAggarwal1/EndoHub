function toggleForm(){

let f=document.getElementById("form")

if(f.style.display==="grid"){

f.style.display="none"

}else{

f.style.display="grid"

}

}

function saveData(){

let name=document.getElementById("f_name").value
let id=document.getElementById("f_id").value
let procedure=document.getElementById("f_procedure").value
let tooth=document.getElementById("f_tooth").value
let date=document.getElementById("f_date").value
let notes=document.getElementById("f_notes").value

document.getElementById("name").innerText=name
document.getElementById("id").innerText=id
document.getElementById("procedure").innerText=procedure
document.getElementById("tooth").innerText=tooth
document.getElementById("date").innerText=date
document.getElementById("notes").innerText=notes

localStorage.setItem("endo_name",name)
localStorage.setItem("endo_id",id)
localStorage.setItem("endo_procedure",procedure)
localStorage.setItem("endo_tooth",tooth)
localStorage.setItem("endo_date",date)
localStorage.setItem("endo_notes",notes)

}

window.onload=function(){

if(localStorage.getItem("endo_name")){

document.getElementById("name").innerText=localStorage.getItem("endo_name")
document.getElementById("id").innerText=localStorage.getItem("endo_id")
document.getElementById("procedure").innerText=localStorage.getItem("endo_procedure")
document.getElementById("tooth").innerText=localStorage.getItem("endo_tooth")
document.getElementById("date").innerText=localStorage.getItem("endo_date")
document.getElementById("notes").innerText=localStorage.getItem("endo_notes")

}

}
