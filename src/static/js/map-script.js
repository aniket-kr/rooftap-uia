async function initMap() {
  const container = document.querySelector('.container');

  const options = {
    zoom: 25,
    center: { lat: -34.16644556429744, lng: 24.828156701270824 },
    mapTypeId: 'satellite',
  };
  const map = new google.maps.Map(container, options);

  const response = await fetch('/building');
  const buildings = await response.json();

  buildings.forEach(building => {
    const coords = building.shape.coordinates[0];
    const final = coords.map(coord => { return {lng: coord[0], lat: coord[1]}});

    const polygon = new google.maps.Polygon({
      paths: final,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });

    google.maps.event.addListener(polygon, 'click', function (e) {
      // const marker = new google.maps.Marker({
      //   position: 
      // })
    });

    polygon.setMap(map);
  });
}

window.initMap = initMap;
