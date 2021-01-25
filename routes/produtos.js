
const express = require('express');
const router = express.Router();

// retorna todos os produtos
router.get('/', (req, res, next) =>{
  res.status(200).send({
    mensagem: 'Usando o GET dentro da rota de produtos'
  });
});

//insere um produto
router.post('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Usando o POST dentro rota de produtos'
  });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    res.status(200).send({
      mensagem: 'Detalhes do produto',
      id_pedido: id
    });
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Usando o PATCH'
  });
});

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Usando o DELETE'
  });
});

module.exports = router;
