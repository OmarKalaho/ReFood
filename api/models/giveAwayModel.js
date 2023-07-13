const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const giveAwaySchema = new Schema({
    FoodStatus: {
        type: String,
        required: true
    }
    ,
    FoodQuantity: {
        EdibleFood: {
            quantity: {
                type: String,

            },
            unit: {
                type: String,

            }
        },
        InedibleFood: {
            quantity: {
                type: String,

            },
            unit: {
                type: String,

            }
        }
    },

    PickupLocation: {


        addressName: {
            type: String,

        },
        address: {
            type: String,

        },
        area: {
            type: String,


        },
        city: {
            type: String,


        },
        country: {
            type: String,

        },
        floor: {
            type: String,

        },
        premise: {
            type: String,

        },
        state: {
            type: String,

        },
        street: {
            type: String,

        },
        latLng: {
            lat: {
                type: Number,

            },
            lng: {
                type: Number,

            }
        }
    },
    PickupTime: {
        type: String,

    },
    ExtraRemarks: {
        type: String,

    },
    
    AcceptanceStatus: {
        type: String,
    },
    AcceptanceDetails: {
        courierName: {
            type: String,
        },
        courierNumber: {
            type: String
        },
        organizationName: {
            type: String
        }
    }
    

}, { timestamps: true });


module.exports = mongoose.model('GiveAway', giveAwaySchema);