const router = require('express').Router();
const assert = require('assert');
var Student = require('../models/student.model');

router.route('/').get((req, res) =>{
    Student.find().then(
        (students)=> res.json(students)
    ).catch((err)=>{
        res.status(400).json(err)
    })
});

router.route('/one/:id').get((req, res) =>{
    console.log('iddd')
    Student.findById(req.params.id).then(
        (students)=>{
            console.log(students)
            res.json(students)
            } 
    ).catch((err)=>{
        res.status(400).json(err)
    })
});

router.route('/:groupe').get((req,res)=>{
    Student.find({groupe: req.params.groupe}).then(
        (groupStudents)=>res.json(groupStudents)
    ).catch(
        (err)=>res.status(400).json(err)
    )
});


router.route('/add').post(
    (req,res)=>{
        console.log(req.body);
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var matricule = Number(req.body.matricule);
        var groupe =req.body.groupe;
        var lieuNaissance = req.body.lieuNaissance;
        var email = req.body.email;
        var adresse = req.body.adresse;
        var tel = req.body.tel;

        var newStudent = new Student();
        if(req.body.dateNaissance!= null) {newStudent.dateNaissance = Date.parse(req.body.dateNaissance);}
        newStudent.matricule=matricule;
        newStudent.nom=nom;
        newStudent.prenom=prenom;
        newStudent.groupe=groupe;
        newStudent.tel=tel;
        newStudent.lieuNaissance=lieuNaissance;
        newStudent.email=email;
        newStudent.adresse=adresse;

        newStudent.save().then(()=>res.status(200).json({msg : 'new student added', id :newStudent._id}))
        .catch(err=> res.status(400).json(err));


});
router.route('/:id').delete(
    (req,res) =>{
        Student.deleteOne({_id : req.params.id})
    .then(res.json('student deleted'))
.catch(err=> res.status(400).json(err));})


router.route('/update/:id').post(
    (req,res)=>{
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var matricule = Number(req.body.matricule);
        var groupe =req.body.groupe;
        var lieuNaissance = req.body.lieuNaissance;
        var email = req.body.email;
        var adresse = req.body.adresse;
        var tel = req.body.tel;

        var newStudent = {};
        if(req.body.dateNaissance!= null) {newStudent.dateNaissance = Date.parse(req.body.dateNaissance);}
        if(matricule) newStudent.matricule=matricule;
        if(nom!=null)newStudent.nom=nom;
        if(prenom!=null)newStudent.prenom=prenom;
        if(groupe!=null)newStudent.groupe=groupe;
        if(tel!=null)newStudent.tel=tel;
        if(lieuNaissance!=null)newStudent.lieuNaissance=lieuNaissance;
        if(email!=null)newStudent.email=email;
        if(adresse!=null)newStudent.adresse=adresse;
        console.log(newStudent);
        Student.updateOne({_id:req.params.id},newStudent).then(
            ()=>res.json('student updated')
        ).catch(
            (err)=>res.status(400).json(err)
        );
    }
    
);

module.exports=router;