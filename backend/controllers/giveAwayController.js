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
    const  giveAways = await GiveAway.find().sort({createdAt: -1});
    res.status(200).json(giveAways);
}

const getGiveAways = async (req, res) => {
    const {status} = req.params;
    const  giveAways = await GiveAway.find({AcceptanceStatus:status}).sort({createdAt: -1});
    res.status(200).json(giveAways);
}

const deleteAll = async(req,res)=>{
   const result =  await GiveAway.deleteMany();
    res.status(200).json(result);
}



const updateGiveAway = async (req, res) => {
    const {id} = req.params;
    const giveAway = await GiveAway.findByIdAndUpdate({_id:id}, {...req.body} , {new: false});
    
    if(!giveAway){
        res.status(404).json({error: "GiveAway not found"})
        return;
    }
    if(giveAway.AcceptanceStatus === "Accepted"){
        console.log("GiveAway already accepted");
        const giveAway2= await GiveAway.findByIdAndUpdate({_id:id}, {...giveAway}, {new: false});
        console.log("GiveAway already accepted");
        res.status(404).json({error: "GiveAway already accepted"})
        return;
    }

    res.status(200).json(giveAway);
    console.log("GiveAway 200");

}

module.exports = { createGiveAway ,getGiveAways,getAllGiveAways,deleteAll,updateGiveAway }