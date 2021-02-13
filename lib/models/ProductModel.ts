import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({

    IteamID: {
        type: String,
        required: 'Enter a Iteam ID'
    },
    name: {
        type: String,
        required: 'Enter a Iteam name'
    },
    rentprice: {
        type: Number,
        required: 'Enter a rent price'
    },
    manufacturedate: {
        type: Date            
    },
    cost: {
        type: Number            
    }
});