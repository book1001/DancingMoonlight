
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "692883d4f6edd5a7",
    center: { lat: 41.82427189668529, lng: -71.40837622147686, },
    // center: { lat: 48.85391, lng: 2.29133 },
    zoom: 18,

    mapTypeControl: false,
    fullscreenControl: false,
    // streetViewControl: false
  });

  // name
  // latitude, longitude
  // image url
  // scaledsize width, height
  const data = [
    [
      "TimeZone",
      41.82427189668529,
      -71.40837622147686,
      "./icons/dancing3.gif",
      50,
      50,
      '<div id="firstHeading">Karan</div>' +
        '<div id="bodyContent">' +
        "I love dancing!"
    ],
    [
      "TimeZone",
      31.82427189668529,
      -71.40837622147686,
      "./icons/dancing3.gif",
      50,
      50,
      '<div id="firstHeading">Karan</div>' +
        '<div id="bodyContent">' +
        "I love dancing!"
    ],
  ];

  var markers = [];

  for (let i = 0; i<data.length; i++){
    const currMarker = data[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],

      icon: {
        url: currMarker[3],
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0),
        size: new google.maps.Size(600,600), //Street View Size
        scaledSize: new google.maps.Size(currMarker[4],currMarker[5]) //GoogleMaps Size(pixel,pixel)
      },

      animation: google.maps.Animation.DROP
    });


    // const infowindow = new google.maps.InfoWindow({
    //   content: currMarker[6],
    //   maxWidth: 400
    // });
    //
    // marker.addListener("click", () => {
    //   infowindow.open({
    //     anchor: marker,
    //     map,
    //     shouldFocus: false,
    //   });
    //
    // });

    let panorama = map.getStreetView();
    let position = { lat: currMarker[1], lng: currMarker[2] };
    let mapHolder = document.getElementById('map');

    let mapInfowindow = new google.maps.InfoWindow({
      content: currMarker[6],
      pixelOffset: new google.maps.Size(25, -20) //Info Window Location
    });

    let streetViewInfowindow = new google.maps.InfoWindow({
      content: currMarker[6],
      pixelOffset: new google.maps.Size(300, -20)
    });

    // marker.addListener("click", () => {
    //   mapInfowindow.open({
    //     anchor: marker,
    //     map,
    //     shouldFocus: false,
    //   });
    //
    //   streetViewInfowindow.open({
    //     anchor: marker,
    //     panorama,
    //     shouldFocus: false,
    //   });
    // });

    // marker.addListener('click', function() {
    //   streetViewInfowindow.setPosition(position);
    //   streetViewInfowindow.open(panorama);
    // });


    marker.addListener('click', function() {
      mapInfowindow.setPosition(position);
      mapInfowindow.open(map);
      streetViewInfowindow.setPosition(position);
      streetViewInfowindow.open(panorama);
    });

    // mapInfowindow.setPosition(position);
    // mapInfowindow.open(map);
    // streetViewInfowindow.setPosition(position);
    // streetViewInfowindow.open(panorama);

    markers.push(marker);
  }


  var isVisible = false;
  google.maps.event.addListener(map.getStreetView(), 'visible_changed', function() {
    var visible = this.getVisible();
    if (visible) {
      console.log("StreetView");
      document.getElementById('sound').play();
      document.getElementById('bodyDancing').style.display="block";
      document.getElementById('iconBody1').style.display="block";
      document.getElementById('iconBody2').style.display="block";
      // document.getElementById('recording').style.display="block";
      // document.getElementById('startBtn').style.display="block";
      // document.getElementById('stopBtn').style.display="block";
      // document.getElementById('downloadbtn').style.display="block";
      // document.getElementById('eyeviewShow').style.visibility="hidden";

      markers.forEach(m => m.icon.scaledSize = new google.maps.Size(600, 600));
      console.log("StreetView start");
    }
    else {
      // markers.forEach(m => m.icon.scaledSize = new google.maps.Size(50, 50));
      document.getElementById('bodyDancing').style.display="none";
      document.getElementById('bodyDancing2').style.display="none";
      console.log("MapView");
    }
    isVisible = visible;
  });
}


const mapcheck = document.getElementById('mapsConsumerUiSceneInternalCoreScene__widget-scene-canvas widget-scene-canvas');

if (!mapcheck.classList.contains('mapsConsumerUiSceneInternalCoreScene__widget-scene-canvas widget-scene-canvas')) {
  console.log('Element does NOT have class');
} else {
  console.log('Element has class');
}
