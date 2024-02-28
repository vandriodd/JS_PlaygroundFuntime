import { useState } from 'react'
import type { Place } from './api/Place'
import Map from './components/Map'
import LocationSearch from './components/LocationSearch'

const App = () => {
  // If we don't specify the type of the state, TypeScript will infer it as `null`
  // For that, we need to specify a generic type for `useState`
  const [place, setPlace] = useState<Place | null>(null)

  return (
    <>
      <header>
        <h1>Location search app</h1>
      </header>
      <main className='h-screen w-screen grid grid-cols-12'>
        <section className='col-span-3 p-2'>
          <LocationSearch onPlaceClick={(p) => setPlace(p)} />
        </section>
        <section className='col-span-9'>
          <Map place={place} />
        </section>
      </main>
    </>
  )
}

export default App
