//javascript (MÓDULO 01)

// VARAIÁVEIS, OBJETO E ARRAY (AULA 01)

      //String, int, float, boolean
      const nome = "Lucas";
      const idade = 19;
      const peso  = 60.5;
      const humano = true;

      //vetorial
      const alunos = ['Lucas', 'Carol', 'Ana', 'Samuel'];
      
      //objeto
      const aluno = {
        nome: 'Lucas',
        idade: 19,
        peso: 60.5,
        humano: true
      };
      
      // exibindo no console (variáveis)
      console.log(nome, idade, peso, humano);

      //exibindo no console (array)
      console.log(alunos);
      
      // exibindo no console (array com um item expecífico)
      console.log(alunos[2]);

      // exibindo no console (objeto)
      console.log(aluno);

      // exibindo no console (objeto específico)
      console.log(aluno.humano);

// OPERAÇÕES MATAMÁTICAS (AULA 02)

      //SOMA
      var x = 10, y = 5, resultado;

      resultado = x + y;

      //CONCATENAÇÃO
      const a = 10, b = "5";
      const result = a + b;

      //EXIBIÇÃO
      console.log(result + " -> valor da concatenação");
      console.log(resultado + " -> valor da soma numérica");
      
      //SUBTRAÇÃO
      const x = 10, y = 5, resultado;

      resultado = x - y;
      
      //EXIBIÇÃO
      console.log(resultado + " -> valor da subtração numérica");

      //MULTIPLICAÇÃO
      const x = 10, y = 5, resultado;

      resultado = x * y;
      
      //EXIBIÇÃO
      console.log(resultado + " -> valor da multiplicação numérica");

      //DIVISÃO
      const x = 10, y = 5, resultado;

      resultado = x / y;

      //EXIBIÇÃO
      console.log(resultado + " -> valor da divisão numérica");

      //MÓDULO
      const x = 11, y = 5, resultado;

      resultado = x % y;

      //EXIBIÇÃO
      console.log(resultado + " -> valor do módulo numérico");

// FUNÇÃO (AULA 03)

      //Função
      function soma(numero1, numero2) {
        let resultado = numero1 + numero2;

        return resultado
      }

      const resultado = soma(1, 2);
      console.log(resultado);

// CONDICIONAIS (AULA 04)

      //Função if, if else, else
      function retornasexo(sexo) {
        if (sexo === 'M') {

          return 'Masculino'
        }else {
          
          return 'Feminino';
        }
      }
      const resultado = retornasexo ('M')
      console.log(resultado + ' -> Função if');

      //Função switch case
      function exibirsexo(sexo) {
        switch (sexo) {
          case 'M':
            return 'Feminino';
          case 'F':
            return 'Feminino';
          default:
            return 'Outro';
        }
      }
      const resultado = exibirsexo ('F');
      console.log(resultado + ' -> Função Switch case')

//OPERADORES LÓGICOS (AULA 05)

      //Operador &&
      const sexo = 'M', idade = 19;

      if (sexo === 'M' && idade >= 18) {
        console.log('É do sexo masculino e maior de idade');
      }

      //Operador ||
      const sexo = 'M', idade = 19;

      if (sexo === 'M' || idade >= 18) {
        console.log("Ok")
      }

      //Operador !== ou !=

      const sexo = 'M', idade = 19;

      if (sexo !== 'F') {
        console.log("Ok!")
      }

      //Simplificando a função
      const sexo = 'M';

      const masculino = sexo === 'M';

      console.log(masculino);

//CONDIÇÃO TERNÁRIA (AULA 06)

      //condição ternária
      const sexo = 'M';

      const retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';

      console.log(retorno + ' <- Condição ternária');

// ESTRUTURAS DE REPETIÇÃO (AULA O7)

      //loop for
      for (var i = 0; i <= 10; i++) {
        console.log(i + ' <- i')
      }

      //loop while 
      const j = 102983;

      while (j > 50) {
        console.log(j + ' <- j')

        j /= 5
      }

//INTERVALO E TIMEOUT (AULA 08)

      //intervalo
      function exbialgo() {
        return 'Exibição do intervalo!';
      }

      setInterval(exbialgo, 1000);

      //timeout
      function exibialgo() {
        return 'Exibindo timeout!';
      }

      setTimeout(exibialgo, 5000);

//DOM (MÓDULO 02)

//EVETOS INLINE (AULA 01)

        //função.de.alerta
        function exibeAlerta () {
        alert ('Botão foi clicado');
        }

//TRABALHANDO COM A DOM (AULA 02)

      //Selecionando elementos HTML
      const inputElement = document.querySelector('input[name=nome]');  
      const btnElement = document.querySelector('button.botao');
        
      btnElement.onclick = function () {
        let text = inputElement.value;

        alert (text);
      }

//LINDANDO COM ELEMENTOS (AULA 03)

      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', 'http://rocketseat.com.br');

      const textElement = document.createTextNode('Acessar o site da RocketSeat');
      linkElement.appendChild(textElement);

      const containerElement = document.querySelector ('#app');
      containerElement.appendChild(linkElement);

      const inputElement = document.querySelector('#app');
      containerElement.removeChild(inputElement);
   
// JS Assincrôno (módulo 04)

// AJAX (AULA 01)

      //iniciando a requisição do AJAX
    const xhr = new XMLHttpRequest();