let resultado = document.getElementById("resultado");
let resultadoDoIMC = document.getElementById("resultado2");//para imprimir se o peso está normal ou não
let result = document.getElementById("result");
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let btnCalcular = document.getElementById('calcularId');
let btnApagar = document.getElementById('apagarId');


btnCalcular.addEventListener("click", calcular);
btnApagar.addEventListener("click", apagar);

//calcular IMC  
function calcular(){
    //verificar se foram inseridos dados validos para calcular o imc
    if(peso.value == '' || altura.value == '' || peso.value < 0 || altura.value < 0){
        desabilitarInput();
        
        resultado.innerText  = "Insira os dados corretamente!";
        
        resultado.style.textAlign="center";
        resultado.style.color="red";
        result.style.backgroundColor="black";
        
    }else{
        desabilitarInput();
        
        //imc = kg/altura²
        let imc = peso.value/((altura.value/100)*(altura.value/100));
        imiprimirResultado(imc.toFixed(2)); 
        verificarIMC(imc.toFixed(2));
    }
}

function desabilitarInput(){
    peso.disabled = true;
    altura.disabled = true;
    
    peso.style.backgroundColor="#E1E1E1";
    altura.style.backgroundColor="#E1E1E1";

    peso.style.color="#00b13e63";
    altura.style.color="#00b13e63";

}

//verificar se o IMC é bom ou não
function verificarIMC(imc){
    if(imc < 18.5){
        resultadoDoIMC.innerText = "Você está abaixo do peso";
        resultadoDoIMC.style.color="red";
    }
    else if(imc < 24.9){
        resultadoDoIMC.innerText = "Seu peso está normal";
        resultadoDoIMC.style.color="green";

    }
    else if(imc < 29.9){
        resultadoDoIMC.innerText = "Você está com sobrepeso";
        resultadoDoIMC.style.color="orange";

    }
    else if(imc < 34.99){
        resultadoDoIMC.innerText = "Você está com obesidade de grau I";
        resultadoDoIMC.style.color="red";
    
    }
    else if(imc < 39.99){
        resultadoDoIMC.innerText = "Você está com obesidade de grau II";
        resultadoDoIMC.style.color="red";
    
    }
    else{
        resultadoDoIMC.innerText = "Você está com obesidade de grau III";
        resultadoDoIMC.style.color="red";
    
    }
}
//imprimir resultado
function imiprimirResultado(imc){
    resultado.innerText = `Seu imc é ${imc}`
}

function apagar(){
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    
    window.location.reload();

}

