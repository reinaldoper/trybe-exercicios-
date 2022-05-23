const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

/* Por que foi usado um estilo de transladar o eixo y em - 20px. */

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

  let tagSection = document.querySelector("ul");
  let Section = document.createElement("li");
  tagSection.appendChild(Section);
  //---função
  let tahLi = document.querySelector("li");
  tahLi.addEventListener("click", funcLi);
  function funcLi(){
    let Section1 = document.querySelector("Section");
    Section1.className = "tech";
  }
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
  firstLi.className = "tech"; 

  /* Deve-se selecionar pelo id da LI. */

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
  input.addEventListener("keyup",alterarText);
  function alterarText(){
    let alterar = document.querySelector(".tech");
    let text = input.value;
    alterar.innerText = text;
  }

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
      /* myWebpage.addEventListener("click", mandaLink); */
     /*  let clicarVezes = document.querySelector('#my-spotrybefy');
      clicarVezes.addEventListener("click", mandaLink); */
      /* function mandaLink(){
        let vezes = clicarVezes.detail;
        if(vezes === 3){
          vezes = <a href="https://reinaldoper.github.io/"></a>
        }
       
      } */

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
    myWebpage.addEventListener("mouseover", alterarCor);
    myWebpage.addEventListener("mouseleave", mouseSai);
    function alterarCor(){
      myWebpage.style.color = "red";
    }
   
    function mouseSai(){
      myWebpage.style.color = "black";
    }

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.