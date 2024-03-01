import type { PackageDetails } from '../../api/types/packageDetails'
import type { Params } from 'react-router-dom'
import getPackage from '../../api/queries/getPackage'

interface DetailsLoaderProps {
  // Params -> object which contains keys with string values
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export const detailsLoader = async ({ params }: DetailsLoaderProps): Promise<DetailsLoaderResult> => {
  // destructuring for accessing the name property (package name from the URL params)
  const { name } = params

  if (!name) {
    throw new Error('Name must be provided')
  }

  const details = await getPackage(name)

  // we doesn't need to return an object, but it's more flexible when we need to return more than one value
  return {
    details
  }
}
