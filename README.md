📘 LancamentoNotas
Este projeto em TypeScript permite o lançamento de quatro notas escolares e calcula a média final do aluno, informando se ele foi aprovado ou reprovado com base na média.

🚀 Funcionalidades
Entrada interativa de notas via terminal

Cálculo automático da média

Verificação de aprovação (média ≥ 60)

Menu simples e intuitivo

🛠️ Tecnologias Utilizadas
TypeScript

Node.js

prompt-sync

📦 Estrutura do Projeto
Código
LancamentoNotas/
├── lancamento.ts         # Classe principal com lógica de avaliação
├── main.ts               # Interface de menu e entrada de dados
├── package.json          # Metadados e dependências do projeto
├── package-lock.json     # Controle de versões das dependências
├── tsconfig.json         # Configuração do compilador TypeScript
└── node_modules/         # Dependências instaladas
📄 Como Executar
Instale as dependências:

bash
npm install
Compile o TypeScript:

bash
npx tsc
Execute o projeto:

bash
node dist/main.js
Certifique-se de que o diretório de saída esteja configurado corretamente no tsconfig.json (ex: "outDir": "./dist").

🧠 Classe Lancamento
A classe Lancamento representa um conjunto de notas e possui métodos para:

Definir e obter cada nota individualmente

Calcular a média das quatro notas

Exibir no console se o aluno foi aprovado ou reprovado

📋 Exemplo de Uso
bash
=========Menu=========
1. Lançar Notas
9. Sair
Escolha uma opção: 1
Digite a primeira nota: 70
Digite a segunda nota: 65
Digite a terceira nota: 80
Digite a quarta nota: 75
Aprovado

📚 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar.