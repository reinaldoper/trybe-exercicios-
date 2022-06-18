let clickCount = 0;
document.querySelector('#botao').addEventListener('click', () => {
    document.getElementById("atualiza").innerHTML = ++clickCount;
});

document.querySelector('#reset').addEventListener('click', () => {
    clickCount = 0;
    document.getElementById("atualiza").innerHTML = clickCount;
})

