
import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const showSchema=new Schema({

    movie:{
        type:String,
        required:true,
        ref:"Movie"
    },
    showDateTime:{
        type:Date,
        required:true
    },
    showPrice:{
        type:Number,
        required:true
    },
    occupiedSeats:{
        type:Object,
        default:{}
    }
},{minimize:false});

const Show = mongoose.models.Show || mongoose.model("Show", showSchema);
export default Show;

// https://gemini.google.com/app/f24a732b7848c7ac

// In Mongoose (MongoDB), the { minimize: false } option is used to prevent the database from automatically deleting empty objects.

// By default, Mongoose "minimizes" schemas by removing properties that are empty objects. Without this setting, if you save a new
//  document with an empty occupiedSeats object, MongoDB won't actually store that field at all.