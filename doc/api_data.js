define({ "api": [
  {
    "type": "delete",
    "url": "/students/:id",
    "title": "Delete a student by id",
    "name": "DeleteStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Student unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"student deleted\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students.js",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/students/:groupe",
    "title": "Request all students of a group",
    "name": "GetGroup",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupe",
            "description": "<p>Groupe unique number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "students",
            "description": "<p>a list of students  corresponding to that group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n      \"dateNaissance\": \"2019-11-26T18:20:01.819Z\",\n      \"_id\": \"5ddd6cd1c362200e58ca2a38\",\n      \"matricule\": 111116,\n      \"nom\": \"salah\",\n      \"prenom\": \"test\",\n      \"groupe\": \"1CS9\",\n      \"tel\": \"05\",\n      \"lieuNaissance\": \"setif\",\n      \"email\": \"@\",\n      \"adresse\": \"jijel\",\n      \"__v\": 0\n  },\n  {\n        \"dateNaissance\": \"2019-11-26T18:23:36.657Z\",\n        \"_id\": \"5ddd6da8c362200e58ca2a39\",\n        \"matricule\": 111117,\n        \"nom\": \"salah\",\n        \"prenom\": \"test\",\n        \"groupe\": \"1CS9\",\n        \"tel\": \"05\",\n        \"lieuNaissance\": \"setif\",\n        \"email\": \"@\",\n        \"adresse\": \"jijel\",\n        \"__v\": 0\n    },\n    {\n        \"dateNaissance\": \"2019-07-08T23:00:00.000Z\",\n        \"_id\": \"5e0e78dda7537425e4ec8f06\",\n        \"matricule\": 170002,\n        \"nom\": \"brih\",\n        \"prenom\": \"yacine\",\n        \"groupe\": \"1CS9\",\n        \"tel\": \"05\",\n        \"lieuNaissance\": \"jijel\",\n        \"email\": \"@\",\n        \"adresse\": \"jijel\",\n        \"__v\": 0\n    }\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students.js",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/students/one/:id",
    "title": "Request one student by id",
    "name": "GetOneStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Student unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "student",
            "description": "<p>an object representing the student.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"dateNaissance\": \"2019-07-08T23:00:00.000Z\",\n    \"_id\": \"5ddd48729ad2392fa06c7ac8\",\n    \"matricule\": 170001,\n    \"nom\": \"yacine\",\n    \"prenom\": \"brihouche\",\n    \"groupe\": \"3CS6\",\n    \"tel\": \"07777777777\",\n    \"lieuNaissance\": \"constantine\",\n    \"email\": \"esi@esi.esi\",\n    \"adresse\": \"jijel\",\n    \"__v\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students.js",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/students",
    "title": "Request all students",
    "name": "GetStudents",
    "group": "Students",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "students",
            "description": "<p>list of objects representing students.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n      \"dateNaissance\": \"2019-11-26T18:20:01.819Z\",\n      \"_id\": \"5ddd6cd1c362200e58ca2a38\",\n      \"matricule\": 111116,\n      \"nom\": \"salah\",\n      \"prenom\": \"test\",\n      \"groupe\": \"1CS44\",\n      \"tel\": \"05\",\n      \"lieuNaissance\": \"setif\",\n      \"email\": \"@\",\n      \"adresse\": \"jijel\",\n      \"__v\": 0\n  },\n  {\n        \"dateNaissance\": \"2019-11-26T18:23:36.657Z\",\n        \"_id\": \"5ddd6da8c362200e58ca2a39\",\n        \"matricule\": 111117,\n        \"nom\": \"salah\",\n        \"prenom\": \"test\",\n        \"groupe\": \"1CS44\",\n        \"tel\": \"05\",\n        \"lieuNaissance\": \"setif\",\n        \"email\": \"@\",\n        \"adresse\": \"jijel\",\n        \"__v\": 0\n    },\n    {\n        \"dateNaissance\": \"2019-07-08T23:00:00.000Z\",\n        \"_id\": \"5e0e78dda7537425e4ec8f06\",\n        \"matricule\": 170002,\n        \"nom\": \"brih\",\n        \"prenom\": \"yacine\",\n        \"groupe\": \"1CS9\",\n        \"tel\": \"05\",\n        \"lieuNaissance\": \"jijel\",\n        \"email\": \"@\",\n        \"adresse\": \"jijel\",\n        \"__v\": 0\n    }\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students.js",
    "groupTitle": "Students"
  },
  {
    "type": "post",
    "url": "/students/add",
    "title": "Add one student",
    "name": "PostStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dateNaissance",
            "description": "<p>date of birth of student</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "matricule",
            "description": "<p>matricule of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>name of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>firstname of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupe",
            "description": "<p>group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lieuNaissance",
            "description": "<p>place of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adresse",
            "description": "<p>adress</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"new student added\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students.js",
    "groupTitle": "Students"
  },
  {
    "type": "post",
    "url": "/students/update/:id",
    "title": "Update student by id",
    "name": "UpdateStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Student unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateNaissance",
            "description": "<p>date of birth of student</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "matricule",
            "description": "<p>matricule of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nom",
            "description": "<p>name of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "prenom",
            "description": "<p>firstname of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "groupe",
            "description": "<p>group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tel",
            "description": "<p>phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lieuNaissance",
            "description": "<p>place of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "adresse",
            "description": "<p>adress</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"student updated\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students.js",
    "groupTitle": "Students"
  }
] });
