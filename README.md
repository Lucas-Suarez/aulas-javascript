# JavaScript

*JavaScript* é uma linguagem de programação muito usada, nos dias de hoje, Utilizada bastate para criação de aplicativos híbridos para smartphones, desenvolvimento web, dentre outras finalidades.

## Configurando o ambiente

Primeiro para que possamos ter uma **página web** ou uma **aplicação mobile** com uma estrutura de código mais dinâmica, é interessate usarmos as tags <script></script> no final da tag <body></body>, antes do fechamento da tal, como é representado abaixo.

```Html
<html>
<head>
.
.
.
</head>

<body>
.
.
.
  <script type="text/javascript" src="index.js"></script>
</body>
</html>
```
## Exibindo resultados

Para que posssamos ver através do nosso navegador os *logs*, nosso resultados da aplicação, que está sendo executado e quando está sendo executado usamos o *script* abaixo.

```javascript
console.log('Hello World');
```
Esse *script* é um usado de forma global, ou seja, é uma linha de código universal utilizado na linguagem **JavaScript**.

O *script* ```console.log('mensagem exemplo');``` é usado para exibir qualquer tipo de mensagem no console do navegar, como por exemplo, números, textos ou até mesmo exibir informções coletadas a partir das ações do usuário.

## Variáveis Primitivas e Dados

Na linguagem *javascript* quando o assunto é variáveis, não é preciso setar o tipo de variável como é apresentado em outras linguagens de programação, como por exemplo, ```String```, ```int```, ```boolean```, dentre outros tipos, ou seja, são tipagens dinâmicas.

para que possamos declarar uma **variável** é preciso escrevermos o sguinte código:

```javascript
//código javaScript
var nome = "Lucas";
```
### Tipos de variáveis

Na liguagem *javascript* temos muitos tipos de váriaveis, abaixo pode-se observar os tipos mais usados.

**Obs.: Os tipos abaixo são apenas para fins ilustrativos, não é necessário declararmos nas variáveis pelo fato delas serem dinâmicas.**

#### Strings (textos)

Tipos de variáveis que armazenam apenas textos;
```javascript
var nome = "Lucas";
```
#### Números inteiros (int)

Tipos de variáveis que armazenam apenas números inteiros;
```javascript
var idade = 19;
```
#### Números decimais (float)

Tipos de variáveis que armazenam números inteiros e decimais;
```javascript
var peso = 60.5;
```

#### Verdadeiro ou falso (boolean)

Tipos de variáveis que armazenam resultados verdadeiros ou falsos;
```javascript
var humano = true;
```

#### Vetores

Os vetores são nada mais que *arrays*, que na linguagem *javascript* são ecritas em forma de variáveis.

```javascript
var alunos = ['Lucas', 'Carol', 'Ana', 'Samuel'];
```

#### Objetos

Os objetos são itens que possuem *atribtos* e *ações* que no **javascript** são dlecrados como variáveis.

```javascript
var aluno = {
nome: 'Lucas',
idade: 19,
peso: 60.5,
humano: true
};
```

## Exibindo no console

Para que possamos exibir todos essas informações no console, devemos seguir algumas regras de exibição.

#### Exibindo váriaves

```javascript 
console.log(nome, idade, peso, humano);
```
#### Exibindo Vetor

*Com esse código será exibido todos itens existentes no array*

```javascript 
console.log(alunos);
```

#### Exibindo Vetor (item específico)

*Com esse código será exibido apenas o item corresnpondente*

```javascript 
console.log(alunos[1]);
```

#### Exibindo Objeto

*Com esse código será exibido todos os atributos do objeto*

```javascript 
console.log(aluno);
```
#### Exibindo Objeto Específico

*Com esse código será exibido apenas o atributo especificado*

```javascript
console.log(aluno.nome);
```
## Operações matemáticas

### Criando variáveis

As opreções matemáticas são usadas para fazer cálculos entre valores que são armazenados em variáveis.

para que possamos executar essas operações precisamos criar algumas variáveis, nesse caso serão usadas apenas duas.

```javascript
var x = 10, y = 5;
var resultado = (exemplo de cálculo);
```
```javascript
var x = 10;
var y = 5;
var resultado = (exemplo de cálculo);
```

**Obs.: As duas formas de declararmos um variável está correta porém, a  primeira é a mais recomendada pois, economiza linhas de código, logo trazendo uma experiência mais rápida para o usuário.**

### Criando cálculos

#### Soma

Para executarmos os calculos de adição é bem simples, basta usar o `+`, como é exemplificado.

```javascript
//cálculo e exibição
var x = 10, y = 5;
var resultado = x + y;

console.log(resultado);

//console
resultado -> 15;
```
Caso trocarmos os valores da váriavel `x`, que nesse caso é inteiro por um as variáveis serão concatenadas, ou seja, ao invés somar `x + y` irá uni-las.

