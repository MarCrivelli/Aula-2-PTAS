const express = require('express');
const app = express();
const port = 3010;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Um array que guarda a informação de todos os carros
const carros = [
  {id: 1, nome: "Ferrari esportiva antiga", preco: "R$" + 200230.99, imagem: "carro.png", descricao: "Artigo de colecionador do mais puro luxo (usado pela Madona)"},
  {id: 2, nome: "Audi esportivo extreme", preco: "R$" + 140520.10, imagem: "carro-2.png", descricao: "22222"},
  {id: 3, nome: "carro automático de luxo", preco: "R$" + 670471.13, imagem: "carro-3.png", descricao: "333333"},
  {id: 4, nome: "carro automático de luxo", preco: "R$" + 340225.99, imagem: "carro-4.png", descricao: "444444"},
  {id: 5, nome: "carro automático de luxo", preco: "R$" + 340225.99, imagem: "carro-4.png", descricao: "444444"},
  {id: 6, nome: "Ferrari esportiva antiga", preco: "R$" + 200230.99, imagem: "carro.png", descricao: "Artigo de colecionador do mais puro luxo (usado pela Madona)"},
  {id: 7, nome: "Audi esportivo extreme", preco: "R$" + 140520.10, imagem: "carro-2.png", descricao: "22222"},
  {id: 8, nome: "carro automático de luxo", preco: "R$" + 670471.13, imagem: "carro-3.png", descricao: "333333"},
  {id: 9, nome: "carro automático de luxo", preco: "R$" + 340225.99, imagem: "carro-4.png", descricao: "444444"},
  {id: 10, nome: "carro automático de luxo", preco: "R$" + 340225.99, imagem: "carro-4.png", descricao: "444444"}
]


function buscarCarroPorId(id){
  const carro = carros.find(carro => carro.id == id);
  return carro || null
}

console.log(buscarCarroPorId(2))

app.get('/', async function (req, res) {
  res.render('index', { carros });
});

app.get('/produtos/:id', async function (req, res){
  const carro = buscarCarroPorId(req.params.id)
  res.render('produtos', { carro });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
