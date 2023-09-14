const express = require('express');
const app = express();
const port = 3010;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Lojinha do Crivelli' });
});

app.get('/contato', (req, res) => {
  res.render('contato', { message: 'Oi, tudo bem?' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});