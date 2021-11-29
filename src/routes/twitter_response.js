var Twitter = require('twitter');
const envConfig = global.config;

var client = new Twitter({
  consumer_key: envConfig.twitter.consumer_key,
  consumer_secret: envConfig.twitter.consumer_secret,
  access_token_key: envConfig.twitter.access_token_key,
  access_token_secret: envConfig.twitter.access_token_secret
});

module.exports = (app) => {
  /* GET users listing. */
  app.post('/', function(req, res, next) {
    client.post('statuses/update', {status: req.body.dataA},  function(error, tweet, response) {
      if(error) throw error;
    });
  
    console.log(req.body.dataA);
    res.send('responded with a resource');
  });
}