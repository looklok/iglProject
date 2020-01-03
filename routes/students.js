const router = require('express').Router();
const assert = require('assert');
var Student = require('../models/student.model');

/**
 * @api {get} /students Request all students 
 * @apiName GetStudents
 * @apiGroup Students
 * @apiSuccess {Object[]} students list of objects representing students.
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *       "dateNaissance": "2019-11-26T18:20:01.819Z",
 *       "_id": "5ddd6cd1c362200e58ca2a38",
 *       "matricule": 111116,
 *       "nom": "salah",
 *       "prenom": "test",
 *       "groupe": "1CS44",
 *       "tel": "05",
 *       "lieuNaissance": "setif",
 *       "email": "@",
 *       "adresse": "jijel",
 *       "__v": 0
 *   },
 *   {
        "dateNaissance": "2019-11-26T18:23:36.657Z",
        "_id": "5ddd6da8c362200e58ca2a39",
        "matricule": 111117,
        "nom": "salah",
        "prenom": "test",
        "groupe": "1CS44",
        "tel": "05",
        "lieuNaissance": "setif",
        "email": "@",
        "adresse": "jijel",
        "__v": 0
    },
    {
        "dateNaissance": "2019-07-08T23:00:00.000Z",
        "_id": "5e0e78dda7537425e4ec8f06",
        "matricule": 170002,
        "nom": "brih",
        "prenom": "yacine",
        "groupe": "1CS9",
        "tel": "05",
        "lieuNaissance": "jijel",
        "email": "@",
        "adresse": "jijel",
        "__v": 0
    }
   ]
 * 
 */
router.route('/').get((req, res) =>{
    Student.find().then(
        (students)=> res.json(students)
    ).catch((err)=>{
        res.status(400).json(err)
    })
});
/**
 * @api {get} /students/one/:id Request one student by id
 * @apiName GetOneStudent
 * @apiGroup Students
 * @apiParam {String} id Student unique ID.
 * @apiSuccess {Object} student an object representing the student.
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
    "dateNaissance": "2019-07-08T23:00:00.000Z",
    "_id": "5ddd48729ad2392fa06c7ac8",
    "matricule": 170001,
    "nom": "yacine",
    "prenom": "brihouche",
    "groupe": "3CS6",
    "tel": "07777777777",
    "lieuNaissance": "constantine",
    "email": "esi@esi.esi",
    "adresse": "jijel",
    "__v": 0
    }
 */
router.route('/one/:id').get((req, res) =>{
    Student.findById(req.params.id).then(
        (students)=>{
            res.json(students)
            } 
    ).catch((err)=>{
        res.status(400).json(err)
    })
});
/**
 * @api {get} /students/:groupe Request all students of a group
 * @apiName GetGroup
 * @apiGroup Students
 * @apiParam {String} groupe Groupe unique number.
 * @apiSuccess {Object[]} students a list of students  corresponding to that group.
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *       "dateNaissance": "2019-11-26T18:20:01.819Z",
 *       "_id": "5ddd6cd1c362200e58ca2a38",
 *       "matricule": 111116,
 *       "nom": "salah",
 *       "prenom": "test",
 *       "groupe": "1CS9",
 *       "tel": "05",
 *       "lieuNaissance": "setif",
 *       "email": "@",
 *       "adresse": "jijel",
 *       "__v": 0
 *   },
 *   {
        "dateNaissance": "2019-11-26T18:23:36.657Z",
        "_id": "5ddd6da8c362200e58ca2a39",
        "matricule": 111117,
        "nom": "salah",
        "prenom": "test",
        "groupe": "1CS9",
        "tel": "05",
        "lieuNaissance": "setif",
        "email": "@",
        "adresse": "jijel",
        "__v": 0
    },
    {
        "dateNaissance": "2019-07-08T23:00:00.000Z",
        "_id": "5e0e78dda7537425e4ec8f06",
        "matricule": 170002,
        "nom": "brih",
        "prenom": "yacine",
        "groupe": "1CS9",
        "tel": "05",
        "lieuNaissance": "jijel",
        "email": "@",
        "adresse": "jijel",
        "__v": 0
    }
   ]
 * */
router.route('/:groupe').get((req,res)=>{
    Student.find({groupe: req.params.groupe}).then(
        (groupStudents)=>res.json(groupStudents)
    ).catch(
        (err)=>res.status(400).json(err)
    )
});

/**
 * @api {post} /students/add Add one student
 * @apiName PostStudent
 * @apiGroup Students
 * @apiParam {Date} dateNaissance date of birth of student
 * @apiParam {Number} matricule matricule of student
 * @apiParam {String} nom name of student
 * @apiParam {String} prenom firstname of student
 * @apiParam {String} groupe group
 * @apiParam {String} tel phone number
 * @apiParam {String} lieuNaissance place of birth
 * @apiParam {String} email email
 * @apiParam {String} adresse adress
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * "new student added"
 */
router.route('/add').post(
    (req,res)=>{
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
/**
 * @api {delete} /students/:id Delete a student by id
 * @apiName DeleteStudent
 * @apiGroup Students
 * @apiParam {String} id Student unique ID.
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * "student deleted"
 */
router.route('/:id').delete(
    (req,res) =>{
        Student.deleteOne({_id : req.params.id})
    .then(res.json('student deleted'))
.catch(err=> res.status(400).json(err));})
/**
 * @api {post} /students/update/:id Update student by id
 * @apiName UpdateStudent
 * @apiGroup Students
 * @apiParam {String} id Student unique ID.
 * @apiParam {Date} [dateNaissance] date of birth of student
 * @apiParam {Number} [matricule] matricule of student
 * @apiParam {String} [nom] name of student
 * @apiParam {String} [prenom] firstname of student
 * @apiParam {String} [groupe] group
 * @apiParam {String} [tel] phone number
 * @apiParam {String} [lieuNaissance] place of birth
 * @apiParam {String} [email] email
 * @apiParam {String} [adresse] adress
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * "student updated"
 */

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
        Student.updateOne({_id:req.params.id},newStudent).then(
            ()=>res.json('student updated')
        ).catch(
            (err)=>res.status(400).json(err)
        );
    }
    
);

module.exports=router;