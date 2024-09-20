'use client';
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// URL to the Canada GeoJSON data
const geoUrl = 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson';

const CanadaMap = () => {
  return (
    <div className='rounded-lg' style={{ width: '700px', height: '400px', backgroundColor: '#F5F5F5', padding: '20px', position: 'relative' }}>
      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{ scale: 1000, center: [1.3468, 62.1304] }} // Adjust scale and center for Canada
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default CanadaMap;
