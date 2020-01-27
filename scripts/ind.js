var planetChoice1 = localStorage.getItem("planetChoice");

var imgURL = "url('img/"+planetChoice1+"-icon.png";


document.body.style.backgroundColor = "#B0B0f0";
document.body.style.backgroundPosition =- "center";
document.body.style.backgroundImage = imgURL;
document.body.style.backgroundSize = "contain";
document.body.style.backgroundRepeat = "no-repeat";

var planetStats = localStorage.getItem(planetChoice1);
console.log(planetStats);

var splits = planetStats.split(',');
 for(i=0;i<splits.length;i++){
     console.log(splits[i]);
 }

//console.log(planetColour.split(''));

var planet = splits[0].split(':')[1];
console.log(planet);
var colour = splits[1].split(':')[1];

var radius = splits[2].split(':')[1];
console.log(colour);
console.log(radius);
var distFromEarth =splits[3].split(':')[1];
console.log(distFromEarth);
var distFromSun = splits[4].split(':')[1];
console.log(distFromSun);


var node = document.createTextNode(planet);
var par = document.createElement("p");
par.appendChild(node);
console.log(par);

 div = document.getElementsByClassName('statsRow');

 var node = document.createTextNode(planet);
 div[0].appendChild(node);

 var node = document.createTextNode(colour);
 div[1].appendChild(node);

 var node = document.createTextNode(radius+" KMs");
 div[2].appendChild(node);

 var node = document.createTextNode(distFromSun+" KMs");
 div[3].appendChild(node);

 var node = document.createTextNode(distFromEarth+" KMs");
 div[4].appendChild(node);

