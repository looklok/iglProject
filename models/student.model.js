const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const studentSchema = new Schema({
        matricule : {
            type : Number,
            required : true,
            unique: true,
        },
        nom : {
            type : String,
            required : true,
        },
        prenom : {
            type : String,
            required : true,
        },
        groupe : {
            type : String,
            required: true,
        },
        dateNaissance : {
            type : Date,
            default:Date(),
            //required: true,
        },
        lieuNaissance :{
            type: String,
            required: true
        },
        tel : {
            type : String,
        },
        email: {
            type : String,
            required: true,
        },
        adresse:{
            type : String,
            required: true,
        },
    }
);

const Student = mongoose.model('Student',studentSchema);

module.exports=Student;