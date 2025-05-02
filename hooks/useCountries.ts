import { graphqlClient } from '@/lib/graphqlClient'
import { GET_COUNTRIES } from '@/lib/queries'
import { CountriesQueryResponse, Country } from '@/types/country'
import { queryConfig } from '@/utils/queryConfig'
import { useQuery } from '@tanstack/react-query'

export const useCountries = () => {
  return useQuery<Country[]>({
    queryKey: ['countries'],
    queryFn: async () => {
      const { item } = await graphqlClient.request<CountriesQueryResponse>(
        GET_COUNTRIES
      )
      return item
    },
    ...queryConfig,
  })
}
