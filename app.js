const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(require('./routes/index'));
app.use(express.json());

app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home')
});
/*


app.get('/contacto', (req, res) => {
    res.render('nodemailer')
});
*/

app.listen(3000,()=>{
    console.log('Server on port 3000');
});

