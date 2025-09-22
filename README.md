# LancamentoNotas

Um simples programa em **TypeScript** para lançamento de notas e cálculo de média, informando se o aluno está aprovado ou reprovado.

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) (para entrada de dados via terminal)

## Estrutura do projeto

LancamentoNotas/
│
├─ lancamento.ts # Classe Lancamento com métodos de avaliação
├─ main.ts # Arquivo principal com menu interativo
├─ package.json # Dependências do projeto
├─ tsconfig.json # Configuração do TypeScript
├─ README.md # Este arquivo
└─ node_modules/ # Pacotes instalados

bash
Copiar código

## Como executar

bash
Copiar código
cd LancamentoNotas
Instale as dependências:

bash
Copiar código
npm init -y
npm i -g typescript --save
npm i ts-node --save
npm i @types/prompt-sync
npm install prompt-sync
Compile o TypeScript:

bash
Copiar código
npx tsc
Execute o programa:

bash
Copiar código
node main.js
Funcionalidades
Menu interativo via terminal

Lançamento de até 4 notas por aluno

Cálculo automático da média

Indicação de aprovação ou reprovação (média ≥ 60 é aprovado)

Exemplo de uso
yaml
Copiar código
=========Menu=========
1. Lançar Notas
9. Sair
Escolha uma opção: 1
Digite a primeira nota: 70
Digite a segunda nota: 65
Digite a terceira nota: 80
Digite a quarta nota: 75
Aprovado
Licença
Este projeto está licenciado sob a MIT License.