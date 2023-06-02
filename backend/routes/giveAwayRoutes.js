const express = require('express');
const{createGiveAway,getAllGiveAways,deleteAll,updateGiveAway} = require('../controllers/giveAwayController');


const router = express.Router();

router.get('/',getAllGiveAways );

router.post('/', createGiveAway );

router.delete('/', deleteAll );

router.patch('/:id', updateGiveAway);

router.get('/:id', (req, res) => {
res.json({ message: 'get single giveaway' });
});



module.exports = router;