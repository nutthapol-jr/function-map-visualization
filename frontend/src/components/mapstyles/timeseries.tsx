import { StyleSpecification } from "maplibre-gl";

const Timeseries: StyleSpecification = {
  version: 8,
  name: "Time Series",
  sources: {
    "google-satellite": {
      type: "raster",
      tiles: [
        "http://mt0.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}",
        "http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}",
        "http://mt2.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}",
        "http://mt3.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}",
      ],
      tileSize: 256,
    },
    "ortho-2022": {
      type: "raster",
      tiles: [
        "https://tiles.arcgis.com/tiles/PwS5hVLYsEN2U36s/arcgis/rest/services/2022_Ortho_Tiles/MapServer/WMTS/tile/1.0.0/2022_Ortho_Tiles/default/default028mm/{z}/{y}/{x}.png",
      ],
    },
    "ortho-2020": {
      type: "raster",
      tiles: [
        "https://tiles.arcgis.com/tiles/PwS5hVLYsEN2U36s/arcgis/rest/services/Ortho2020_AGOLtiles/MapServer/WMTS/tile/1.0.0/Ortho2020_AGOLtiles/default/default028mm/{z}/{y}/{x}.png",
      ],
    },
    "ortho-2018": {
      type: "raster",
      tiles: [
        "https://tiles.arcgis.com/tiles/PwS5hVLYsEN2U36s/arcgis/rest/services/2018_Ortho_Tiles/MapServer/WMTS/tile/1.0.0/2018_Ortho_Tiles/default/default028mm/{z}/{y}/{x}.png",
      ],
    },
    "ortho-2016": {
      type: "raster",
      tiles: [
        "https://tiles.arcgis.com/tiles/PwS5hVLYsEN2U36s/arcgis/rest/services/2016orthotiles/MapServer/WMTS/tile/1.0.0/2016orthotiles/default/default028mm/{z}/{y}/{x}.png",
      ],
    },
  },
  sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
  glyphs: "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key={key}",
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": "rgb(239,239,239)" },
    },
    {
      id: "google-satellite",
      type: "raster",
      source: "google-satellite",
      minzoom: 0,
      maxzoom: 22,
    },
    {
      id: "ortho-2022",
      type: "raster",
      source: "ortho-2022",
      minzoom: 0,
      maxzoom: 22,
    },
    {
      id: "ortho-2020",
      type: "raster",
      source: "ortho-2020",
      minzoom: 0,
      maxzoom: 22,
      layout: { visibility: "none" },
    },
    {
      id: "ortho-2018",
      type: "raster",
      source: "ortho-2018",
      minzoom: 0,
      maxzoom: 22,
      layout: { visibility: "none" },
    },
    {
      id: "ortho-2016",
      type: "raster",
      source: "ortho-2016",
      minzoom: 0,
      maxzoom: 22,
      layout: { visibility: "none" },
    },
  ],
};

export default Timeseries;
