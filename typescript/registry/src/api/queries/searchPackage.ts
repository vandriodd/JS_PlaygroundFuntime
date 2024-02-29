import type { PackageSummary } from '../types/packageSummary'

interface SearchResult {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    }
  }[]
}

export const searchPackage = async (term: string): Promise<PackageSummary[]> => {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  )
  const data: SearchResult = await res.json()

  // destructuring package to avoid repeating searchResult.package
  return data.objects.map(({ package: { name, description, version, keywords } }) => {
    return {
      name,
      description,
      version,
      keywords
    }
  })
}
