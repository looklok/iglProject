const app = require('../app');
const mongoose = require('mongoose');
require('dotenv').config();
const axios = require('axios');

const uri = process.env.ATLAS_URI;
var db; const matriculeTest = 111118; var id;
beforeAll(async function () {
    
    mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex:true,/* useUnifiedTopology: true*/}, (err) => {
        console.log(err);
    });
    db= mongoose.connection;
    db.once('open',function(){
        console.log('we\'ve connected successfully to the database')
    });

  })
  describe('GET Student list', () => {
    test('It should respond to the GET method', async () => {
      const result = await axios.get('http://localhost:5000/students/');
      expect(result.status).toBe(200)
      expect(result.data.length).toBeGreaterThan(0)
    })
  })

  describe('ajouter un etudiant', () => {
    test('It should respond to the POST method', async () => {
      const newStudent = 
        {
          nom:"salah",
          prenom : "test",
          groupe:"1CS44",
          email:"@",
          tel: "05",
          lieuNaissance: "setif",
          adresse : "jijel",
          dateNaissance : new Date(),
        };
        newStudent.matricule = matriculeTest;
      
      const result = await axios.post('http://localhost:5000/students/add',newStudent);
      id = result.data.id
      expect(result.status).toBe(200)
      expect(result.data.msg).toBe('new student added')
    })
  })

  describe('supprimer etudiant by ID', ()=>{
    test('it should respond to DELETE request', async ()=>{
      const res = await axios.delete('http://localhost:5000/students/'+id)
      expect(res.status).toBe(200)
      expect(res.data).toBe('student deleted')
    })
  })

  afterAll(async function () {
    db.close();
  });