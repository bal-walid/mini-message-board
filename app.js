const express = require("express")
const path = require("path")

const viewsPath = path.join(__dirname, 'views');
const staticPath = path.join(__dirname, 'public');

const app = express()

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.send('<p>some html </p>')
})

const PORT = 3000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`));