```javascript
//cálculo e exibição
var x = 10, y = "5";
var resultado = x + y;

console.log(resultado);

//Console
resultado -> 105;
```

Observe que o variável `y` é uma *String* pois, está entre áspas.

#### Subtração

Para executarmos os calculos de subtração é bem simples, basta usar o `-`, como é exemplificado.

```javascript
var x = 10, y = 5;
var resultado = x - y;

console.log(resultado);

//console
resultado -> 5
```
#### Multiplicação

Para executarmos os calculos de multiplicação é bem simples, basta usar o `*`, como é exemplificado.

```javascript
var x = 10, y = 5;
var resultado = x * y;

console.log(resultado);

//console
resultado -> 50
```

#### Divisão

Para executarmos os calculos de divisão é bem simples, basta usar a `/`, como é exemplificado.

```javascript
var x = 10, y = 5;
var resultado = x / y;

console.log(resultado);

//console
resultado -> 2
```

#### Módulo

O módulo é usado para descobrir o resto de uma divisão, para que possamos fazer esse cálculo usamos o sinal de `%`, como está exemplificado.

```javascript
//cálculo e exibição
var x = 11, y = 5;
var resultado = x % y;

console.log(resultado);

//console
resultado -> 1
```
Caso queiramos incrementar os valores nas nossas variáveis podemos fazer da seguinte maneira.

```javascript
//cálculo e exibição
var x = 10, y =5;
var resultado = x + y;

console.log(resultado);

//incremento
x = x + 3;

console.log(x);

//console
resultado -> 15
x -> 13
```
**OU**
```javascript
//cálculo e exibição
var x = 10, y =5;
var resultado = x + y;

console.log(resultado);

//incremento
x += 3;

console.log(x);

//console
resultado -> 15
x -> 13
```
**Obs.: Podemos ver que temos duas formas de incrementar as nossas variáveis porém, a mais prática é a segunda. É possível adicionarmos qualquer sinal das operações matemáticas (+), (-), (/), (*) e  qualquer outra váriavel**

## Funções

*Funções* são blocos de código usados para executar uma tarefa, ou calcular um valor.
Para criar uma função é relativamente simples, nesse exemplo usaremos uma função de cálculo de adição.

```javascript
//Função
function soma(numero1, numero2) {
  var resultado = numero1 + numero2

//Retorno
  return resultado
}

//Execução
var resultado = soma(1, 2)

//Exibição
console.log(resultado);
```
É importante entendermos que quando trata-se de **variáveis**, podemos adicionar a mesma variável em diversos lugares do código pois, é considerado no código apenas dentro do seu próprio escopo, como é mostrado no exemplo a cima.

## Estruturas condicionais

Estruturas condicionais *Javascript*, são como estruturas condicionais na maioria das linguagens de programação existentes, as utilizamos para verificar uma condição e definir se algo deve ou não acontecer, para que possamos por isso em prática é relativamente simples, observe:

```javascript
//Função
function retornarsexo(sexo) {

  if (sexo == 'M') {

    return 'Masculino';
  }else if {
    return 'Feminino';
  }else {
    return 'Outro';
  }
}

//Resultado da função
var resultado = retornarsexo ("M")

//Exibição
console.log(resultado);
```
**Obs.: Como o resultado é 'M' o "if" executou  sua função e retornou "Masculino", se o resultado fosse 'F' cairia no else if e retornaria "Feminino" e se fosse qualquer outro sexo cairia no "else" que retornaria "outro".**

### Condição if

Podemos observar que para que a condição `if` funcione temos que usar o termo `==` mas, o que esse?! Basicamente o `==` server para comparar, nesse caso, se *sexo* é igual a *M*. 
Temos também o termo `===` que da mesma forma do primeiro serve para comparar, mas com esse termo a comparação se torna mais rígida, ele compara, nesse caso, se *sexo* é *M* e também compara se são do mesmo tipo. 

### Condição else if

Tem a mesma função do `if` e diferente do `else` pois, ele não apenas executa a ordem quando a função anterior não funciona, mas também ele executa uma função antes de executar a ordem, como é visto no exemplo.

### Condição else

Usamos o `else` para dizer que se caso o `if` for falso, então ele executará outra ação, como é visto no exemplo a cima.

## Switch case

Quando temos um caso de trabalho em massa em cima de uma única variável é interessante usarmos a condicional `switch case`, pois com ela você pode executar varias funções e ações com mais praticidade, como segue o exemplo.

```javascript
//Função
function retornarsexo(sexo) {
  switch (sexo) {
    case 'M':
      return 'Masculino';
    case 'F':
      return 'Feminino';
    default:
      return 'outro';
  }
}
```
## Operadores Lógicos

