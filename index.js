const { rastrearEncomendas } = require('correios-brasil');

let codRastreio = ['LB290687594HK']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then((response) => {
  console.log(response);
});