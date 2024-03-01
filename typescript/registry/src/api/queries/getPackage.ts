import type { PackageDetails } from '../types/packageDetails'

const getPackage = async (name: string): Promise<PackageDetails> => {
  const res = await fetch(`https://registry.npmjs.org/${name}`)
  const data = await res.json()

  return data as PackageDetails
}

export default getPackage
