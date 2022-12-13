import { useState, useEffect } from 'react'
import { Button, YearPicker } from '~/components'
import { Playlist, PlaylistItem } from '~/views'
import classes from './home.module.scss'

const useHits = () => {
  const START_YEAR = 1965
  const END_YEAR = 2022

  const [startYear] = useState(START_YEAR)
  const [endYear] = useState(END_YEAR)
  const [selectedStartYear, setSelectedStartYear] = useState(2014)
  const [selectedEndYear, setSelectedEndYear] = useState(2017)
  const [limit] = useState(5)
  const [pinnedHits, setPinnedHits] = useState(() => Array(limit).fill(false))

  /* useEffect(() => {}, [selectedStartYear, selectedEndYear]) */

  return {
    startYear,
    selectedStartYear,
    setSelectedStartYear,
    endYear,
    selectedEndYear,
    setSelectedEndYear,

    limit,
    pinnedHits,
    setPinnedHits,
  }
}

const useFetch = (url: string) => {
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  // const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (!isFetching) {
      return
    }

    const startFetching = async () => {
      const response = await fetch(url)
      const json = await response.json()

      setData(json)
      setIsFetching(false)
      // setIsDone(true)
    }

    startFetching()
  }, [isFetching, url])

  return { data, isFetching, setIsFetching }
}

export const HomeView = () => {
  const {
    startYear,
    endYear,
    selectedStartYear,
    setSelectedStartYear,
    selectedEndYear,
    setSelectedEndYear,
    limit,
    pinnedHits,
    setPinnedHits,
  } = useHits()

  const {
    isFetching,
    setIsFetching,
    data: hits,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API}/v1/hits?start=${selectedStartYear}&end=${selectedEndYear}&limit=${limit}`
  )

  return (
    <div>
      <div className={classes.hero}>
        Vind random hitjes van vroeger. Van 1965 tot nu.
      </div>
      <YearPicker
        startYear={startYear}
        selectedStartYear={selectedStartYear}
        setSelectedStartYear={setSelectedStartYear}
        endYear={endYear}
        selectedEndYear={selectedEndYear}
        setSelectedEndYear={setSelectedEndYear}
        className={classes['year-picker']}
      />

      <div className={classes['main-button-container']}>
        <Button
          variant="primary"
          disabled={isFetching}
          handleClick={() => setIsFetching(true)}
        >
          vind hitjes
        </Button>
      </div>

      <Playlist
        hits={hits}
        pinnedHits={pinnedHits}
        setPinnedHits={setPinnedHits}
        isFetching={isFetching}
        limit={limit}
      />
    </div>
  )
}
