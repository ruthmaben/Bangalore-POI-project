L.mapbox.accessToken = 'pk.eyJ1IjoicmFteWFyYWd1cGF0aHkiLCJhIjoiOHRoa2JJTSJ9.6Y38XMOQL80LZyrUAjXgIg';
var southWest = L.latLng(14.10, 74.99),
    northEast = L.latLng(11.36, 79.98),
    bounds = L.latLngBounds(southWest, northEast);
//12.9678/77.5867
var map = L.mapbox.map('map', 'ruthmaben.0c95069b', {
  maxBounds: bounds,
    maxZoom: 19,
    minZoom: 10
  });
var baseLayers = {};
//adding markerclusters

var foreignexchangeCluster = createClusters('foreignexchange','large',"#0cf2f0");
    
var shoppingmallCluster = createClusters('shoppingmall','large','#CE3386');

var atmCluster = createClusters('atm','large',"#6b47b6");

var metroCluster = createClusters('metro','large',"#424242");

var busStopCluster = createClusters('bus_stop','large',"#FE2E2E");

var pubCluster = createClusters('pub','large',"#98292E");

var restaurantCluster = createClusters('restaurant','large',"#F781F3");

var sportscentreCluster = createClusters('sports_centre','large',"#40A8D7");

var touristattractionCluster = createClusters('tourist_attraction','large',"#F3F781");

//var heatMap = new L.TileLayer.HeatCanvas();
// var myLayer = L.mapbox.featureLayer(); -> returns a map.layer
// myLayer.setGeoJSON(busstopgeoJson);
var busStop = bindingPopup(busStop_geoJson)
busStopCluster.addLayer(busStop);

var atm = bindingPopup(atm_geoJson)
atmCluster.addLayer(atm);

var metro = bindingPopup(metro_geoJson);
metroCluster.addLayer(metro);

var restaurant = bindingPopup(res_geoJson);
restaurantCluster.addLayer(restaurant);

var foreignexchange = bindingPopup(foreignexchange_geoJson);
foreignexchangeCluster.addLayer(foreignexchange);
    
var pub = bindingPopup(pub_geoJson);
     pubCluster.addLayer(pub);
   
var shoppingmall = bindingPopup(shoppingmall_geoJson);
     shoppingmallCluster.addLayer(shoppingmall);
     
   
var sportscentre = bindingPopup(sports_centre_geoJson);
     sportscentreCluster.addLayer(sportscentre);

var touristattraction = bindingPopup(tourist_attraction_geoJson);
     touristattractionCluster.addLayer(touristattraction);

var overlays = {
"Bus Stops": busStopCluster,
"Restaurants": restaurantCluster,
"Pubs": pubCluster,
"ATM": atmCluster,
"Metro": metroCluster,
"Foreign Exchange": foreignexchangeCluster,
"Shopping Mall": shoppingmallCluster,
"Sports Centre": sportscentreCluster, 
"tourist attraction": touristattractionCluster 
    
//"Heatmap":heatMap
};
L.control.layers(baseLayers, overlays).addTo(map);

function createClusters(poi,markersize,markercolor){

  
   var createCluster = new L.MarkerClusterGroup({
      
        iconCreateFunction: function(cluster) {
          return L.mapbox.marker.icon({
          // show the number of markers in the cluster on the icon.
              'marker-symbol': cluster.getChildCount(),
              'marker-color': markercolor,
              "marker-size": markersize 
            });
          }

  });
  
  return createCluster;
}


function bindingPopup(geoJSON){
  var whatL_GeoJSONReturns = L.geoJson(geoJSON,{
    pointToLayer: L.mapbox.marker.style,
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.name); //adding popups
  }
});

  return whatL_GeoJSONReturns;
}