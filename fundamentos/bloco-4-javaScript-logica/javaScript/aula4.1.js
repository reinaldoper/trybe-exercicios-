const a = 2;
const b = 3;
const c = 9;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//segunda parte

if(a>b){
    console.log("O "+a+" é maior que "+b);
}
else{
    console.log("O "+b+" é maior que "+a);
}
// terceiro exercicio
if(a > (b && c)){
    console.log(a);
}else if(b > (a && c)){
    console.log(b);
}else{
    console.log(c);
}

//quarto exercicios
if(a > 0){
    console.log("positive");
}else if(a < 0){
    console.log("negative");
}else{
    console.log("Zero");
}

//quinto exercicio
 const angulo1 = 120;
 const angulo2 = 120;
 const angulo3 = -1;
if((angulo1 + angulo2 + angulo3) === 180){
    console.log(true);
}else if((angulo1 + angulo2 + angulo3)  < 180){
    console.log(false);
}else if((angulo1 && angulo2 && angulo3)  < 0){
    console.log("Invalido");
}else{
    console.log("Erro!");
}
 // sexto exercicios

 const pecaXadres = "BisPo";
 const pecaXadres1 = pecaXadres.toLowerCase();

 switch (pecaXadres1){
    case "bispo":
        console.log("Movimenta na transversal.");
        break;
    case "piao":
        console.log("Movimenta só1 casa para qualquer lado!");
        break;
    case "torre":
        console.log("Movimenta orizontamente e verticalmente em linha reta.");
        break;
    case "rainha":
        console.log("Movimenta só uma casa, para qulquer lado!");
        break;
    default:
        console.log("Peça inválida!");
 }



