const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodTrashCanSchema = new Schema({
    TrashCanNumber: {
        type: Number,
        required: true
    },
    APIkey: {
        type: String,

    },
    FillPercentage: {
        type: Number,
    },
    Capacity:{
        type:Number,
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



}, { timestamps: true });


module.exports = mongoose.model('FoodTrashCan', foodTrashCanSchema);