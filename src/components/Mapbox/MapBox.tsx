import { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Map {
  width: string;
  height: string;
  className: string;
}
interface Viewport {
  latitude: number;
  longitude: number;
  width: string;
  height: string;
  zoom: number;
}
const MapBox: React.FC<Map> = ({ width, height }) => {
  const [viewport, setViewport] = useState<Viewport>({
    latitude: -34.5606284,
    longitude: -58.4603826,
    width,
    height,
    zoom: 15,
  });

  return (
    <>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken='pk.eyJ1Ijoic2ViYXN0aWFuY2hhY2EiLCJhIjoiY2tmOGw1cndnMDludjJza2ZocDFkM24wZCJ9.-P6AySp4Yeochm3N7zpQOg'
        onViewportChange={(viewport: Viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker
          latitude={-34.5606284}
          longitude={-58.4603826}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <FaMapMarkerAlt color='red' size={50} />
        </Marker>
      </ReactMapGl>
    </>
  );
};
export default MapBox;
