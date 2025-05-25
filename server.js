//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

app.set('view engine','ejs');


app.use(express.static(__dirname));



//index/home URL
app.get('/',(req,res)=>{
    let title = "Andrei's Home Page"
    res.render('pages/index', {'title':title});

});

//about url
app.get('/about',(req,res)=>{
    let title = "About Page"
    res.render('pages/about', {'title':title});

});

//hobbies: travel
app.get('/hobbiestravel',(req,res)=>{
    let title = "Hobbies: Travel"
    res.render('pages/hobbiestravel', {'title':title});

});

//hobbies: Sailing
app.get('/hobbiessailing',(req,res)=>{
    let title = "Hobbies: Sailing"
    res.render('pages/hobbiessailing', {'title':title});

});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

