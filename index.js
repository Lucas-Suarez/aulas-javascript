//javascript

// VARAIÁVEIS, OBJETO E ARRAY

      //String, int, float, boolean
      var nome = "Lucas";
      var idade = 19;
      var peso  = 60.5;
      var humano = true;

      //vetorial
      var alunos = ['Lucas', 'Carol', 'Ana', 'Samuel'];
      
      //objeto
      var aluno = {
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

// OPERAÇÕES MATAMÁTICAS

      //SOMA
      var x = 10, y = 5, resultado;

      resultado = x + y;

      //CONCATENAÇÃO
      var a = 10, b = "5";
      var result = a + b;

      //EXIBIÇÃO
      console.log(result + " -> valor da concatenação");
      console.log(resultado + " -> valor da soma numérica");
      
      //SUBTRAÇÃO
      var x = 10, y = 5, resultado;

      resultado = x - y;
      
      //EXIBIÇÃO
      console.log(resultado + " -> valor da subtração numérica");

      //MULTIPLICAÇÃO
      var x = 10, y = 5, resultado;

      resultado = x * y;
      
      //EXIBIÇÃO
      console.log(resultado + " -> valor da multiplicação numérica");

      //DIVISÃO
      var x = 10, y = 5, resultado;

      resultado = x / y;

      //EXIBIÇÃO
      console.log(resultado + " -> valor da divisão numérica");

      //MÓDULO
      var x = 11, y = 5, resultado;

      resultado = x % y;

      //EXIBIÇÃO
      console.log(resultado + " -> valor do módulo numérico");

// FUNÇÃO

      //Função
      function soma(numero1, numero2) {
        var resultado = numero1 + numero2;

        return resultado
      }

      var resultado = soma(1, 2);
      console.log(resultado);

// CONDICIONAIS

      //função condicional
      function retornasexo(sexo) {
        
        if (sexo === 'M') {

          return 'Masculino'
        }else {
          
          return 'Feminino';
        }
      }
      var resultado = retornasexo ('M')
      console.log(resultado);