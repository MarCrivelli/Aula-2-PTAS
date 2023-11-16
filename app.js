const express = require('express');
const app = express();
const port = 3010;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Lojinha do Crivelli' });
});

const carros = [
  {id: 1, nome: "carro 1", preco: 200230, imagem: "carro.png", descricao: "carro automático de luxo"},
  {id: 2, nome: "carro 2", preco: 200230, imagem: "carro.png", descricao: "carro automático de luxo2"},
  {id: 3, nome: "carro 3", preco: 200230, imagem: "carro.png", descricao: "carro automático de luxo3"},
  {id: 4, nome: "carro 4", preco: 200230, imagem: "carro.png", descricao: "carro automático de luxo4"}
]

function buscarCarroPorId(){
  const carro = carros.find(carro => carro.id == 3);
  return carro || null
}

console.log(buscarCarroPorId(2))

app.get('/produtos', (req, res) => {
  res.render('carro1', { message: 'Carrinho de compras' });
});

app.get('/produtos2', (req, res) => {
  res.render('carro2', { message: 'Carrinho de compras' });
});

app.get('/produtos3', (req, res) => {
  res.render('carro3', { message: 'Carrinho de compras' });
});

app.get('/produtos4', (req, res) => {
  res.render('carro4', { message: 'Carrinho de compras' });
});

app.get('/inicio', (req, res) => {
  res.render('index', { message: 'Lojinha do marco' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});