Os operadores lógicos são normalmente usados com valores booleanos (lógicos), Quando estão, eles retornam um valor booleano, como é mostrado no exemplo.

Existem três tipos de operadores lógicos.

### Operador && 

Esse operador (e/and), faz a comparação de dois elementos no bloco de código, tem a função de fazer duas comarações no mesmo `if` ou qualquer outro condicional. Como mostra o exemplo abaixo.

```javascript
//função
var sexo = 'M', idade = 19;

if (sexo === 'M' && idade >= 18) {
  console.log('Sexo Masculino e maior de idade');
}

//console
Sexo Masculino e maior de idade
```
No exemplo podemos observar que a ação só será verdadeira se as duas partes forem verdadeiras, caso contrário não retornar o `if`.

### Operador ||

Com esse operador (ou/or) podemos comparar dois itens e ver se um dos dois é verdadeiro caso seja ele retornará a função, caso contrário ele não entrará no bloco, como é ilustrado no exemplo.

```javascript
//função
var sexo = 'M', idade = 19;

if (sexo === 'M' || idade >= 18) {
  console.log("Ok");
}

//console
Ok
```

### Operador !==

Esse operador (não/desigualdade ou not) é utilizado para verificar a desigualdade dos elementos, caso ele seja diferente do que é setado retornar *ok*, como é visto no exemplo.

```javascript
//função
var sexo = 'M';

if (sexo !== 'F') {
  console.log(Ok);

//console
Ok
}
```
Existem duas formas de simplificar essa função:

**1. Armazenando valor em variáveis**

Com esse método os valores que são retornado em console a partir das função serão exibidos de formas iguais, porém em um código mais leve. Observe o exemplo.

```javascript
//função
var sexo = 'F';
var resultado;

if (sexo !== 'M') {
  resultado = true;
}else {
  resultado = false;
}

//exibição
console.log(resultado);
```

**2. Armazenando a função em variável**

Com esse método a função que será executada terá o mesmo efeito, porém em um código mais leve. Observe o exemplo.

```javascript
//função
var sexo = 'F';

var resultado = sexo === 'M';

console.log(masculino);
```
## Condição ternária

O operador condicional *ternário* é o único operador `JavaScript` que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução `if`, ou seja, o condicional serve para simplifar a função simples que verifique apenas uma variante, como é apresentado no exemplo.

```javascript
// função comum
var sexo = 'M';

if (sexo === 'M') {
return 'Masculino';
} else {
return 'Feminino';
}

Console.log(sexo);

//console
Masculino
```
**Com o condicional ternário**

```javascript
var sexo = 'M';

var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';

console.log(retorno);

//console
Masculino
```
Observe que nos dois blocos de códigos a exibição final é a mesma, porém na condição ternária usa-se o sinal de interrogação `?` para representar a ação do `if` e o sinal de dois pontos `:` para representar a ação do `else`.

## Estruturas de repetição

As **Estruturas de repetição** tem serventia ao programador a executar um determinado bloco de código um determinado número de vezes, de acordo com sua necessidade ao escrever o script. Temos dois `loops` mais usados na linguagem`javscript`.

### for

Esse `loop` é geralmente mais usado quando sabemos o tamanho do intervalo, ou seja, quando sabemos até quando é necessário repetir, abaixo vemos o código.

```javascript
//loop for
for (var i = 0; i >= 10; i++) {
  console.log(i);
}
```

### while

Esse tipo de `loop` é usado quando não sabemos a dimensão do intervalo, ou seja, quando precisamos usar algo a mais para descobrir, como mostra o exemplo.

```javascript
var j = 12141312 //numero aleatório

while (j < 50) {
  console.log(j);

  j /= 5;
}
```

Nesse exemplo a cima não possível sabermos quantas vezes o `j` deve ser executado até ser menor que 50, logo se aplica perfeitamente ao `loop while`.

## Intervalo e timeout

Esses métodos tem como servem para fazer com que uma função seja executada um número *X* de vezes ou com um delay sendo, o `intervalo` responável pela repetição da execução e `timeout` responsável pelo delay da execução, como é apresentado nos exemplos.

**Função com intervalo**

```javascript
function exibialgo() {
  console.log('Exibição do intervalo!')
};

setInterval(exibialgo, 1000);
```
A função deve ser passada sem o parentêses, pois sem o parênteses ele executará a função diversas vezes dentro do intervalo de tempo caso contrário, Ele é executado apenas uma vez, pois ele ja foi chamado de imediato. O valor do intervalo é passado com uma contagem de milissegundos, ou seja, o intervalo a cima será de um segundo.

**Função com timeout**

```javascript
function exibialgo() {
  console.log('Exibição do timeout!')
};

setTimeout(exibialgo, 3000);
```
Com esse método a função será exibida após 3 segundos.

## DOM

