const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Get to Know Where I am From';
  var heading = 'Hometown';
  res.render('pages/index',{
    'title':title,
    'heading':heading
  });
})

app.get('/before', (req, res) => {
  var title = 'My Home Before Construction';
  var heading = 'Hometown';
  res.render('pages/before',{
    'title':title,
    'heading':heading
  });
})

app.get('/current', (req, res) => {
  var title = 'My Home Currently';
  var heading = 'Hometown';
  res.render('pages/current',{
    'title':title,
    'heading':heading
  });
})

app.get('/after', (req, res) => {
  var title = 'My Home in 16 Months';
  var heading = 'Hometown';
  res.render('pages/after',{
    'title':title,
    'heading':heading
  });
})

app.get('/users', (req, res) => {
  var title = 'My Users page';
  var heading = 'My Website';
  res.render('users/index',{
    'title':title,
    'heading':heading,
    'users' :data
  });
})

app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 var heading = 'My Website'
res.render('users/view', {
   title: title,
  'heading':heading,
   user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})

