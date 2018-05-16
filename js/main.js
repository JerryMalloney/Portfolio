      function initMap() {
        var uluru = {lat: 10.1725745, lng: -68.0642644};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }