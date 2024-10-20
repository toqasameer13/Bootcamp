function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const myLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: myLatLng,
        });

        new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: "You are here!",
        });
      },
      function () {
        alert("Geolocation failed or permission denied.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

window.initMap = initMap;
