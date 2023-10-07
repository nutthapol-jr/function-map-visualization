"use client";
// import googleSattellite from "@/components/mapstyles/google-satellite";
// import { Box } from "@mui/material";
// import MapLibreGL from "maplibre-gl";
// import Compare from "@maplibre/maplibre-gl-compare";
// import React, { useEffect } from "react";
// import "maplibre-gl/dist/maplibre-gl.css";
// import googleOdm from "@/components/mapstyles/google-odm";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/mapcompare"),
  { ssr: false }
);

const MapCompare = () => {
  return <DynamicComponentWithNoSSR />;
};

export default MapCompare;
