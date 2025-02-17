# Web Map Platform

This project is a web-based mapping platform designed to run on a standard Linux web server. It provides both mobile and desktop views, utilizing Leaflet for mapping functionalities and OpenStreetMap (OSM) tiles as the base map.

## Features

- Interactive map with zoom and pan capabilities.
- Distance calculation tool to measure distances between points.
- Area calculation tool to measure areas of drawn shapes.
- Support for various object types including points, circles, and multipolygons.
- Integration with a web-manageable database for storing layer data and object descriptions.

## Project Structure

```
web-map-platform
├── public
│   ├── index.html          # Main HTML document
│   ├── styles.css         # Styles for the application
│   └── scripts
│       └── main.js        # Main JavaScript file
├── src
│   ├── components
│   │   ├── MapView.js     # Map rendering component
│   │   ├── DistanceCalculator.js # Distance calculation component
│   │   └── AreaCalculator.js     # Area calculation component
│   ├── services
│   │   └── DatabaseService.js    # Database interaction service
│   └── utils
│       └── MapUtils.js    # Utility functions for map operations
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── .gitignore              # Files to ignore in version control
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd web-map-platform
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage Guidelines

- Use the map interface to interact with the layers and objects.
- Utilize the distance and area calculation tools available in the UI.
- Manage layers and objects through the integrated database service.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.