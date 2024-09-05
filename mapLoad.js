var map = L.map('map').setView([28, 77], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// console.log(latitude, longitude)


var circle = L.circle([28.8508, 77.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// var marker = L.marker([28, 77]).addTo(map);
// var markers = new L.FeatureGroup()
// markers.addLayer(marker)

// map.on('zoomend', function() {
//     if (map.getZoom() < 10){
//             map.removeLayer(markers);
//     }
//     else {
//             map.addLayer(markers);
//         }
// });
const objectList = {
    "Floods" : "blue",
    "Earthquake" : "#F77B60",
    "Earthquake" : "#452223",
    "Hurricane" : "#5564a1",
    "Tornado" : "#43228f",
    "Flood" : "#22828f",
    "Drought" : "#dbd376",
    "Landslide" : "#76db76"
}

const test = {
    1: ["Hurricane", 27.1, 78.1],
    2: ["Fire", 28.9, 78.5],
    3: ["Earthquake", 28.4, 78.7],
    4: ["Flood", 28.5, 78.6],
    5: ["Hurricane", 28.5, 77.1],
    6: ["Drought", 28.3, 78.5],
    7: ["Fire", 27.8, 77.8],
    8: ["Hurricane", 27.2, 78.7],
    9: ["Fire", 28.7, 78.4],
    10: ["Flood", 28.7, 78.3],
    11: ["Flood", 27.6, 79.0],
    12: ["Flood", 28.3, 78.8],
    13: ["Earthquake", 27.8, 77.3],
    14: ["Roadblock", 27.8, 77.1],
    15: ["Flood", 27.3, 78.2],
    16: ["Hurricane", 28.6, 78.5],
    17: ["Flood", 28.1, 78.9],
    18: ["Earthquake", 27.7, 77.6],
    19: ["Hurricane", 27.3, 78.5],
    20: ["Flood", 28.5, 78.7],
    21: ["Hurricane", 28.4, 77.1],
    22: ["Earthquake", 28.1, 78.6],
    23: ["Flood", 27.7, 78.1],
    24: ["Drought", 27.1, 77.5],
    25: ["Earthquake", 28.8, 78.9],
    26: ["Earthquake", 28.6, 77.9],
    27: ["Hurricane", 27.3, 77.6],
    28: ["Flood", 27.5, 78.3],
    29: ["Roadblock", 28.2, 77.8],
    30: ["Flood", 28.7, 78.4],
    31: ["Earthquake", 28.7, 77.9],
    32: ["Fire", 28.5, 78.7],
    33: ["Flood", 27.0, 78.5],
    34: ["Roadblock", 28.2, 77.6],
    35: ["Fire", 27.4, 77.3],
    36: ["Drought", 28.5, 77.6],
    37: ["Roadblock", 27.1, 77.1],
    38: ["Fire", 28.1, 77.9],
    39: ["Earthquake", 27.7, 77.7],
    40: ["Drought", 28.9, 77.8]
}



// Object.keys(test).forEach(key => {
//     var circle = L.circle([test[key][1], test[key][2]], {
//         color: objectList[test[key][0]],
//         fillColor: objectList[test[key][0]],
//         fillOpacity: 0.5,
//         radius: 1000
//     }).addTo(map);
// });

var marker = L.marker([22, 73]).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: '',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 68],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var Hurricane = new LeafIcon({iconUrl: './images/Hurricane.svg'})
var Flood = new LeafIcon({iconUrl: './images/Floods.svg'})
var Roadblock = new LeafIcon({iconUrl: './images/Road block.svg'})
var Fire = new LeafIcon({iconUrl: './images/Fire.svg'})
var Extremeheat = new LeafIcon({iconUrl: './images/Extreme heat.svg'})
var Earthquake = new LeafIcon({iconUrl: './images/Earthquake.svg'})



const img = {
    "Flood" : Flood,
    "Hurricane" : Hurricane,
    "Roadblock" : Roadblock,
    "Fire" : Fire,
    "Drought" : Extremeheat,
    "Earthquake" : Earthquake
}

// var shelterMarkers = new L.FeatureGroup()
// shelterMarkers.addLayer(Hurricane)
// shelterMarkers.addLayer(Flood)
// shelterMarkers.addLayer(Roadblock)
// shelterMarkers.addLayer(Fire)
// shelterMarkers.addLayer(Extremeheat)
// shelterMarkers.addLayer(Earthquake)

Object.keys(test).forEach(key => {
    L.marker([test[key][1], test[key][2]], {icon: img[test[key][0]]}).addTo(map).bindPopup(test[key][0]);
    console.log(img[test[key][0]], key)
});
    


// map.on('zoomend', function() {
//     if (map.getZoom() < 5){
//             map.removeLayer(shelterMarkers);
//     }
//     else {
//             map.addLayer(shelterMarkers);
//         }
// });
