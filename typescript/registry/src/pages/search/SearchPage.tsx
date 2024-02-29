import { useLoaderData } from 'react-router-dom'
import type { SearchLoaderResult } from './searchLoader'
import PackageListItem from '../../components/PackageListItem'

const SearchPage = () => {
  //^ Fetching data with React Router
  const { searchResults } = useLoaderData() as SearchLoaderResult
  const renderedResults = searchResults.map((result) => (
    <PackageListItem key={result.name} pack={result} />

  ))
  return (
    <div>
      <h1 className='text-2xl font-bold my-6'>
        SearchPage
      </h1>
      <div className='space-y-4 mt-4'>
        {renderedResults}
      </div>
    </div>
  )
}

export default SearchPage
