//Váriavel para randomizar números inteiros de 0 a 1000
var numeroSecreto = parseInt(Math.random() * 1001);
var tentativa = 20;

//Loop
while (chute != numeroSecreto) {
  var chute = prompt("Digite um número entre 0 e 1000: ");

  //Incrementação de váriavel
  tentativa = tentativa - 1;

  //Condicional do número secreto
  if (chute == numeroSecreto) {
    alert("Acertou!");
  } else if (chute > numeroSecreto) {
    alert("Errou... O número secreto é menor do que " + chute);
  } else if (chute < numeroSecreto) {
    alert("Errou... O número secreto é maior do que " + chute);
  }

  //Alert de tentativas restantes
  if (chute == numeroSecreto) {
    break;
  } else {
    alert("Você tem " + tentativa + " tentativas restantes!");
  }

  //Condional de fim de jogo
  if (tentativa == 0) {
    alert("Sem tentativas restantes... Fim de jogo!");
    break;
  }
}
