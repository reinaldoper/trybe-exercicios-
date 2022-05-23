function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //exercicios 01
  
  function createNovembro(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dayNovember = document.querySelector("#days");
    for(let i =0; i < dezDaysList.length; i ++){
        const dyaNov = dezDaysList[i];
        const colocaArray = document.createElement("li");
        colocaArray.innerHTML = dyaNov;
        dayNovember.appendChild(colocaArray);
        dayNovember.className = "day";
        if(dyaNov === 24 || dyaNov === 25 ||dyaNov === 31){
            dayNovember.className = "holiday";
        }
        if(dyaNov === 4 || dyaNov === 11 ||dyaNov === 18 || dyaNov === 25){
           dayNovember.className = "friday";
        }
    }
  }
  createNovembro();


  //exercicio 2 - implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
 let nomeFeriado = "Feriados";
  function dayFeriados(nomeFeriado){
    let botao = document.createElement("button");
    botao.innerHTML = nomeFeriado;
  }
  dayFeriados();


  //exercicio 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
  const clickButton = document.querySelector("button");
  clickButton.addEventListener("click", mudaCorBotao);
  function mudaCorBotao(){
      let coresClasses = document.querySelector(".holiday");
      coresClasses.style.background = "red";
  }
  mudaCorBotao();


  // exercicio 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira". Adicione a este botão o ID "btn-friday". Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
  let nomeSexta = "Sexta-feira";
  function daySexta(nomeSexta){
    let pai = document.querySelector(".buttons-container");
    let botaoSexta = document.createElement("button");
    pai.appendChild(botaoSexta);
    botaoSexta.innerHTML = nomeSexta;
    pai.id = "btn-friday";
  }
  daySexta();

  //exercicio 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.





