const express = require('express');
const app = express();
const { PORT }= require('./config')

// Set the view engine to EJS and specify the views directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
