const express = require('express');
const{getAllFoodTrashCans,updateFoodTrashCanPercentage,setFoodTrashCan,deleteAll} = require('../controllers/foodTrashCanController');


const router = express.Router();
router.get('/',getAllFoodTrashCans );

router.patch('/:id', updateFoodTrashCanPercentage);

router.post('/', setFoodTrashCan );

router.delete('/', deleteAll );

router.get('/:id', (req, res) => {
res.json({ message: 'get single giveaway' });
});


module.exports = router;