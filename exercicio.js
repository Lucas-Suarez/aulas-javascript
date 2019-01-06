//EXIBINDO.ENDEREÇO.DO.USUÁRIO (exercício 01)

//Dados.do.endereço.do.usuário
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "centro",
    cidade: "São Paulo",
    uf: "SP"
};

//função.para.exibir.endereço
function retornaendereco (endereco) {
    return (
        "O usuário mora em " +
        endereco.cidade + 
        " / " +
        endereco.uf + 
        ", no bairro, " +
        endereco.bairro + 
        " na " +
        endereco.rua +
        " com número " +
        endereco.numero
    );
}

//exibição.do.endereço
console.log(retornaendereco(endereco));

//EXIBINDO.NÚMEROS.PARES (exercício 02)

//função.numeros.pares
function pares (x, y) {
    for (var i = x; i < y; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  //parâmetros.numéricos
  pares(32, 321);

//EXIBINDO.HABILIDADES (exercício 03)

//função.habilidade
 
function temHabilidade (skills) {
  return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

//EXPRIENCIA.DE.ANOS (exercício 04)

//função.para.determinar.nivel.de.experiência
function experiencia (anos) {
  if (anos <= 1) {
    return 'Iniciante';
  }
  else if (anos <= 3) {
    return 'Intermediário';
  }
  else if (anos <=6) {
    return 'Avançado';
  }
  else if (anos >= 7) {
    return 'Expert';
  } else {
    return 'sem habilidade';
  }
}

//dados.do.usuário
var anosEstudo = 3;
experiencia(anosEstudo);

//exibição.do.nível.de.experiência
console.log(experiencia(anosEstudo));

//GUIA.DE.EXPERIÊNCIA.DO.USUÁRIO

// DE 0-1 ANO -> INICIANTE
// DE 1-3 ANOS -> INTERMEDIÁRIO
// DE 3-6 ANOS -> AVANÇADO
// A CIMA DE 7 ANOS -> EXPERT

//MOSTRANDO.HABILIDADES.DOS.USUÁRIOS (exercício 05)

//array.com.atributos
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["vueJS", "Ruby on rails", "Elixir"]
  }
];

//função.de.exibição.atributos

function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    console.log(
      "O " +
        usuario.nome +
        " possui as habilidades: " +
        usuario.habilidades.join(", ")
    );
  }
}