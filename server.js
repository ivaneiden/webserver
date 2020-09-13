const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000; 

app.use( express.static( __dirname + '/public' ));


//Express hbs
hbs.registerPartials( __dirname + '/views/parciales' )
app.set('view engine', 'hbs');


//helpers

app.get('/', (req, res)=>{

   

    res.render( 'home.hbs', {
        nombre:'IváN'
    });

});

app.get('/about', (req, res)=>{

   

    res.render( 'about.hbs', {
        nombre:'IváN'
    });

});
 
app.listen(port, ()=> {
    console.log(`Escuchando petiiones en el puerto  ${port}`);
})