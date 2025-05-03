'use client'
import DataChart from '@/components/DataChart'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { useState } from 'react'

export default function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState<string>('poland')
  const [selectedMeasure, setSelectedMeasure] =
    useState<string>('life_expectancy')

  return (
    <Box p={6} maxW='1200px' mx='auto'>
      <Heading mb={6}>Country Demography Dashboard</Heading>
      <VStack align='stretch'>
        <DataChart country={selectedCountry} measure={selectedMeasure} />
      </VStack>
    </Box>
  )
}
