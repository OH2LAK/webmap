class MapView {
    constructor(mapContainerId) {
        this.mapContainerId = mapContainerId;
        this.map = null;
        this.layers = [];
    }

    initMap() {
        this.map = L.map(this.mapContainerId).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(this.map);
    }

    addLayer(layer) {
        this.layers.push(layer);
        layer.addTo(this.map);
    }

    addMarker(lat, lng, options = {}) {
        const marker = L.marker([lat, lng], options).addTo(this.map);
        return marker;
    }

    addCircle(lat, lng, radius, options = {}) {
        const circle = L.circle([lat, lng], { radius, ...options }).addTo(this.map);
        return circle;
    }

    addPolygon(latlngs, options = {}) {
        const polygon = L.polygon(latlngs, options).addTo(this.map);
        return polygon;
    }

    onClick(callback) {
        this.map.on('click', callback);
    }

    clearLayers() {
        this.layers.forEach(layer => {
            this.map.removeLayer(layer);
        });
        this.layers = [];
    }
}

export default MapView;