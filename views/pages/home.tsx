import { useState, useEffect } from 'react'
import { YearPicker } from '~/components'

const useFetchHits = () => {
  const START_YEAR = 1965
  const END_YEAR = 2022

  const [startYear, setStartYear] = useState(START_YEAR)
  const [endYear, setEndYear] = useState(END_YEAR)
  const [selectedStartYear, setSelectedStartYear] = useState(1998)
  const [selectedEndYear, setSelectedEndYear] = useState(2006)

  useEffect(() => {
    console.log('fetch!')
  }, [startYear, endYear])

  return {
    startYear,
    // setStartYear,
    selectedStartYear,
    setSelectedStartYear,
    endYear,
    // setEndYear,
    selectedEndYear,
    setSelectedEndYear,
  }
}

export const HomeView = () => {
  const {
    startYear,
    endYear,
    selectedStartYear,
    setSelectedStartYear,
    selectedEndYear,
    setSelectedEndYear,
  } = useFetchHits()

  return (
    <div>
      <h2>select years</h2>

      <YearPicker
        startYear={startYear}
        selectedStartYear={selectedStartYear}
        setSelectedStartYear={setSelectedStartYear}
        endYear={endYear}
        selectedEndYear={selectedEndYear}
        setSelectedEndYear={setSelectedEndYear}
      />
    </div>
  )
}
