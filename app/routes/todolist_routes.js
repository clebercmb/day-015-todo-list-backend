


var ObjectID = require('mongodb').ObjectID;


module.exports = function(app, db) { 

    app.put('/todolist/:id', (req, res) => {    
        const id = req.params.id;    
        const details = { '_id': new ObjectID(id) };    
        const note = { 
            //text: req.body.body, 
            todo: req.body.todo 
        };   
        db.collection('todolist').update(details, note, (err, result) => {
            if (err) {          
                res.send({'error':'An error has occurred'});      
            } else {          
                res.send(note);      
            }     
        });  
    });

    app.delete('/todolist/:id', (req, res) => {    
        const id = req.params.id;    
        const details = { '_id': new ObjectID(id) };    
        db.collection('todolist').remove(details, (err, item) => {      
            if (err) {        
                res.send({'error':'An error has occurred'});      
            } else {        
                res.send('Note ' + id + ' deleted!');      
            }     
        });  
    });


    app.get('/todolist/:id', (req, res) => {    
        const id = req.params.id;    
        const details = {
            '_id': new ObjectID(id) 
        };    
        db.collection('todolist').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});      
            } else { 
                console.log("Item="+item)
                res.send(item);      
            }     
        });  
    });


    app.get('/todolist/', (req, res) => {    
    
        db.collection("todolist").find().toArray((err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});      
            } else { 
                console.log(item)
                res.send(item)
            }
        }) 
    });

    app.post('/todolist', (req, res) => {
        const note = { 
            //text: req.body.body, 
            todo: req.body.todo 
        };    
        db.collection('todolist').insert(note, (err, result) => {      
            if (err) {         
                res.send({ 'error': 'An error has occurred' });       
            } else {
                res.send(result.ops[0]);      
            }    
        });  
    });
};






