import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'
// Leaflet is a standalone library that will be used to display a map in the browser
import type { Map as LeafletMap } from 'leaflet'
// It's kind of a non-React library, so we need to import react-leaflet to work nicely with React
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import type { Place } from '../api/Place'

interface MapProps {
  place: Place | null ;
}

const Map = ({ place }: MapProps) => {
  // useRef to control the map
  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    if (mapRef.current && place) {
      // flyTo is the function that will move the map to the specified coordinates
      mapRef.current.flyTo([place.latitude, place.longitude])
    }
  }, [place])

  return (
    <MapContainer ref={mapRef} center={[40.7, -74]} zoom={12} scrollWheelZoom className='h-full'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  )
}
export default Map
