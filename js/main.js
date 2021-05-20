



function clickou(){
    document.getElementById("obg").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("https://google.com");
    //window.location.href = "https://google.com";
}
function trocar(elemento) {
    //document.getElementById("move").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("move").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passa o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


// function soma(n1, n2){
//     return n1 + n2
// }

// function validaIdade(idade){
//     if(idade >= 18){
//         var validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));


//alert(soma(2,5));

// var d = new Date();
// console.log(d.getMinutes());


// var count;
// for(count=0; count <= 5; count++){
//     console.log(count);
// }


// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }


// var idade = prompt("Qual sua idade");
// //var idade = 18;
// if(idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade");
// }


// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
// console.log(frutas[1].nome + " - " + frutas[1].cor);


// var fruta = {nome:"maça", cor:"vermelho"}
// console.log(fruta.nome);


// var lista = ["maca","banana","uva"];
// console.log(lista[1]);
// lista.push("laranja");
// //console.log(lista);
// lista.pop("laranja");
// console.log(lista.toString());
// console.log(lista.join(" - "));



/*
var nome = "Eren Yeager";
var idade = 22;
var idade2 = "10";
var frase = "São Paulo melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase.replace("São Paulo","Brasil"))
console.log(frase.toUpperCase());
*/