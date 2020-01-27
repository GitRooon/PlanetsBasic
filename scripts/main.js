class planet{
  
    constructor(name,colour,radius,distFromSun,distFromEarth,image){
        this.name = name;
        this.colour = colour;
        this.radius = radius;
        this.distFromEarth = distFromEarth;
        this.distFromSun = distFromSun;
        this.image = image;
    }
}
function getPlanet(elem){
    var planet = elem.textContent;
     console.log(planet);
    localStorage.setItem("planetChoice",planet);
    window.location ="individual.html";
 }



$(document).ready(function() {
    // Load data from JSON and save to Local Storage
      $.getJSON("dataSets/planets.json", function(dataSet) {

        var planets = new Array();

        for(x = 0; x< dataSet.solarSystem.planets.length;x++){

            var name = dataSet.solarSystem.planets[x].planetName;
            var colour = dataSet.solarSystem.planets[x].planetColor;
            var radius = dataSet.solarSystem.planets[x].planetRadiusKM;
            var distFromEarth = dataSet.solarSystem.planets[x].distInMillionsKM.fromEarth;
            var distFromSun = dataSet.solarSystem.planets[x].distInMillionsKM.fromSun;
            var image = dataSet.solarSystem.planets[x].image;
            console.log(name);




            const plan = new planet(name,colour,radius,distFromSun,distFromEarth,image);

            localStorage.setItem(name,JSON.stringify(plan));

            planets[x] = plan;
        }

        console.log(planets);
        console.log(localStorage.getItem("Uranus"))



      });
    });

    document.getElementsByClassName("planet")
