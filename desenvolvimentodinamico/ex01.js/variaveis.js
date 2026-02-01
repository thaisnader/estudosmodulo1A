// Exemplo de uso de var, let e const em JavaScript 

const externo = 'Olá, eu sou uma constante global!';

// Declaraçao de uma variavel usando var 

function exemploVar() {

    if (true) {
        var mensagem = 'Olá, Faculdade Descomplica! Eu sou uma var... '
    }
    console.log(mensagem)
}

// Chamando a função exemploVar
exemploVar();

// Exemplo de erro e correção 
        var mensagem = 'Olá, Faculdade Descomplica! Escopo externo!'
        console.log(mensagem);

// Declaração de uma variável usando let 
function exemploLet() {
    if (true) {
        let mensagem = 'Olá, Faculdade Descomplica! Eu sou uma let...'
        console.log(mensagem);
    }
}

// Chamando a função exemploLet
exemploLet();

// Exemplo de erro e correção
// Mensagem com o mesmo nome de variavel que a Var não vai rodar. 
let mensagem1 = 'Olá, Descomplica Let externo!'
console.log(mensagem1);


// Declaração de uma constante usando const 
function exemploConst() {
    const mensagem = 'Olá Faculdade Descomplica! eu sou uma constante...';
    console.log(mensagem);
}

// Chamando a função exemploConst 
exemploConst();

// Exemplo externo de const 
console.log(externo);

// Exemplo externo tentar alterar constante global
//let externo = 'Nova mensagem';

