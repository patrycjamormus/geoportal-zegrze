$(document).ready(function () {
  let map = L.map("map").setView([52.449720, 21.034916], 14);

  let danezOSM = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  let danezORTO = L.tileLayer(
    "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution"
  );

  //zrodlo 3
  let gminy = L.tileLayer.wms(
    "http://127.0.0.1:8080/geoserver/inzynierka/wms",
    {
      layers: "inzynierka:gminy",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );
  map.addLayer(gminy)

  let baseMaps = {
    "dane z OSM": danezOSM,
    "dane z ORTO": danezORTO,
    "asdfghj":gminy
  };
  L.control.layers(baseMaps).addTo(map);

  map.addLayer(danezOSM);
});