A **DOM** é árvore de elementos que compõem o arquivo `.html`, ou seja, a **DOM** é responável pode manipular todos os eventos relacionados ao objetos `html` da aplicação, como por exemplo se o usuário clicou em algum botão, se ele passou o mouse por cima de uma imagem com houver e dentre muitas outras funções.

Para que possamos entender melhor como funciona a manipulação de *eventos inline* vamos exemplificar. Digamos que temos um botão e queremos alertar quando o usuário clicar no botão, para isso criamos o botão no nosso `index.html`, como mostra o exemplo.

```html
<html lang="pt-br">
  <head>
    <title>Curso JavaScript</title>
    <meta charset="utf-8">
  </head>

  <body>
    
    <div id="app">
      <button>Click me</button>
    </div>

    <script type="text/javascript" src="index.js"></script> 
  </body>
</html>
```
Após a criação do botão precisamos criar um script para que alerte o evento acontecido.

```javascript
function exibeAlerta() {
  alert ("Botão foi clicado!");
} 
```
com essa função é passado para a aplicação que toda vez que o botão for clicado exibirá essa mensagem, em uma caixa de diálogo da página, porém somente essa função não é o suficiente para que a aplicação funcione, então vamos para seunda parte. Logo após a criação da função devemos adicionar uma ação no nosso botão, como é visto no exmplo.

```html
html lang="pt-br">
  <head>
    <title>Curso JavaScript</title>
    <meta charset="utf-8">
  </head>

  <body>
    
    <div id="app">
      <button onclick="exibeAlerta()">Click me</button>
    </div>

    <script type="text/javascript" src="index.js"></script> 
  </body>
</html>
```
Com essa ação do `onclick` é dito para a palicação que quando tiver um cick no botão a função será executada, e assim  a caixa de diálogo será exibida.


## Trabalhando com a DOM

O que vai ser testa do agora é como referenciar elementos da **DOM**, ou seja, do arquvo `html` com os códigos `javascript` para isso vamos criar uma estrutura no nosso código html.

```html
html lang="pt-br">
  <head>
    <title>Curso JavaScript</title>
    <meta charset="utf-8">
  </head>

  <body>
    
    <div id="app">
      <input type="text" name="nome" id="textbox" class="nome" />
      <button class="botao">Adicionar</button>
    </div>

    <script type="text/javascript" src="index.js"></script> 
  </body>
</html>
```
Com esse esses elementos criados já podemos prosseguir com para a criação do código `javascript`, para que possamos ter o funcionamento desses elementos énecessário o seguinte código.

```javascript
var inputElement = document.getgetElementById('textbox');
var inputElement = document.getgetElementByTagName('input');
var inputElement = document.getElementByClassName('nome')
```
Com uma dessas variáveis setada podemos acessar o nosso `input` sendo que, `getgetElementById` serve para acessar o input ou qualquer outro elemento da **DOM** pelo ID e com isso ele só acessa um pois, o ID é único no `HTML`, o `getgetElementByTagName` ele acessa pela tag usada, que nesse caso é o input, logo acessa todos os inputs presentes na DOM por isso caso pormos um `console.log(inputElement)` teremos o retorno de um array, pois caso exista mais de um input será retornado todos existentes e por fim podemos acessar o mesmo objeto através da classe usando o `getElementByClassName` que da mesma forma que o `getgetElementById` terá o retorno em array.

Temos também uma forma mais simples de encontrar referenciar e encontrar nossos objetos usando o `querySelector`, com isso podemos andar pela nossa DOM, digamos assim, basta dizer onde está ou especificar o objeto, como é paresentado no exemplo.

```javascript
var inputElement = document.querySelector('div#app input');
// OU //
var inputElement = document.querySelector('input[name=nome]');

//exibindo.no.console
console.log(inputElement);
```
**Obs.: O `console.log` serve apenas para visualizarmos se realmente buscou a tag esperada e o parentêses usamos para especificar um objeto, que nesse caso foi pelo nome**

Caso queiramos que acesse mais de um objeto basta adicionarmos **All** ao querySelector, dessa forma:

```javascript
var inputElement = document.querySelectorAll('input');

//exibindo.no.console
console.log(inputElement);
```

Anteriormente foi usado uma ação chamada `onclick` para fazer com que executasse uma função de *javascript* , porém era usada no próprio botão `HTML`, mas agora vamos a um exemplo que podemos usar esse comando em javascript.

```javascript
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function() {
  alert ('Botão clicado!');
}
```

Podemos incrementar ainda mais essa nossa função fazendo com que exiba em tela o que for escrito dentro do nosso `input`.

```javascript
var inputElement = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function() {
  var text = inputElement.value;

  alert (text);
}
```

Com essa funão estamos dizendo a aplicação que quando clicarmos no botão ele exibirá em tela o texto escrito no nosso input.