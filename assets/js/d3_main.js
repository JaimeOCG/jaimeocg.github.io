//var map = L.map('my_places').setView([40.45, -3.7], 6);
var map = L.map('my_places').setView([56.212,9.30], 3) 
// tiles - https://leaflet-extras.github.io/leaflet-providers/preview/

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}).addTo(map);

var student_upm = L.icon({
    iconUrl: 'assets/css/images/graduate.svg',
    title: 'UPM',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

});


var student_u_tad = L.icon({
    iconUrl: 'assets/css/images/graduate.svg',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

});

var student_sweden = L.icon({
    iconUrl: 'assets/css/images/graduate.svg',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

});


L.marker([40.4525869, -3.7286226], {icon: student_upm}).addTo(map).bindPopup("<strong>UPM</strong> <br> Telecommunication engineering");
L.marker([40.5392318, -3.895458], {icon: student_u_tad}).addTo(map).bindPopup("<strong>U-TAD</strong> <br> Erasmus programme, master in embedded systems");
L.marker([57.7771477, 14.1594412,], {icon: student_sweden}).addTo(map).bindPopup("<strong>U-TAD</strong> <br> Master in datascience");

var education = [
	{
		"Degree": "Telecommunication engineering, bachelor and master",
		"University": "UPM, Spain",
		"Year": "2005-2011",
	},
	{
		"Degree": "Erasmus programme, master in embedded systems",
		"University": "Jönköping University, Sweden",
		"Year": "2009-2010",
	},	
	{
		"Degree": "Master in datascience",
		"University": "U-TAD, Spain",
		"Year": "2020"
	}
]


var work = [
	{
		"company": "Deloitte",
		"fecha_inicio": "2012",
		"fecha_fin": "2012"
	},
	{
		"company": "Telefonica",
		"fecha_inicio": "2012",
		"fecha_fin": "Present"
	}
]

/*
Filling out education information in section 1.
*/

d3.select(".major h2").text("Education")

var printList = function(i){
    var ul = d3.select("#one p")
                .append("p")
                .text(i.Degree)
                    .append("ul")
        ul.append("li")
          .text("University: " + i.University)   
        ul.append("li")
          .text("Year: " + i.Year)   
            
}

education.forEach(printList)

/*

*/