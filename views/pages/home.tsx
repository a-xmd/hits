import { useState, useEffect } from 'react'
import { YearRangeSelector } from '~/views'

const useFetchHits = () => {
  const [startYear, setStartYear] = useState(2003)
  const [endYear, setEndYear] = useState(2008)

  useEffect(() => {
    console.log('fetch!')
  }, [startYear, endYear])

  return { startYear, endYear, setStartYear, setEndYear }
}

export const HomeView = () => {
  const { startYear, setStartYear, endYear, setEndYear } = useFetchHits()

  return (
    <div>
      <h2>select years</h2>
      <YearRangeSelector
        startYear={startYear}
        endYear={endYear}
        setStartYear={setStartYear}
        setEndYear={setEndYear}
      />
    </div>
  )
}
