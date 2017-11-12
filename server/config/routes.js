var users = require('../controllers/users.js'); 
module.exports = function(app){

    app.get('/', function(req,res){users.index(req,res)})
    // Add User Request 
    app.post('/mongoose', function(req, res){users.create(req,res)})

    app.get('/mongooses/new',function(req,res){users.new(req,res)})

    app.get('/mongooses/edit/:id',function(req,res){users.edit(req,res)})

    app.get('/mongooses/:id',function(req,res){users.show(req,res)})

    app.post("/mongooses/destroy/:id",function(req,res){users.destroy(req,res)})

    app.post('/mongooses/:id',function(req,res){users.update(req,res)})
}