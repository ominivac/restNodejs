
const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) =>{
  res.status(200).send({
    mensagem: 'Usando o GET dentro da rota de pedidos'
  });
});

//INSERE UM PEDIDO
router.post('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Pedido foi criado'
  });
});

//RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) =>{
    const id = req.params.id_pedido
      res.status(200).send({
      mensagem: 'Detalhes do pedido',
      id_pedido: id
      });

});



//EXCLUI UM PEDIDO
router.delete('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Pedido excluído'
  });
});

module.exports = router;
