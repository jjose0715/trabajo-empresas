let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let productos=document.getElementById("productos").value;
    console.log(productos)
    let direccion=document.getElementById("direccion").value;
    console.log(direccion)
    let email=document.getElementById("email").value;
    console.log(email)
}