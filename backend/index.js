const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: 'Bem Vindo a Semana Omnistack 11.0',
    aluno: 'Parabéns Sandro Torres'
  })
});

app.listen(3333);
