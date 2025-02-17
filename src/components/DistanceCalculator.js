class DistanceCalculator {
    constructor(map) {
        this.map = map;
        this.points = [];
    }

    addPoint(lat, lng) {
        this.points.push([lat, lng]);
        this.updateMarkers();
    }

    updateMarkers() {
        // Clear existing markers
        this.clearMarkers();

        // Add new markers for each point
        this.points.forEach(point => {
            L.marker(point).addTo(this.map);
        });
    }

    clearMarkers() {
        // Logic to clear markers from the map
        this.map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                this.map.removeLayer(layer);
            }
        });
    }

    calculateDistance() {
        if (this.points.length < 2) {
            return 0;
        }

        const pointA = L.latLng(this.points[0]);
        const pointB = L.latLng(this.points[1]);
        return pointA.distanceTo(pointB);
    }

    reset() {
        this.points = [];
        this.clearMarkers();
    }
}

export default DistanceCalculator;