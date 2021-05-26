var inputs = document.getElementsByClassName("numeros");
var calcular = document.getElementById("calcular");
var restart = document.getElementById("restart");

calcular.addEventListener("click", () => {
    var suma = 0;
    for (let index = 0; index < inputs.length; index++) {
        if(inputs[index].value == ""){
            
            suma = -1;
            break;
        }else if(+inputs[index].value < 0){
            suma = -2;
            break;
        }else{
            suma = suma + (+inputs[index].value);
        }
    }
    if(suma == -1){
        document.getElementsByTagName("p")[0].style.display = 'block';
        document.getElementsByTagName("p")[1].style.display = 'none';
    }else if(suma == -2){
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementsByTagName("p")[1].style.display = 'block';
    }else{
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementsByTagName("p")[1].style.display = 'none';
        document.getElementById("resultadoSuma").innerHTML = suma;
        document.getElementById("resultadoPromedio").innerHTML = suma/inputs.length;
        document.getElementById("box_01").style.display = 'none';
        document.getElementById("box_02").style.display = 'block';
    }
})


restart.addEventListener("click", () => {
    document.getElementById("box_02").style.display = 'none';
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = "";
    }
    document.getElementById("box_01").style.display = 'block';
})