var UserModel = require('../models/countries');
var UserController = module.exports = {


	filter: function(req, res){
		var x = req.query;
		var y = [];
		for (var i = 0; i < UserModel.length; i++) {
			if (((UserModel[i].name).toUpperCase().indexOf((x.search).toUpperCase())) != (-1)) {
				y.push(UserModel[i]);
			}
		}
		res.send(y);
	}
};
