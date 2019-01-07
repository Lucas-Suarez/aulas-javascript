# Criando uma aplicação de tudo

Essa documentação é voltada a primeira aplicação criada com todos os ensinamentos adquiridos no curso até agora. Primeiro passo é por os elementos em tela com o `HTML`, como mostra o exemplo.

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