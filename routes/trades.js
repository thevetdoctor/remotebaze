const express = require('express');
const router = express.Router();
const TradeController = require('../controllers/trades');

router.post('/', TradeController.addTrade);

router.get('/', TradeController.getTrades);

router.get('/:id', TradeController.getTrade);

router.put('/:id', TradeController.putTrade);

router.patch('/:id', TradeController.patchTrade);

router.delete('/:id', TradeController.deleteTrade);

module.exports = router;
