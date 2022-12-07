import { writeFile, mkdir } from 'fs/promises'
import { JSDOM } from 'jsdom'
import axios from 'axios'

const START_YEAR = 1965
const END_YEAR = 2022

const OUTDIR = './scripts/json'

const fetchRawHtml = async (year, week) => {
    const url = `https://top40.nl/top40/${year}/week-${week}`
    console.log(`Fetching ${year} week ${week}`, url)
    const { data } = await axios.get(url, {
        headers: {
            'accept-encoding': null
        }
      })
    return data
}

const parseHtml = (rawHtml) => {
    const dom = new JSDOM(rawHtml)

    if (dom.window.document.querySelector('.red_panel')) {
        return
    }

    const rows = Array.from(dom.window.document.querySelectorAll('[data-title-id]')).slice(0, 40)


   return rows.map((row) => {
    const { titleId, m4aPath } = row.dataset

    return {
        artist: row.querySelector('.artist').textContent.trim(),
        title: row.querySelector('.title').textContent.trim(),
        snippet: m4aPath ?? null,
        id: parseInt(titleId),
        image: row.querySelector('img').srcset.split(' ')[0]
    }
   })
}

const saveJson = async (data, year, week) => {
    try {
        await writeFile(`${OUTDIR}/${year}.${week}.json`, JSON.stringify(data, null, 2))
        console.log('👌 saved', year, 'week', week)
    } catch (err) {
        if (err.code === 'ENOENT') {
            await mkdir(OUTDIR)
            await saveJson(data, year, week)
        }
    }
}

export const timeout = (seconds) =>  new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, seconds * 1000)
})

export const start = async () => {
    for (let year = START_YEAR; year <= END_YEAR; year++) {
        for (let week = 1; week <= 53; week++) {
            let htmlString
            try {
                htmlString = await fetchRawHtml(year, week)
            } catch {
                console.log('\t could not fetch', year, week)
                continue
            }
            const json = parseHtml(htmlString)
            saveJson(json, year, week)
            // await timeout(1)
        }
    }
}
start()

