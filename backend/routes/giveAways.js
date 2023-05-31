const express = require('express');
const{createGiveAway,getAllGiveAways,deleteAll} = require('../controllers/giveAwayController');


const router = express.Router();

router.get('/',getAllGiveAways );

router.post('/', createGiveAway );

router.delete('/', deleteAll );

router.get('/:id', (req, res) => {
    res.json({ message: 'get single giveaway' });
});






router.patch('/:id', (req, res) => {
    res.json({ message: 'update giveaway' });
});

module.exports = router;