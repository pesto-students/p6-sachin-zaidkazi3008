const express = require('express');
const https = require('https');
// initialize express :
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page.html')
});

app.post('/', (req,res)=>{
    const cityName = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=d9686bf41f6b3ba0403409b3c4cb08fc&units=metric"
    https.get(url, (response)=> {
        response.on('data', (data)=>{
            const jsonData = JSON.parse(data);
            const temp = jsonData.main.temp;
            const des = jsonData.weather[0].description;
            const icon = jsonData.weather[0].icon
            const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        res.write('<h1>The Temp in '+ cityName + " is " + temp + " " + "degree Celcius </h1>");
        res.write('<p>The Description is ' + des + '</p>');
        res.write("<img src="+ imageUrl + ">");
        res.send();
        })
    } )
});
app.listen(3000);
