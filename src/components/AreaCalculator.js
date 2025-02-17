class AreaCalculator {
    constructor(map) {
        this.map = map;
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
        this.map.addLayer(shape);
    }

    calculateArea() {
        let totalArea = 0;
        this.shapes.forEach(shape => {
            if (shape instanceof L.Polygon) {
                totalArea += L.GeometryUtil.geodesicArea(shape.getLatLngs()[0]);
            }
        });
        return totalArea;
    }

    clearShapes() {
        this.shapes.forEach(shape => {
            this.map.removeLayer(shape);
        });
        this.shapes = [];
    }
}

export default AreaCalculator;