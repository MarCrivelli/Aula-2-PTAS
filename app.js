const express = require('express');
const app = express();
const port = 3010;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const carros = [
  {id: 1, nome: "carro automático de luxo", preco: 200230, imagem: "carro.png", descricao: "111111"},
  {id: 2, nome: "carro automático de luxo", preco: 200230, imagem: "carro-2.png", descricao: "22222"},
  {id: 3, nome: "carro automático de luxo", preco: 200230, imagem: "carro-3.png", descricao: "333333"},
  {id: 4, nome: "carro automático de luxo", preco: 200230, imagem: "carro-4.png", descricao: "444444"}
]

function buscarCarroPorId(){
  const carro = carros.find(carro => carro.id == 3);
  return carro || null
}

console.log(buscarCarroPorId(2))

app.get('/', async function (req, res) {
  res.render('index', { carros });
});

app.get('/carros/:id', async function (req, res){
  const carro = buscarCarroPorId(req.params.id)
  res.render('carros/visualizar', { carro });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});