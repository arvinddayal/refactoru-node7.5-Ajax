var UserModel = require('../models/countries');
var UserController = module.exports = {


	filter: function(req, res){
		var x = req.query;
		for (var i = 0; i < UserModel.length; i++) {
			if(UserModel[i].name === x.search) {
				res.send(UserModel[i]);
			}
		}
	}
};

