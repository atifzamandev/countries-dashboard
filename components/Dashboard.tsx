'use client'

import CountrySelector from '@/components/CountrySelector'
import DataChart from '@/components/DataChart'
import MeasureSelector from '@/components/MeasureSelector'
import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const Dashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('poland')
  const [selectedMeasure, setSelectedMeasure] =
    useState<string>('life_expectancy')

  return (
    <Box p={6} maxW='1200px' mx='auto'>
      <Heading size='3xl' textAlign='center' mb={6}>
        Country Profile Dashboard
      </Heading>
      <VStack align='stretch' gap={8}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 10, md: 0 }}
          p={4}
          justify='space-around'
        >
          <CountrySelector
            selectedCountry={selectedCountry}
            onSelect={setSelectedCountry}
          />
          <MeasureSelector
            selectedMeasure={selectedMeasure}
            onSelect={setSelectedMeasure}
          />
        </Stack>
        <DataChart country={selectedCountry} measure={selectedMeasure} />
      </VStack>
    </Box>
  )
}

export default Dashboard
