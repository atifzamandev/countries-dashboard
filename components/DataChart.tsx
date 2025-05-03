import { useCountryMeasure } from '@/hooks/useCountryMeasure'
import { MeasureData } from '@/types/measure'
import { Box, Text } from '@chakra-ui/react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface DataChartProps {
  country: string
  measure: string
}

const DataChart = ({ country, measure }: DataChartProps) => {
  const {
    data: measureData,
    isLoading,
    error,
  } = useCountryMeasure(country, measure)

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error loading data</Text>
  if (!measureData || measureData.length === 0)
    return <Text>No data available</Text>

  const chartData = measureData.map((md: MeasureData) => ({
    year: md.year,
    value: md.value,
  }))

  return (
    <Box height='400px'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='value'
            name={measure.replace('_', ' ')}
            stroke='#4BC0C0'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default DataChart
