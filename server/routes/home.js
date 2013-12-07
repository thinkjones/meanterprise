exports.index = function(req, res){
    console.log ("User logged in :" + req.user);
	res.sendfile('index.html');
};