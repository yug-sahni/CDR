// Check if the browser supports geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Get the latitude and longitude from the position object
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Fill the form fields with these values
        document.getElementById('locationX').value = latitude;
        document.getElementById('locationY').value = longitude;
        
        // Initialize the map (example, if needed)
    //     var map = L.map('map').setView([latitude, longitude], 13);
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '© OpenStreetMap contributors'
    //     }).addTo(map);
    //     L.marker([latitude, longitude]).addTo(map)
    //         .bindPopup('You are here!')
    //         .openPopup();
    // }, function(error) {
    //     console.error('Error getting location:', error);
    });
} else {
    console.log('Geolocation is not supported by this browser.');
}
