const express = require('express');
const app = express();
const port = 3010;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Um array que guarda a informação de todos os carros
const carros = [
  {id: 1, nome: "Nome Qualquer 1", preco: "R$" + 2.002+"."+399, imagem: "carro.png", descricao: "descrição qualquer 1"},
  {id: 2, nome: "Nome Qualquer 2", preco: "R$" + 14.052+"."+399, imagem: "carro-2.png", descricao: "descrição qualquer 2"},
  {id: 3, nome: "Nome Qualquer 3", preco: "R$" + 67047+"."+113, imagem: "carro-3.png", descricao: "descrição qualquer 3"},
  {id: 4, nome: "Nome Qualquer 4", preco: "R$" + 2.002+"."+399, imagem: "carro-4.png", descricao: "descrição qualquer 4"},
  {id: 5, nome: "Nome Qualquer 5", preco: "R$" + 2.002+"."+399, imagem: "carro-5.png", descricao: "descrição qualquer 5"},
  {id: 6, nome: "Nome Qualquer 6", preco: "R$" + 2.002+"."+399, imagem: "carro-6.png", descricao: "descrição qualquer 6"},
  {id: 7, nome: "Nome Qualquer 7", preco: "R$" + 2.002+"."+399, imagem: "carro-7.png", descricao: "descrição qualquer 7"},
  {id: 8, nome: "Nome Qualquer 8", preco: "R$" + 2.002+"."+399, imagem: "carro-8.png", descricao: "descrição qualquer 8"},
  {id: 9, nome: "Nome Qualquer 9", preco: "R$" + 2.002+"."+399, imagem: "carro-9.png", descricao: "descrição qualquer 9"},
  {id: 10, nome: "Nome Qualquer 10", preco: "R$" + 2.002+"."+399, imagem: "carro-10.png", descricao: "descrição qualquer 10"}
]

//A função buscarCarroPorId tem o parâmetro id, que diz que se o carro com o id correspondente for encontrado, as informações do
//carro com aquele id vão ser retornadas
function buscarCarroPorId(id){
  const carro = carros.find(carro => carro.id == id);
  return carro || null
}

console.log(buscarCarroPorId(2))

//Define uma rota HTTP, com a URL '/'
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
