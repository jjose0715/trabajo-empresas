let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");

    let Tribunas=document.getElementById("Tribunas").value;
    console.log(Tribunas)
    let cantidad=document.getElementById("cantidad").value;
    console.log(cantidad)
    let cedula=document.getElementById("cedula").value;
    console.log(cedula)
    let nombres=document.getElementById("nombres").value;
    console.log(nombres)
    let apellidos=document.getElementById("apellidos").value;
    console.log(apellidos)
    let correo=document.getElementById("correo").value;
    console.log(correo)
    if (Tribunas=="oriental"){
        let tribunas=215000;
        let valor=tribunas*cantidad;
        alert("El total por ir a la tribuna " +Tribunas+ "es $"+valor)
    }
    if (Tribunas=="occidental"){
        let tribunas=444000;
        let valor=tribunas*cantidad;
        alert("El total por ir a la tribuna " +Tribunas+ " es $" +valor)
    }
    if (Tribunas=="sur"){
        let tribunas=144000;
        let valor=tribunas*cantidad;
        alert("El total por ir a la tribuna " +Tribunas+ " es $" +valor)
    }
}