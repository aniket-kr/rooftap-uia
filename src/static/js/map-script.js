function initMap() {
  const container = document.querySelector('.container');

  const options = {
    zoom: 30,
    center: { lat: -25.9319914, lng: 32.5542821 },
    mapTypeId: 'satellite',
  };
  const map = new google.maps.Map(container, options);
}

window.initMap = initMap;
