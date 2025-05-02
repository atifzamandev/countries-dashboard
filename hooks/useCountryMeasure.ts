import { graphqlClient } from '@/lib/graphqlClient'
import { GET_COUNTRY_MEASURE } from '@/lib/queries'
import { MeasureData, MeasureDataResponse } from '@/types/measure'
import { queryConfig } from '@/utils/queryConfig'
import { useQuery } from '@tanstack/react-query'

export const useCountryMeasure = (country: string, measure: string) => {
  return useQuery<MeasureData[]>({
    queryKey: ['countryMeasure', country, measure],
    queryFn: async () => {
      const { cube_cube_M6Lh5is0FtqUhZ } =
        await graphqlClient.request<MeasureDataResponse>(GET_COUNTRY_MEASURE, {
          country: country.toLowerCase(),
          measure,
        })
      return cube_cube_M6Lh5is0FtqUhZ
    },
    enabled: !!country && !!measure,
    ...queryConfig,
  })
}
