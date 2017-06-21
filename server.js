var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

// app.get('/', function(req, res) {
// 	res.send("Hello world from server.js!")
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
	console.log("Received a GET request.")

    db.contactlist.find(function(err, docs){
            console.log(docs);
            res.json(docs);
    });

	// person1= {
 //        name: 'Colin',
 //        email: 'colin@cunt.com',
 //        number:'(571) 426-1433'
 //    };

 //    person2 = {
 //        name:'Navid',
 //        email:'navid@jew.com',
 //        number: '(777) 777-7777'
 //    };

 //    person3={
 //        name: 'Clint',
 //        email:'clint@guy.com',
 //        number: '(684) 426-1232'
 //    };

	// var contactlist = [person1, person2, person3];
	// res.json(contactlist);

});

app.post('/contactlist', function(req, res){
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc);
    })
});

app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;

    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    })
});

app.listen(3000);
console.log("Server running on port 3000.");