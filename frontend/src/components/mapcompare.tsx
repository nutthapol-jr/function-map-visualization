// "use client";
import googleSattellite from "@/components/mapstyles/google-satellite";
import { Box } from "@mui/material";
import MapLibreGL from "maplibre-gl";
import Compare from "@maplibre/maplibre-gl-compare";
import React, { useEffect } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import googleOdm from "@/components/mapstyles/google-odm";

const MapCompare = () => {
  useEffect(() => {
    const beforeMap = new MapLibreGL.Map({
      container: "before",
      style: googleOdm,
      bounds: [
        39.30345358509519, -6.202647967179039, 39.310036181407156,
        -6.196149216769788,
      ],
    });

    const afterMap = new MapLibreGL.Map({
      container: "after",
      style: googleSattellite,
      bounds: [
        39.30345358509519, -6.202647967179039, 39.310036181407156,
        -6.196149216769788,
      ],
    });

    // A selector or reference to HTML element
    const container = "#comparison-container";

    const map = new Compare(beforeMap, afterMap, container, {
      // Set this to enable comparing two maps by mouse movement:
      // m ousemove: true

      orientation: "vertical",
      // mousemove: false,
    });
    return () => {
      map.remove();
      beforeMap.remove();
      afterMap.remove();
    };
  }, []);

  return (
    <Box id="comparison-container" className="h-screen w-screen">
      <Box
        id="before"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: 0,
          top: 0,
          zIndex: 0,
        }}
      ></Box>
      <Box
        id="after"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: 0,
          top: 0,
          zIndex: 0,
        }}
      ></Box>
    </Box>
  );
};

export default MapCompare;
