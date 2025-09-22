import prompt from "prompt-sync";
import { Lancamento } from "./lancamento";

let control: Lancamento = new Lancamento(0, 0, 0, 0, 0);
let teclado = prompt();
let option: number = 0;

while (option !== 9) {
  console.log("=========Menu=========");
  console.log("1. Lançar Notas ");
  console.log("9. Sair");

  option = +teclado("Escolha uma opção: ");
  switch (option) {
    case 1:
      let pnota: number = +teclado("Digite a primeira nota: ");
      let snota: number = +teclado("Digite a segunda nota: ");
      let tnota: number = +teclado("Digite a terceira nota: ");
      let unota: number = +teclado("Digite a quarta nota: ");
      control.avaliacao(pnota, snota, tnota, unota);
  }
}
