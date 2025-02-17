export function createCircle(center, radius) {
    return L.circle(center, {
        radius: radius,
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.5,
    });
}

export function createMultiPolygon(coords) {
    return L.polygon(coords, {
        color: 'green',
        fillColor: '#3f0',
        fillOpacity: 0.5,
    });
}

export function convertLatLngToString(latLng) {
    return `${latLng.lat}, ${latLng.lng}`;
}

export function convertStringToLatLng(latLngString) {
    const [lat, lng] = latLngString.split(',').map(Number);
    return L.latLng(lat, lng);
}

export function calculateDistance(latLng1, latLng2) {
    return latLng1.distanceTo(latLng2);
}

export function calculateArea(polygon) {
    return L.GeometryUtil.geodesicArea(polygon.getLatLngs()[0]);
}