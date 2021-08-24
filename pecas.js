const listaDePecas = ["Biela", "chave Sextavada","metro de tubo", "Chave allen","Item novo","parafuso","prego", "martelo", "Peça de madeira"]

console.log(listaDePecas)

if(listaDePecas.length<10) {
    console.log("Pode continuar cadastrando mais peças")
}else {
    console.log("não há mais espaço na lista")
}

var peso = 300

if(peso>=100) {
    console.log("O item está com peso aceitável/adequado")
} else {
    console.log("Peço insuficiente, favor inserir um item com peso maior do que 100")
}

let nomePeca = "Biela"

if (nomePeca.length>3) {
    console.log("Nome Adequado, pode cadastrar")}
else if (nomePeca.length==0) {
    console.log("O nome do item não pode ser vazio")
}   else {
    console.log("O nome deve possuir mais do que 3 caracteres")
}

//Lembrar que podemos utilizar o "Switch" e inúmeros Cases, para fazer uma validação de 3 casos no lugar do "If, Else If, Else."
//Abaixo segue a mesma validação feita utilizando Switch/case

//-Considere aqui o mesmo Var ou Let mencionado no exemplo da validação acima.//

switch (nomePeca) {
    case 0: 
        console.log("O nome do item não pode ser vazio")
        break
    case 1:
    case 2:
    case 3:
        console.log ("O nome deve possuir mais do que 3 caracteres")
    //ao inserir os 3 cases, um abaixo do outro, sem o comando, está igualando as cases, e a última gera o comando do Console log.
    default:
        console.log ("Nome Adequado!!")
        break}
    //Default, nesse caso, é o que diz o "se não se encaixar nas cases"
    //Lembrando que é mais recomendado utilizar o Switch e Case quando é uma análise específica
    //O if e o else, ou if, else if, else, é melhor quando se trata de Intervalos, principalmente intervalos de números.
