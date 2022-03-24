let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let empanada=document.getElementById("empanada").value;
    console.log(empanada);
    let nombre=document.getElementById("nombre").value;
    console.log(nombre);
    let cedula=document.getElementById("cedula").value;
    console.log(cedula)
    let correo=document.getElementById("correo").value;
    console.log(correo)
    let cantidad=document.getElementById("cantidad").value;
    console.log(cantidad)

    if (empanada=="empanada de carne"){
        let empanada= 2100;
        let valor=empanada*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (empanada=="empanada de pollo"){
        let empanada= 2500;
        let valor=empanada*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (empanada=="empanada de papa"){
        let empanada= 2000;
        let valor=empanada*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (empanada=="empanada de carne que parece de pollo pero sabe a papa"){
        let empanada= 3000;
        let valor=empanada*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (empanada=="empanada picante"){
        let empanada= 3000;
        let valor=empanada*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (empanada=="empanada de pescado"){
        let empanada= 3000;
        let valor=empanada*cantidad;
        alert("El total por empanadas es $"+valor)
    }
}