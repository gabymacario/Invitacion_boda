const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzPPeZDXfgsqjyQyAYBy7ctvbPjNmPyRsOzxZ2GxOy7wI2L5i2mSI0p1hHEcJkDL5Tr/exec";

const form =
document.getElementById("rsvpForm");

const asistencia =
document.getElementById("asistencia");

const acompanantes =
document.getElementById("acompanantes");

const mensaje =
document.getElementById("mensaje");


asistencia.addEventListener(
"change",
()=>{

if(asistencia.value==="No"){

acompanantes.style.display="none";

acompanantes.value=0;

}else{

acompanantes.style.display="block";

}

}
);


form.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

try{

await fetch(
SCRIPT_URL,
{
method:"POST",
body:new FormData(form)
}
);

mensaje.innerHTML =
"✓ Gracias por confirmar tu asistencia";

mensaje.style.color =
"green";

form.reset();

}
catch{

mensaje.innerHTML =
"✗ No fue posible enviar la información";

mensaje.style.color =
"red";

}

}
);