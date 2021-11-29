const db = require("../data/database")
const users = require("../data/models/user")

module.exports = (app) => {
  /* GET users listing. */
  app.get('/data', (req, res) => {
    users.findAll()
    .then(user => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
  })

  app.post('/data/add', (req, res) => {
    const data = {
      name : 'Stranded Person',
      disaster_type : 'Flood',
      contact : '9xxxxx@gmail.com'
    }

    const {name, disaster_type, contact} = data;

    users.create({name, disaster_type, contact})
    .then(user => res.redirect('/data'))
    .catch(err => console.log(err));
  });
}