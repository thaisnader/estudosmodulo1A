// operação matemáticas em valores numéricos. 
//adição(+)
//subtração(-)
//multiplicação(*)
//divisão 

//módulo(%)
//exponencial(**)
//incrementar(++)
//decrementar(--);

// calculadora.js 


// Função que simula a operação de uma calculadora 

function calculadora(num1, num2){

    // operações aritméticas básicas 
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;


    //incremento e decremento 
    //vamos incrementar num1 
    let incrementar = num1;
    incrementar++; 

    //vamos decrementar num2
    let decrementar = num2;
    decrementar--;

    //exibindo os resultados no console 

    console.log(`Adicão (${num1} + ${num2}) = ${adicao}`);
    console.log(`subtração (${num1} - ${num2}) = ${subtracao}`);
    console.log(`multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`divisão (${num1} / ${num2}) = ${divisao}`);
    console.log(`módulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`incrementar (${num1} ++ ${num2}) = ${incrementar}`);
    console.log(`decrementar (${num1} - ${num2}) = ${decrementar}`);
}

//Executando a função calculadora 
//calculadora();

calculadora(10, 5);

    
    
    
    
    
    
    


