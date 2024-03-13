const express = require('express');
const app = express();
const port = 3334;

app.use(express.static('front'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
