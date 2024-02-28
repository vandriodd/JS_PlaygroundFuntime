import type { Place } from '../api/Place'
import React, { Fragment, useState } from 'react'
import { search } from '../api/search'

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void
}

const LocationSearch = ({ onPlaceClick }: LocationSearchProps) => {
  // never[] is the type of the state because we don't have the type of the places yet
  const [places, setPlaces] = useState<Place[]>([])
  const [term, setTerm] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const results = await search(term)
    setPlaces(results)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='term' className='font-bold'>
          Search
        </label>
        <input
          className='border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full'
          id='term'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      <h2 className='font-bold mt-6'>Found Locations</h2>
      <div className='grid grid-cols-[1fr_40px] gap-2 mt-2 items-center'>
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className='text-sm'>{place.name}</p>
              <button
                className='bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded'
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
              <div className='border-b w-full col-span-2' />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
export default LocationSearch
