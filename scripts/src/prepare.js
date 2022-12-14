import { readdir, readFile, writeFile } from 'fs/promises'

const start = async () => {
    const fileNames = await readdir('./scripts/json')

    const cumulativeRows = {}

    for (const fileName of fileNames) {

        const rowsAsString = await readFile(`./scripts/json/${fileName}`, 'utf-8')
        const rows = JSON.parse(rowsAsString)

        for (const [indexAsString, row] of Object.entries(rows)) {
            const index = parseInt(indexAsString)
            const cumulativeRow = cumulativeRows[row.id]

            const score = 40 - index
            const year = parseInt(fileName.split('.')[0])

            if (!cumulativeRow) {
                row.years = [year]
            } else {
                row.years = Array.from(new Set([year, ...cumulativeRow.years])).reverse()
            }

            cumulativeRows[row.id] = {
                ...row,
                score: cumulativeRows[row.id] ? cumulativeRow.score + score : score,
            }
        }
    }

    writeFile('./tmp.json', JSON.stringify(cumulativeRows, null, 2))
}

start()
