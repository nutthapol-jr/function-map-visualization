import { StyleSpecification } from "maplibre-gl";

const googleOdm: StyleSpecification = {
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
    odm: {
      type: "raster",
      //   url: "https://demo.webodm.org/api/projects/45/tasks/2f3474e3-5f5a-4a85-87d6-8470f3c68bdf/orthophoto/tiles.json?format=json",
      tiles: [
        "https://demo.webodm.org/api/projects/45/tasks/2f3474e3-5f5a-4a85-87d6-8470f3c68bdf/orthophoto/tiles/{z}/{x}/{y}.png",
      ],
      tileSize: 512,
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
      id: "odm",
      type: "raster",
      source: "odm",
      minzoom: 0,
      maxzoom: 22,
    },
  ],
};

export default googleOdm;
