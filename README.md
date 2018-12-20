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

