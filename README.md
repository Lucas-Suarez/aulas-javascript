#Aplicação TODO

Essa documentação é voltada a primeira aplicação criada com todos os ensinamentos adquiridos no curso até agora. Será feito uma lista de itens no qual, será possível adicionar e excluir os itens forma.

## Criando uma aplicação de tudo

Primeiro passo é por os elementos em tela com o `HTML`, como mostra o exemplo.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Aplicação Javascript | curso Rocketseat</title>
    </head>
    <body>
        <!--bloco.pricipal.da.aplicação-->
        <div id="app">
            <ul>
                <li>
                    Fazer café
                    <a href="#">Excluir</a>
                </li>
            </ul>
            <ul>
                <li>
                    Estudar Javascript
                    <a href="#">Excluir</a>
                </li>
            </ul>
            <ul>
                <li>
                    Acessar comunidade da Rocketseat
                    <a href="#">Excluir</a>
                </li>
            </ul>

            <!--Caixa.de.texto.e.botão-->
            <input type="text" placeholder="Digite um todo"/>
            <button onclick="alerta()">Adicionar</button>
        </div>

        <!--Referenciando.arquivo.javascript-->
        <script src="index.js"></script>
    </body>
</html>
```

## Iniciando a aplicação

Para começarmos com a codificação da aplicação primeiro precisamos referenciar no nosso `index.js` todos os elementos que vamos usar na nossa aplicação, para isso vamos fazer o seguinte:

```javascript
listElement = document.querySelector('#app ul');
btnElement = document.querySelector('.btn');
inputElement = document.querySelector('.textbox');
```

Como nossa lista vai ser algo flexível, que será excluido e adiconado itens a ela, é interessante colocarmos essa lista para dentro do nosso arquivo *javascript*, dessa seguinte maneira.

**HTML final**
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Aplicação Javascript | curso Rocketseat</title>
    </head>
    <body>
        <!--bloco.pricipal.da.aplicação-->
        <div id="app">
            <ul></ul>

            <!--Caixa.de.texto.e.botão-->
            <input class="textbox" type="text" placeholder="Digite um todo"/>
            <button class="btn">Adicionar</button>
        </div>

        <!--Referenciando.arquivo.javascript-->
        <script src="index.js"></script>
    </body>
</html>
```

**Adiconando a lista ao index.js**
```javascript
var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
];
```

## Renderizando os TODOS

Para que possamos exibir a nosssa lista em tela precisamos criar uma função, logo devemos prosseguir da seguinte forma:

```javascript
function rendertodos () {
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

rendertodos(); // apenas para executar de e imediato a função
```
**Obs.: O `for of` serve para criar um loop que percorre dentro de um array, ou seja, ele faz a leitura do array e armazena na variável passada para ele, que nesse caso é a ``todo`, a variável sempre vem antes do `of` e depois nome do array que deseja percorrer.**

## Criando os TODOS

Para criarmos os nosso elementos em tela, ou seja, adicionar elementos a lista precisamos de uma função que diga para a nossa aplicação que apartir do click o nosso usuário adicionará um elemento, para fazer isso basta fazer o seguinte:

```javascript
function addtodo () {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    rendertodos();
}

btnElement.onclick = addtodo;
```

**Onde:**

1. `inputElement.value` -> Serve para armazenar na variável o valor do nosso **input** que foi             referenciado no início do código;

2. `.push` -> Serve para adicionar dentro do array um novo item;

3. `inputElement.value = '';` -> Serve para limpar o input após o acréscimo do item;

4. `rendertodos()` -> Serve para renderizar novamente a função após todo o processo;

5. `btnElement.onclick = addtodo;` -> Serve para dizer a aplicação que quando o usuário clicar no botão irá executar a função, logo adicionando o item a lista.

Após a execução será observado que, ao adicionar um novo TODO na lista todos os TODOS que já são existentes serão adicionados, isso acontece porque não existe nenhum comando dizendo à função que os TODOS devem ser apagados, pois então, vamos seta-lo. O comando que deve ser usado é o `innerHTML` com isso ele fará com que renderize apenas o novo TODO, veja.


```javascript
function rendertodos () {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

rendertodos(); // apenas para executar de e imediato a função
```

## Excluindo TODOS

Para excluirmos os TODOS da nossa lista vamos que criar um link ao lado do item para quando for clicado ele excluir o item, para que isso aconteça será necessário adicionarmos esse link através do *javascript*, mais precisamento no bloco do `rendertodos`, como é exemplicificado.

```javascript
//função.para.renderizar.a.lista
function rendertodos () {
    listElement.innerHTML = '';

    for (todo of todos) {
        
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
    }
}
```

Aqui dentro da `rendertodos` setamos os "botões" para excluir os itens e adicionamos a tela. Criamos uma variável `linkElement` no qual sua função é, criar e atribuir tudo relacionado aos botões de exclusão, dentro dessa variável atribuimos o `href` com um sinal de `#` para dizer que não tem caminho nenhum, logo após precisamos  criar a nossa função para excluir os **TODOS**.

```javascript
//função.para.deletar.item.da.lista
function deleteTodo (pos) {
    todos.splice(pos, 1);
    rendertodos();
}
```

já com a função criada temos atribuir o parâmetro `pos`, pois ele que vai fazer a função funcionar corretamente.

**para fins de dúvida**
`O método `**splice**` tem como serventia de apagar dados de um array como está sendo mostrado no exemplo. Seguinto a lógica, o splice está apagando os itens um por um do array `**todos**` e passando atributo `**pos**` diz que ele deve apagar o atributo da tal posição, por exemplo. Se o pos fossse valer 0, então ele apagaria o atributo da posição 0 e iria para o próximo.`

Agora devemos instanciar o atributo `pos`, para fazer isso basta voltar no bloco de renderização e adicionar o seguinte comando:

```javascript
var pos = todos.indexOf(todo);
linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
```

**Onde:**

1. `var pos = todos.indexOf(todo)` -> Server para pegar a posião exata do intem dentro do array, ou seja, sabemos que o todo armazena os intens do array, sendo assim quando setamos o `inddexOf` para o **todo** estamos dizendo para ele percorrer item a item dentro do array.

2. `linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');` -> Squi estamos criando para o `linkElement` um atributo `onclick`, usando a função `deleteTodo` e concatenando o pos, simplificando, temos um linha de código dizendo o seguinte: "Pegue o botão excluir e quando ele for clicado execute a função de deletar o item com a posição que ele se encontra".
