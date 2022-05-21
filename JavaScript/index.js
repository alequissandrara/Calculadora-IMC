const calcular = document.getElementById ('calcular')

function imc () {//Declaração das constantes
    const nome = document.getElementById ('nome').value
    const altura = document.getElementById ('altura').value
    const peso = document.getElementById ('peso').value
    const resultado = document.getElementById ('resultado')

    
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1)//cálculo do IMC

        let classificacao = ''

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso'//resultado do IMC 
            document.getElementById("imagem1").innerHTML = "<img src='img/3.png' width='250'>" //adicionando a imagem que vai ser encaminha ao index.HTML na id="imagem1".

            
        }else if (valorIMC < 25){
            classificacao = 'com o Peso Ideal. Parabéns!!!'
            document.getElementById("imagem1").innerHTML = "<img src='img/1.png' width='250'>"

        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso'
            document.getElementById("imagem1").innerHTML = "<img src='img/2.png' width='250'>"

        }else if (valorIMC < 35){
            classificacao = 'com Obesidade grau I'
            document.getElementById("imagem1").innerHTML = "<img src='img/4.png' width='250'>"

        }else if (valorIMC < 40){
            classificacao = 'com Obesidade grau II'
            document.getElementById("imagem1").innerHTML = "<img src='img/5.png' width='250'>"

        }else {
            classificacao = 'com Obesidade grau III. Cuidado!!'
            document.getElementById("imagem1").innerHTML = "<img src='img/5.png' width='250'>"
        }
 
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}` 

    } else{
        resultado. textContent = 'Preencha todos os campos'
    }


}

calcular.addEventListener('click',imc)