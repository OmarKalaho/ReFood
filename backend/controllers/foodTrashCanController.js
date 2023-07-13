const FoodTrashCan = require('../models/foodTrashCanModel');

const setFoodTrashCan = async (req, res) => {
    const { TrashCanNumber, APIkey, PickupLocation,
        FillPercentage,Capacity } = req.body;
    try {
        const giveAway = await FoodTrashCan.create({
            TrashCanNumber, APIkey, PickupLocation,
            FillPercentage,Capacity
        })
        res.status(200).json(giveAway)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
        res.status(403).json({ error: err.message })
    }
};
const getAllFoodTrashCans = async (req, res) => {
    const foodTrashCans = await FoodTrashCan.find().sort({ TrashCanNumber: 1 });
    res.status(200).json(foodTrashCans);
}


const deleteAll = async (req, res) => {
    const result = await FoodTrashCan.deleteMany();
    res.status(200).json(result);
}


const updateFoodTrashCanPercentage = async (req, res) => {
    const { id } = req.params;
    const{ FillPercentage,APIkey} = req.query;
    const trashCan = await FoodTrashCan.findById({ _id: id });

    if (!trashCan) {
        res.status(404).json({ error: "TrashCan not found" })
        return;
    } 
    if (trashCan.APIkey !== APIkey) {
        res.status(404).json({ error: "Wrong APIkey" })
        return;
    }
    const trashCan1 = await FoodTrashCan.findByIdAndUpdate({ _id: id }, { FillPercentage:FillPercentage }, { new: true });
    res.status(200).json(trashCan1);

}

module.exports = { setFoodTrashCan, updateFoodTrashCanPercentage, getAllFoodTrashCans, deleteAll }