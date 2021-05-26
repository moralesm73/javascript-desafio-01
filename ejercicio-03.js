var input01 = document.getElementById("gradosCelsius");
var verGradoCelsius = document.getElementById("ingresarGrados");
var operacion = document.getElementsByClassName("btn-info");

verGradoCelsius.addEventListener("click", () => {
    if(input01.value == ""){
        document.getElementsByTagName("p")[0].style.display = 'block';
    }else{
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementById("box_01").style.display = 'none';
        document.getElementById("box_02").style.display = 'block';
    }
})

for (let index = 0; index < operacion.length; index++) {
    operacion[index].addEventListener("click", () => {
        if(index == 0){
            let resultado = toKelvin(+input01.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("gradoOriginal").innerHTML = input01.value + " &deg;C";
            document.getElementById("resultado").innerHTML = resultado + " &deg;K";
        } else if(index == 1){
            let resultado = toFarenheit(+input01.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("gradoOriginal").innerHTML = input01.value + " &deg;C";
            document.getElementById("resultado").innerHTML = resultado + " &deg;F";
        }
    })
}


restart.addEventListener("click", () => {
    document.getElementById("box_03").style.display = 'none';
    input01.value = "";
    document.getElementById("box_01").style.display = 'block';
})

function toKelvin(gradoCelsius){
    return gradoCelsius + 273.15;
}

function toFarenheit(gradoCelsius){
    var parent = (gradoCelsius*9)/5;
    return parent + 32;
}