function fuja(){
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

let btn = document.querySelector('button');
let classObj = {
  ori: 'small',
  small: 'medium',
  medium: 'large',
  large: 'ori'
}

btn.addEventListener('click',()=>{
  btn.classList = classObj[btn.classList[0]];
});