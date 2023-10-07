"use client";

import { Box, Grid, Paper, Slider, Typography } from "@mui/material";
import MapLibreGL, { Map, MapEventType } from "maplibre-gl";
import React, { useEffect, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import Timeseries from "@/components/mapstyles/timeseries";

function MapTimeSeries() {
  const [activeYear, setactiveYear] = useState<number>(2022);
  const [map, setmap] = useState<Map | null>(null);
  useEffect(() => {
    const mapInit = new MapLibreGL.Map({
      container: "map",
      style: Timeseries,
      center: [-124.99161007835215, 49.68699963002444],
      zoom: 14,
    });
    mapInit.on("idle", (e: MapEventType["idle"]) => {
      setmap(e.target);
    });

    return () => {
      mapInit.remove();
    };
  }, []);

  const onChangeYear = (
    _event: React.SyntheticEvent | Event,
    value: number | Object
  ) => {
    setactiveYear((_oldValue: number | Object) => {
      if (map) {
        const mapStyle = map.getStyle();
        const onlyOrtho = mapStyle.layers.filter((layer) =>
          String(layer.id).includes("ortho")
        );
        onlyOrtho.forEach((layer) => {
          if (String(layer.id).includes(`${value}`)) {
            map.setLayoutProperty(layer.id, "visibility", "visible");
          } else {
            map.setLayoutProperty(layer.id, "visibility", "none");
          }
        });
      }
      return Number(value);
    });
  };

  return (
    <Box id="map" className="h-screen w-screen">
      <Box className="absolute top-4 left-2 z-10 w-96">
        <Paper elevation={3} className="p-4">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="h6">
                {`Air photos for the City of Courtenay, ${activeYear}`}
              </Typography>
            </Grid>
            <Grid item xs={12} className="pr-4 pl-4">
              <Slider
                aria-label="year marks"
                step={2}
                valueLabelDisplay="auto"
                className="pr-4 pl-4"
                max={2022}
                min={2016}
                marks={[
                  {
                    value: 2016,
                    label: "2016",
                  },
                  {
                    value: 2018,
                    label: "2018",
                  },
                  {
                    value: 2020,
                    label: "2020",
                  },
                  {
                    value: 2022,
                    label: "2022",
                  },
                ]}
                value={activeYear}
                onChangeCommitted={onChangeYear}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default MapTimeSeries;
