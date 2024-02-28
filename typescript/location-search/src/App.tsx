import Map from './components/Map'
import LocationSearch from './components/LocationSearch'

const App = () => {
  return (
    <>
      <header>
        <h1>Location search app</h1>
      </header>
      <main className='h-screen w-screen grid grid-cols-12'>
        <section className='col-span-3 p-2'>
          <LocationSearch />
        </section>
        <section className='col-span-9'>
          <Map />
        </section>
      </main>
    </>
  )
}

export default App
