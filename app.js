const cron = require("node-cron");
const express = require("express");
  
app = express(); 

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","Feburay","March","April","May","June","July","August","September","October","November","December"]; 
const d = new Date();
let day = weekday[d.getDay()];
let mon = month[d.getMonth()];

let dayy = 'Friday';
let monthh = 'April';
let hour = 14;
let minute = 12;
let sec = 3;
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

cron.schedule("*/5 * * * * *", function() {
    if(dayy != day || monthh != mon || hour != hours || minutes != minute || seconds != sec){
        console.log('failed');
    } else {
        console.log('successful');
    }
}); 
  
app.listen(3000);
