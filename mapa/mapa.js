$(document).ready(function () {
  let map = L.map("map").setView([52.449720, 21.034916], 14);

  let danezOSM = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  let danezORTO = L.tileLayer(
    "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution"
  );

  //zrodlo 3
  let rzeczki = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms?",
    {
      layers: "geoportal_zegrze:OT_PTWP_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );
  // map.addLayer(rzeczki)

  let BUBD = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_BUBD_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );
  
  let BUIN = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_BUIN_L",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTGN = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTGN_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTKM = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTKM_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTLZ = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTLZ_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTNZ = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTNZ_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTPL = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTPL_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTRK = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTRK_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTTR = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTTR_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTUT = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTUT_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTWZ = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTWZ_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let PTZB = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTZB_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let SKDR = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_SKDR_L",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  
  let kompozycja = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:kompozycja_warstw",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
    
  );

  let baseMaps = {
    "dane z OSM": danezOSM,
    "dane z ORTO": danezORTO,
    "dane z BDOT10k":kompozycja,
  };
  
  let overlayMaps = {
  
    "rzeczki":rzeczki,
    "budowle inżynierskie":BUIN,
    "grunty nieużytkowane":PTGN,
    "tereny pod drogami kołowymi, szynowymi i lotniskowymi":PTKM,
    "tereny leśny i zadrzewiony":PTLZ,
    "pozostały teren niezabudowany":PTNZ,
    "place":PTPL,
    "roślinność krzewiasta":PTRK,
    "roślinność trawiasta i uprawa rolna":PTTR,
    "uprawa trwała":PTUT,
    "wyrobisko i zwałowisko":PTWZ,
    "tereny zabudowane":PTZB,
    "drogi":SKDR,
    "budynki":BUBD,

  };

  L.control.layers(baseMaps, overlayMaps).addTo(map);

  map.addLayer(danezOSM);
});
