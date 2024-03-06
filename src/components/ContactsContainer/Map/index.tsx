'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import mapConfig from '@/constants/mapConfig';
import mapPoints from '@/constants/mapPoints';

import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './Map.module.scss';

const Map = () => {
  const mapContainerRef = useRef(null);
  const { zoom, center, accessToken } = mapConfig;

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        zoom,
        center,
        accessToken,
      });

      mapPoints.forEach(({ id, latitude, longitude }) => {
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .setPopup(new mapboxgl.Popup({ offset: 100 }).setHTML(`<p>${id}</p>`))
          .addTo(map);
      });

      return () => map.remove();
    }
  }, [zoom, center, accessToken]);

  return <div ref={mapContainerRef} className={styles.map} />;
};

export default Map;
