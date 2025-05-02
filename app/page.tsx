'use client'
import { useCountries } from '@/hooks/useCountries'
import { useCountryMeasure } from '@/hooks/useCountryMeasure'
import { Box, Flex, Heading } from '@chakra-ui/react'

export default function Home() {
  const { data: countries = [] } = useCountries()
  const { data: measureData } = useCountryMeasure('poland', 'life_expectancy')

  // console data just to ensure proper availability in app
  console.log('Countries:', countries)
  console.log('Measure Data:', measureData)

  return (
    <Box p={6}>
      <Flex minH='100vh' align='center' justify='center'>
        <Heading mb={4}>Datastory Country Dashboard</Heading>
      </Flex>
    </Box>
  )
}
