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
    let cantidad=document.getElementById("cantidad").value;
    console.log(cantidad)
    if (productos=="Hamburguesa"){
        let producto= 5000;
        let valor=producto*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (productos=="Perro"){
        let producto= 2500;
        let valor=producto*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (productos=="Ensalada"){
        let producto= 1300;
        let valor=producto*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (productos=="Sandwich"){
        let producto= 2000;
        let valor=producto*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (productos=="Taco"){
        let producto= 1500;
        let valor=producto*cantidad;
        alert("El total por empanadas es $"+valor)
    }
    if (productos=="Comida china"){
        let producto= 4200;
        let valor=producto*cantidad;
        alert("El total por empanadas es $"+valor)
    }
}