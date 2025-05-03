import { measures } from '@/lib/measures'
import {
  Box,
  RadioGroupItem,
  RadioGroupItemHiddenInput,
  RadioGroupItemIndicator,
  RadioGroupItemText,
  RadioGroupRoot,
  Stack,
  Text,
} from '@chakra-ui/react'

interface MeasureSelectorProps {
  selectedMeasure: string
  onSelect: (measure: string) => void
}

const MeasureSelector = ({
  selectedMeasure,
  onSelect,
}: MeasureSelectorProps) => {
  const handleChange = (details: { value: string | null }) => {
    if (details.value !== null) {
      onSelect(details.value)
    }
  }

  return (
    <Box>
      <Text mb={4}>Select Measure</Text>
      <RadioGroupRoot value={selectedMeasure} onValueChange={handleChange}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          {measures.map((measure) => (
            <RadioGroupItem key={measure.value} value={measure.value}>
              <RadioGroupItemHiddenInput />
              <RadioGroupItemIndicator />
              <RadioGroupItemText>{measure.label}</RadioGroupItemText>
            </RadioGroupItem>
          ))}
        </Stack>
      </RadioGroupRoot>
    </Box>
  )
}

export default MeasureSelector
