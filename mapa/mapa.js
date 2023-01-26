$(document).ready(function () {
  var geoserverUrl = "http://localhost:8080/geoserver";
  var selectedPoint = null;
  var source = null;
  var target = null;

  let map = L.map("map").setView([52.44972, 21.034916], 14);

  let danezOSM = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  let danezORTO = L.tileLayer(
    "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution"
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

    let Igrupa = L.tileLayer.wms(
      "http://localhost:8080/geoserver/geoportal_zegrze/wms",
      {
        layers: "	geoportal_zegrze:Igrupa",
        format: "image/png",
        transparent: "true",
        version: "1.1.1",
      }
  );

  let IIgrupa = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:IIgrupa",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
);

let IIIgrupa = L.tileLayer.wms(
  "http://localhost:8080/geoserver/geoportal_zegrze/wms",
  {
    layers: "	geoportal_zegrze:IIIgrupa",
    format: "image/png",
    transparent: "true",
    version: "1.1.1",
  }
);

let kompozycjapomiary = L.tileLayer.wms(
  "http://localhost:8080/geoserver/geoportal_zegrze/wms",
  {
    layers: "	geoportal_zegrze:kompozycja_pomiary",
    format: "image/png",
    transparent: "true",
    version: "1.1.1",
  }
);

  let baseMaps = {
    "dane z OSM": danezOSM,
    "dane z ORTO": danezORTO,
    "dane z BDOT10k": kompozycja,
    "dane z pomiaru kontrolnego": kompozycjapomiary,
  };

  let overlayMaps = {
    "woda powierzchniowa": rzeczki,
    "budowle inżynierskie": BUIN,
    "grunty nieużytkowane": PTGN,
    "tereny komunikacyjne": PTKM,
    "teren leśny i zadrzewiony": PTLZ,
    "inny teren niezabudowany": PTNZ,
    "place": PTPL,
    "roślinność krzewiasta": PTRK,
    "roślinność trawiasta i uprawa rolna": PTTR,
    "uprawa trwała": PTUT,
    "wyrobisko i zwałowisko": PTWZ,
    "tereny zabudowane": PTZB,
    "drogi": SKDR,
    "budynki": BUBD,
    "wyniki pomiaru terenowego - I grupa szczegółów terenowych": Igrupa,
    "wyniki pomiaru terenowego - II grupa szczegółów terenowych": IIgrupa,
    "wyniki pomiaru terenowego - III grupa szczegółów terenowych": IIIgrupa,
  };

  var pathLayer = L.geoJSON(null);

  L.control.layers(baseMaps, overlayMaps).addTo(map);

  map.addLayer(danezOSM);

  var sourceMarker = L.marker([52.449444, 21.033333], {
    draggable: true,
    
  })
    .on("dragend", function (e) {
      selectedPoint = e.target.getLatLng();
      getVertex(selectedPoint);
      getRoute();
    })
    .addTo(map);

  var targetMarker = L.marker([52.451111, 21.04777], {
    draggable: true,
  })
    .on("dragend", function (e) {
      selectedPoint = e.target.getLatLng();
      getVertex(selectedPoint);
      getRoute();
    })
    .addTo(map);
// LOKALIZACJA !!!!
  map.locate({setView:true, maxZoom:10});

//function nazwaFunkcji(parametr){
  // return parametr+2
// }

  //function nazwaFunckji(argument/parametr){return parametr+2}
  function onLocationFound(e) {
    let radius = e.accuracy; // szerokość wielkosć markera lokalizacji na podstawie geokodowania sieci na której się logujemy/ wilekoś m markera proporcjonalna do lokalizacji
    L.marker(e.latlng) 
    .addTo(mymap)
    .bindPopup(`Znajdujesz się w promieniu ${radius} metrów od tego punktu`)
    .openPopup();
  L.circle(e.latlng, radius).addTo(mymap);
   }
  
   function onLocationError(e) {
    alert(e.message);
  }

function onLocationError(e) {
  alert(e.message);
}
  map.on("locationerror", onLocationError);
map.on("locationfound", onLocationFound);

  function getVertex(selectedPoint) {
    var url = `${geoserverUrl}/wfs?service=WFS&version=1.0.0
    &request=GetFeature&typeName=geoportal_zegrze:nearest_vertex
    &viewparams=x:${selectedPoint.lng};y:${selectedPoint.lat};&outputformat=application/json`
    $.ajax({  
    url: url,
      async: false,
      success: function (data) {
        console.log(data)
        loadVertex(
          data,
          selectedPoint.toString() === sourceMarker.getLatLng().toString()
        );
      },
    });
  }

  function loadVertex(response, isSource) {
    var features = response.features;
    map.removeLayer(pathLayer);
    if (isSource) {
      source = features[0].properties.id;
    } else target = features[0].properties.id;
  }

  function getRoute(){
var url = `${geoserverUrl}/wfs?service=WFS&version=1.0.0
&request=GetFeature&typeName=geoportal_zegrze:shortest_path
&viewparams=source:${source};target:${target};
&outputformat=application/json`;

$.getJSON(url, function(data) {
  map.removeLayer(pathLayer);
  pathLayer = L.geoJSON(data);
  map.addLayer(pathLayer);});
}

  }

);


