var prompt = require("prompt-sync")();
let rodadas = "";
let escolha = "";
let replay = ""


do {
  rodadas = prompt("Quantas Rodadas deseja jogar? ");
  let placarjogador = 0;
  let placarpc = 0;
  
  let escolha_pc = "";
  const jogue = ["pedra", "papel", "tesoura"];
  
  function jogos() {
    if (escolha == escolha_pc) {
      console.log("A rodada deu empate");
    } else if (escolha == "pedra" && escolha_pc == "tesoura") {
      console.log("Parabéns você ganhou a rodada");
      placarjogador++;
    } else if (escolha == "pedra" && escolha_pc == "papel") {
      console.log("Que pena você perdeu a rodada");
      placarpc++;
    } else if (escolha == "papel" && escolha_pc == "pedra") {
      console.log("Parabéns você ganhou a rodada");
      placarjogador++;
    } else if (escolha == "papel" && escolha_pc == "tesoura") {
      console.log("Que pena você perdeu a rodada");
      placarpc++;
    } else if (escolha == "tesoura" && escolha_pc == "pedra") {
      console.log("Que pena você perdeu a rodada");
      placarpc++;
    } else if (escolha == "tesoura" && escolha_pc == "papel") {
      console.log("Parabéns você ganhou a rodada");
      placarjogador++;
    }
  }
  for(let x = 1 ; x <= rodadas; x++) {
    console.log(`Rodada N° ${x}`)
  escolha = prompt("Faça sua escolha: pedra, papel ou tesoura. ").trim().toLowerCase();
  
  // escolher valor de forma aleatoria
  const valor = Math.floor(Math.random() * jogue.length);
  escolha_pc = jogue[valor];
  console.log(`O computador escolheu ${escolha_pc} `);

  jogos();

  console.log(`Placar computador. ${placarpc}`,`Placar Jogador. ${placarjogador}`);

 
if(placarjogador < placarpc){
  console.log("Que pena você perdeu a rodada")
}
else if (placarjogador > placarpc){
  console.log("Parabéns você ganhou a rodada")
}

}
if(placarjogador < placarpc){
  console.log("Você foi o perdedor")
}else if(placarjogador > placarpc){
  console.log("Parabéns você foi o ganhardor")
}else console.log("A partida terminou empatada.")
replay = prompt('Gostaria de Jogar novamente? ')
}  
while(replay == "sim")