import { useState, useEffect } from 'react'
import { Button, YearPicker } from '~/components'
import { Playlist, PlaylistItem } from '~/views'
import classes from './home.module.scss'

const fetchSongs = async (
  start: number,
  end: number,
  limit = 5,
  pinnedHits = 0
) => {
  const url = `${
    process.env.NEXT_PUBLIC_API
  }/v1/hits?start=${start}&end=${end}&limit=${limit - pinnedHits}`

  try {
    const response = await fetch(url, {
      method: 'post',
    })
    return await response.json()
  } catch {
    // TODO: catch error
    console.log('oops. backend broken')
    return []
  }
}

const useHits = () => {
  const START_YEAR = 1965
  const END_YEAR = 2022

  const [startYear] = useState(START_YEAR)
  const [endYear] = useState(END_YEAR)
  const [selectedStartYear, setSelectedStartYear] = useState(2014)
  const [selectedEndYear, setSelectedEndYear] = useState(2017)
  const [limit] = useState(10)

  const [hits, setHits] = useState(() => Array(limit).fill(null))
  const [pinnedHits, setPinnedHits] = useState(() => Array(limit).fill(null))

  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    // return
    // note: initially, the hits array contains null. in that case,
    // fetch. else only fetch if isFetching is set to true
    if (!isFetching && !hits.some((hit) => hit === null)) {
      return
    }

    // only once
    setIsFetching(true)
    setHits(pinnedHits)
    const _fetchSongs = async () => {
      try {
        const newHits = await fetchSongs(
          selectedStartYear,
          selectedEndYear,
          limit
        )
        setHits(newHits)
        setIsFetching(false)
      } catch {
        console.log('fetching songs failed.')
      }
    }
    // TODO: can this do any harm?
    void _fetchSongs()
  }, [isFetching])

  return {
    startYear,
    selectedStartYear,
    setSelectedStartYear,
    endYear,
    selectedEndYear,
    setSelectedEndYear,

    limit,
    hits,
    pinnedHits,
    setPinnedHits,
    isFetching,
    setIsFetching,
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
    limit,
    setPinnedHits,
    hits,
    pinnedHits,
    isFetching,
    setIsFetching,
  } = useHits()

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
