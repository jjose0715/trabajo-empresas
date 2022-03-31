let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let ciudad=document.getElementById("ciudad").value;
    console.log(ciudad)
    {
        if (ciudad=="Medellin"){
            let Ciudad="Agosto 8";
            alert ("El concierto en " +ciudad+ " es el "+Ciudad)
        }
        else if (ciudad=="Bogota"){
            let Ciudad="Agosto 11";
            alert ("El concierto en " +ciudad+ " es el "+Ciudad)
        }
        else if (ciudad=="Cali"){
            let Ciudad="Agosto 15";
            alert ("El concierto en " +ciudad+ " es el "+Ciudad)
        }else{
            alert ("perdon pero no hay ningun concierto para "+ciudad)
        }
    }
}