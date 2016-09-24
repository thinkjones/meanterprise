module.exports = {
  root: require('path').normalize(__dirname + '/../..'),
  app: {
    name: 'meanp-seed'
  },
  baseUrl: "localhost:3000",
  domain: "localhost:3000",
  port: 3000,
  ip: "127.0.0.1",
  db: 'mongodb://localhost/meanp-seed-db',
  model: {},
  google: {
    GOOGLE_CONSUMER_KEY: process.env.GOOGLE_CONSUMER_KEY,
    GOOGLE_CONSUMER_SECRET: process.env.GOOGLE_CONSUMER_SECRET
  }
};
