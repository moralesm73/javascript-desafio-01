var input01 = document.getElementById("numero01");
var input02 = document.getElementById("numero02");
var verOperaciones = document.getElementById("ingresarNumeros");
var operacion = document.getElementsByClassName("btn-info");
var restart = document.getElementById("restart");

verOperaciones.addEventListener("click", () => {
    if(input01.value == "" || input02.value == ""){
        document.getElementsByTagName("p")[0].style.display = 'block';
        document.getElementsByTagName("p")[1].style.display = 'none';
    } else if(+input01.value <= 0 || +input02.value <= 0 ){
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementsByTagName("p")[1].style.display = 'block';
    }else {
        document.getElementById("box_01").style.display = 'none';
        document.getElementById("box_02").style.display = 'block';
    }
})

for (let index = 0; index < operacion.length; index++) {
    operacion[index].addEventListener("click", () => {
        if(index == 0){
            let resultado = sumar(+input01.value,+input02.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("operacion").innerHTML = "suma";
            document.getElementById("resultado").innerHTML = resultado;
        } else if(index == 1){
            let resultado = restar(+input01.value,+input02.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("operacion").innerHTML = "resta";
            document.getElementById("resultado").innerHTML = resultado;
        } else if(index == 2){
            let resultado = dividir(+input01.value,+input02.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("operacion").innerHTML = "división";
            document.getElementById("resultado").innerHTML = resultado;
        } else if(index == 3){
            let resultado = producto(+input01.value,+input02.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("operacion").innerHTML = "producto";
            document.getElementById("resultado").innerHTML = resultado;
        } else if(index == 4){
            let resultado = modulo(+input01.value,+input02.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("operacion").innerHTML = "módulo";
            document.getElementById("resultado").innerHTML = resultado;
        }
    })
}

restart.addEventListener("click", () => {
    document.getElementById("box_03").style.display = 'none';
    input01.value = "";
    input02.value = "";
    document.getElementById("box_01").style.display = 'block';
})

function sumar(n1, n2){
    return n1 + n2;
}

function restar(n1, n2){
    return n1 - n2;
}

function dividir(n1, n2){
    return n1 / n2;
}

function producto(n1, n2){
    return n1 * n2;
}

function modulo(n1, n2){
    return n1 % n2;
}