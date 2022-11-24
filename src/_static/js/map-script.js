async function initMap() {
  const container = document.querySelector('#map');

  const options = {
    zoom: 25,
    center: { lat: -34.16644556429744, lng: 24.828156701270824 },
    mapTypeId: 'satellite',
  };
  const map = new google.maps.Map(container, options);

  // auto complete
  const input = document.getElementById('searchbox');
  const autocomplete = new google.maps.places.Autocomplete(input);

  drawPolygons(map, '/building');
  google.maps.event.addListener(autocomplete, 'place_changed', callbackAutocomplete(map, autocomplete));
}
window.initMap = initMap;


const callbackAutocomplete = (map, autocomplete) =>  async () => {
  const place = autocomplete.getPlace();
  const location = place.geometry.location;
  map.setCenter(new google.maps.LatLng(location.lat(), location.lng()));
  await drawPolygons(map, `/building?lat=${location.lat()}&lng=${location.lng()}`);
  console.log(`/building?lat=${location.lat()}&lng=${location.lng()}`)
}

async function drawPolygons(map, url) {
  const response = await fetch(url);
  const buildings = await response.json();

  buildings.forEach((building) => {
    const coords = building.shape.coordinates[0];
    const final = coords.map((coord) => {
      return { lng: coord[0], lat: coord[1] };
    });

    const polygon = new google.maps.Polygon({
      paths: final,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.25,
    });

    google.maps.event.addListener(polygon, 'click', function (e) {
      fillSidebar(building)
    });

    polygon.setMap(map);
  });
}
