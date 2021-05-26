var input01 = document.getElementById("dias");
var verDias = document.getElementById("ingresarDias");
var operacion = document.getElementsByClassName("btn-info");
var palabraDias;

verDias.addEventListener("click", () => {
    if(input01.value == ""){
        document.getElementsByTagName("p")[0].style.display = 'block';
    }else{
        if(+input01.value <= 1){
            palabraDias = " día";
        }else{
            palabraDias = " días";
        }
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementById("box_01").style.display = 'none';
        document.getElementById("box_02").style.display = 'block';
        document.getElementById("diasOriginal").innerHTML = input01.value + palabraDias;
        document.getElementById("resultado").innerHTML = calculaDias(+input01.value);
    }
})




restart.addEventListener("click", () => {
    document.getElementById("box_02").style.display = 'none';
    input01.value = "";
    document.getElementById("box_01").style.display = 'block';
})

function calculaDias(dias){
    let anos,semanas,resto;
    palAnos = " años, ";
    palSem = " semanas, ";
    palDay = " días";
    if(dias%365 == 0){
        anos = dias/365;
    }else{
        anos = Math.floor(dias/365);
    }
    let diasRestantesSemanas = dias - (365*anos);
    if(diasRestantesSemanas%7 == 0){
        semanas = diasRestantesSemanas/7;
    }else{
        semanas = Math.floor(diasRestantesSemanas/7);
    }
    resto = diasRestantesSemanas -(semanas*7);
    if(anos == 1){
        palAnos = " año, ";
    }
    if(semanas == 1){
        palSem = " semana, ";
    }
    if(resto == 1){
        palDay = " día";
    }
    return anos + " años, " + semanas + " semanas, " + resto + " días";
}