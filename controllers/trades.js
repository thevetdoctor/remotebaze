const Trades = require("../models/trades");

module.exports = {
    addTrade: async (req, res) => {
        const trade = await Trades.create(req.body);
        res.status(201).send(trade);
    },

    getTrades: async (req, res) => {
        let trades;
        if(req.query.type && req.query.user_id) {
            trades = await Trades.findAll({
                where: {
                    type: req.query.type,
                    user_id: req.query.user_id
                }
            });
        } else if (req.query.type) {
            trades = await Trades.findAll({
                where: {
                    user_id: req.query.type
                }
            });
        } else if (req.query.user_id) {
            trades = await Trades.findAll({
                where: {
                    user_id: req.query.user_id
                }
            });
        } else {
            trades = await Trades.findAll();
        }
        res.status(200).send(trades);
    },

    getTrade: async (req, res) => {
        let trade;
        console.log(req.params);
        if(req.params.id) {
            trade = await Trades.findAll({
                where: {
                    id: req.params.id
                }
            });
        }
        delete trade.id;

        if (trade.length < 1) {
            return res.status(404).send('ID not found');
        }
        res.status(200).send(trade[0]);
    },

    putTrade: (req, res) => {
        res.status(405).send([{}]);
    },

    patchTrade: (req, res) => {
        res.status(405).send([{}]);
    },

    deleteTrade: (req, res) => {
        res.status(405).send([{}]);
    }
}