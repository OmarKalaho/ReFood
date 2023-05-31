const GiveAway = require('../models/giveAwayModel');

const createGiveAway = async (req, res) => {
    const { FoodStatus, FoodQuantity, PickupLocation,
        PickupTime, ExtraRemarks,AcceptanceStatus,AcceptanceDetails } = req.body;
    try {
        const giveAway = await GiveAway.create({
            FoodStatus, FoodQuantity, PickupLocation,
            PickupTime, ExtraRemarks,AcceptanceStatus,AcceptanceDetails
        })
        res.status(200).json(giveAway)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
    
        res.status(403).json({ error: err.message })
    }

};

const getAllGiveAways = async (req, res) => {
    const  giveAways = await GiveAway.find({}).sort({createdAt: -1});
    res.status(200).json(giveAways);
}

const deleteAll = async(req,res)=>{
   const result =  await GiveAway.deleteMany();
    res.status(200).json(result);
}

module.exports = { createGiveAway ,getAllGiveAways,deleteAll }