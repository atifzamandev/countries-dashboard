import { useCountries } from '@/hooks/useCountries'
import { Country } from '@/types/country'
import {
  Box,
  NativeSelectField,
  NativeSelectIndicator,
  NativeSelectRoot,
  Text,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'

interface CountrySelectorProps {
  selectedCountry: string
  onSelect: (country: string) => void
}

const CountrySelector = ({
  selectedCountry,
  onSelect,
}: CountrySelectorProps) => {
  const { data: countriesData, isLoading, error } = useCountries()

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error loading data</Text>
  if (!countriesData || countriesData.length === 0)
    return <Text>No countries data available</Text>

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value)
  }

  return (
    <Box>
      <Text mb={4}>Select Country</Text>
      <NativeSelectRoot size='sm' width='240px'>
        <NativeSelectField
          placeholder={selectedCountry}
          value={selectedCountry}
          onChange={handleChange}
        >
          {countriesData.map((country: Country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </NativeSelectField>
        <NativeSelectIndicator />
      </NativeSelectRoot>
    </Box>
  )
}

export default CountrySelector
