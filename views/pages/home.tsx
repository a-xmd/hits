import { useState, useEffect } from 'react'
import { YearPicker } from '~/components'

const useFetchHits = () => {
  const START_YEAR = 1965
  const END_YEAR = 2022

  const [startYear, setStartYear] = useState(START_YEAR)
  const [endYear, setEndYear] = useState(END_YEAR)
  const [selectedStartYear, setSelectedStartYear] = useState(1990)
  const [selectedEndYear, setSelectedEndYear] = useState(END_YEAR)

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
      <span>start: {selectedStartYear}</span>
      <span>end: {selectedEndYear}</span>
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
