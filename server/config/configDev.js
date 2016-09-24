module.exports = {
	root: require('path').normalize(__dirname + '/../..'),
	app: {
		name: 'storyarc'
	},
    baseUrl: "localhost:3000",
    domain: "localhost:3000",
	port: 3000,
    ip: "127.0.0.1",
	db: 'mongodb://localhost/meanp-seed-db',
	model: {},
  google: {
    GOOGLE_CONSUMER_KEY: GOOGLE_CONSUMER_KEY,
    GOOGLE_CONSUMER_SECRET: GOOGLE_CONSUMER_SECRET
  }

};
