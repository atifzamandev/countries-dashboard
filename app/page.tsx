import { Box, Flex, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box p={6}>
      <Flex minH='100vh' align='center' justify='center'>
        <Heading mb={4}>Datastory Country Dashboard</Heading>
      </Flex>
    </Box>
  )
}
