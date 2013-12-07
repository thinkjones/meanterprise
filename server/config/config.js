module.exports = {
	root: require('path').normalize(__dirname + '/../..'),
	app: {
		name: 'meanp-seed'
	},
    baseUrl: "<replace with productionurl - acme.com>",
	port: process.env.PORT,
    ip: 0,
	db: 'mongodb://<location of your production mongodb>',
	model: {}
};
