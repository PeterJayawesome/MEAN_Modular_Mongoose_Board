var mongoose = require('mongoose');
var User = mongoose.model("User");

module.exports = {
	index: function(req,res){
		if(req.session.err){
            console.log(req.session.err);
        }
        User.find({},function(err,users){
            // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
            res.render('index',{mongoose:users});
        })
	},
	create: function(req,res){
		console.log("POST DATA", req.body);
        var user = new User(req.body);
        // This is where we would add the user from req.body to the database.
        user.save(function(err){
        	if(err){
        		console.log(err);
            }
    		res.redirect('/');
        })
	},
	edit:function(req,res){
		User.findOne({_id:req.params.id},function(err,user){
            if(err){
                req.session.err = err;
                res.redirect('/');
            }
            else{
                res.render("edit",{mongoose:user});
            }
        })
	},
	show: function(req,res){
		User.findOne({_id:req.params.id},function(err,user){
            if(err){
                req.session.err = err;
                res.redirect('/');
            }
            else{
                console.log(req.params.id);
                res.render("show",{user: user});
            }
        })
	},
	destroy: function(req,res){
		User.remove({_id:req.params.id},function(err){
            if(err){
                req.session.err = err;
            }
            res.render('/');
        })
	},
	update: function(req,res){
		User.update({_id:req.params.id},req.body,function(err){
            if(err){
                req.session.err = err;
                res.redirect("/mongooses/edit/"+req.params.id) 
            }
            else{
                console.log("Update successfully!")
                res.redirect('/')
            }
        })
	},
	new: function(req,res){
		res.render('new');
	}
}