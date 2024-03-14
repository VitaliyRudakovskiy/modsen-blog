export const mapPoints = [
  {
    id: 'Minsk',
    latitude: 53.902156,
    longitude: 27.561247,
  },
  {
    id: 'Vilnus',
    latitude: 54.689378,
    longitude: 25.270528,
  },
  {
    id: 'Warsaw',
    latitude: 52.232282,
    longitude: 21.006672,
  },
  {
    id: 'Moscow',
    latitude: 55.75222,
    longitude: 37.61556,
  },
  {
    id: 'Berlin',
    latitude: 52.52437,
    longitude: 13.41053,
  },
  {
    id: 'Voronezh',
    latitude: 51.67204,
    longitude: 39.1843,
  },
];

export const mapConfig = {
  zoom: 5,
  center: [27.561247, 53.902156] as [number, number],
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_GL_API_KEY,
};
