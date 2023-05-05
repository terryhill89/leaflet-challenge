// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

 // function to assign colors for legend and markers
 function getColor(d) {
  return  d > 90 ? '#fe5f65' :
          d > 70 ? '#fcb62a' :
          d > 50 ? '#fcb62a' :
          d > 30 ? '#f6da11' :
          d > 10 ? '#dbf300' :
          '#a2f500';
};

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.mag)}</p><hr><p>${new Date(feature.geometry.coordinates[2])}</p>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature
  });

  // Send our earthquakes layer to the createMap function/
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [street, earthquakes]
  });
  

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function(myMap) {
  var div = L.DomUtil.create('div', 'legend')
  var depth = [-10, 10, 30, 50, 70, 90]
  var labels = []

  div.innerHTML = '<i style="background:black;color:white;margin:0;padding:5px;border-radius:8px 8px 0 0">Legend by Depth</i><br>';

  for (let i = 0; i < depth.length; i++) {
      div.innerHTML +=
      `<h4 style="background:${getColor(depth[i])}"> ${depth[i]} ${depth[i + 1] ? `&ndash; ${depth[i + 1]}<br>` : '+'}</h4>`;
  }
  return div
};
legend.addTo(myMap);

}

function createFeatures(eqdata) {
function onEachFeature(feature, layer) {
  layer.bindPopup('<h4>Place: ' + feature.properties.place + '</h4><h4>Depth: ' + (feature.geometry.coordinates[2]) + '</h4><h4>:Magnitude ' + feature.properties.mag + '</h4><h4>USGS Event Page: <a href=' + feature.properties.url + " target='_blank'>Click here</a></h4>", {maxWidth: 400})
}

var layerToMap = L.geoJSON(eqdata, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      let radius = feature.properties.mag * 4.5;
      let depth = feature.geometry.coordinates[2];

      return L.circleMarker(latlng, {
          radius: radius,
          color: 'black',
          fillColor: getColor(depth),
          fillOpacity: 1,
          weight: 1
      });
  }
});
createMap(layerToMap);
}




