import { Place } from './Place'

interface SearchResult {
  features: {
    geometry: {
      coordinates: number[]
    }
    properties: {
      place_id: number
      display_name: string
    }
  }[]
}

export const search = async (term: string) => {
  // ^ Explaining the URL
  // q: the search term
  // format: the format of the response (geojson)
  // ! geojson is a format for encoding a variety of geographic data structures
  // addressdetails: whether to include address details in the response
  // layer: the layer to search in (address)
  // limit: the maximum number of results to return
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  )

  // ^ 2 ways for this type assertion
  // 1 - const variable = (await promise) as Type
  // 2 - const variable: Type = await promise
  const data: SearchResult = await res.json()

  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1]
    }
  })

  return places
}
