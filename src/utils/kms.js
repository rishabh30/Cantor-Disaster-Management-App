const decryptCredentials = () => new Promise((resolve, reject) => {
	const config = require(`../../${process.env.APP_CREDENTIALS_PATH}`);
  if (!config) {
    reject("No File Found");
  } else {
    console.log(`App started with config for [${process.env.APP_ENV}]`);
    if (process.env.LOG_LEVEL === 'VERBOSE') {
      console.log('=====================================');
      console.log('Server started with the configuration');
      console.log(config);
      console.log('And Environment Variables');
      console.log('process.env.APP_CREDENTIALS_PATH =>', process.env.APP_CREDENTIALS_PATH);
      console.log('process.env.NODE_ENV =>', process.env.NODE_ENV);
      console.log('process.env.APP_ENV =>', process.env.APP_ENV);
      console.log('process.env.LOG_LEVEL =>', process.env.LOG_LEVEL);
      console.log('=====================================');
    }
    resolve(config);
  }
});

module.exports = decryptCredentials;