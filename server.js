var express = require('express'),
	app = express();

app.use(express.static('./public')) //statically serve the public folder
   .get('*', function (req, res)
   {
   		res.sendfile('public/main.html');
   })
   .listen(3000);