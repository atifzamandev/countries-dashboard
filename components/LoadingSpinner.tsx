import { Spinner, Text, VStack } from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
    <VStack colorPalette='teal'>
      <Spinner color='colorPalette.600' size='lg' />
      <Text color='colorPalette.600'>Loading...</Text>
    </VStack>
  )
}

export default LoadingSpinner
