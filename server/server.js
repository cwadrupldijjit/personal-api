var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var port = 8794,
	meData = {
		name: 'Sam Skeen',
		location: 'Provo, UT',
		hobbies: [
			'3d modeling',
			'Video games',
			'Reading',
			'Writing',
			'Singing',
			'Learning',
			'Listening to music',
			'Biking',
			'Working out',
			'Eating',
			'Writing in Star Wars alphabets'
		],
		occupations: [
			{
				company: 'Mitchell International',
				department: 'Mitchell Pharmacy Solutions/Auto Rx',
				position: 'Customer Service Support, level 2',
				beginDate: new Date('July 01, 2015'),
				endDate: new Date('August 12, 2015')
			},
			{
				company: 'Mitchell International',
				department: 'Mitchell Pharmacy Solutions/Auto Rx',
				position: 'Customer Service Support, level 1',
				beginDate: new Date('February 01, 2015'),
				endDate: new Date('July 01, 2015')
			},
			{
				company: 'Cogent Works',
				department: 'Auto Rx',
				position: 'HD representative',
				beginDate: new Date('July 15, 2015'),
				endDate: new Date('February 01, 2015')
			},
			{
				company: 'Cogent Works',
				department: 'Transportation (National MedTrans Network)',
				position: 'Customer Service',
				beginDate: new Date('March 03, 2015'),
				endDate: new Date('July 15, 2015')
			}
		]
	}

app.use(bodyParser.json());

app.use(function(res, req, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	
	next();
});

app.get('/', function(req, res) {
	
});

app.get('/name', function(req, res) {
	res.json(meData.name);
});

app.get('/location', function(req, res) {
	res.json(meData.location);
});

app.get('/hobbies', function(req, res) {
	res.json(meData.hobbies);
});

app.get('/occupations', function(req, res) {
	res.json(meData.occupations);
});

app.get('/occupations/latest', function(req, res) {
	var latestDate = meData.occupations[0].endDate.getTime(),
		latestJob = meData.occupations[0];
	
	for (var i = 0; i < meData.occupations.length; i++) {
		if (latestDate <= meData.occupations[i].endDate.getTime()) {
			latestJob = meData.occupations[i];
		}
	}
	res.json(latestJob);
});

app.post('/name', function(req, res) {
	var newName = req.body;
	
	meData.name = newName;
});

app.post('/location', function(req, res) {
	var newLocation = req.body;
	
	meData.location = newLocation;
});

app.listen(port, function() {
	var host = 'localhost';
	console.log("Express app running at http://%s:%s", host, port);
});