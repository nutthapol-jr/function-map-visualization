import { StyleSpecification } from "maplibre-gl";

const googleSattellite: StyleSpecification = {
  version: 8,
  name: "Google Satellite",
  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://api.maptiler.com/tiles/v3/tiles.json?key={key}",
    },
    "google-satellite": {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
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
  ],
};

export default googleSattellite;
