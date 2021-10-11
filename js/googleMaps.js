var map = L.map('mapa').setView([-34.61246, -58.68663], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.61246, -58.68663]).addTo(map)
    .bindPopup('Quinta Udaondo')
    .openPopup();