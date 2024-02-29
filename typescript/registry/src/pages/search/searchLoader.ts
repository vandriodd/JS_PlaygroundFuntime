import type { PackageSummary } from '../../api/types/packageSummary'
import { searchPackage } from '../../api/queries/searchPackage'

export interface SearchLoaderResult {
  searchResults: PackageSummary[]
}

export const searchLoader = async ({ request }: { request: Request }): Promise<SearchLoaderResult> => {
  // request object contains information about the current request
  // URLSearchParams is a built-in object that allows to work with the query string of a URL
  const { searchParams } = new URL(request.url)
  const term = searchParams.get('term')

  if (!term) {
    throw new Error('Search term must be provided')
  }

  const results = await searchPackage(term)

  // return an object because the loader function must return an object, it's more flexible
  return {
    searchResults: results
  }
}
