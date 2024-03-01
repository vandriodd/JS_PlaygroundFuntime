import type { PackageDetails } from '../types/packageDetails'

const FEATURED_PACKAGES = [
  'react',
  'typescript',
  'esbuild',
  'vite'
]

export const getFeaturedPackages = async () => {
  //^ Fetching packages in parallel
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`)
    return res.json()
  })

  // we need to wait for all promises to resolve
  const data = await Promise.all(promises)

  return data as PackageDetails[]
}
