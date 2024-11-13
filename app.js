const express = require("express")
const path = require("path")

const viewsPath = path.join(__dirname, 'views');
const staticPath = path.join(__dirname, 'public');

const app = express()

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static(staticPath));
app.use(express.urlencoded({extended: true}))

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Pss pss el gato",
    user: "Me",
    added: new Date()
  }
];

const formatDate = require("./helpers/formatDate");

app.get('/', (req, res) => {
  res.render('index', {title: 'Mini Messageboard', messages, formatDate});
})

app.get('/new', (req, res) => {
  res.render('form', {title: 'Form'});
})

app.post('/new', (req, res) => {
  const {user, text} = req.body;
  const added = new Date();
  messages.push({user, text, added});
  res.redirect('/');
})

const PORT = 3000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`));