import express from 'express'
import fetch from 'isomorphic-unfetch'
const app = express()
// https://github.com/r-spacex/SpaceX-API/blob/master/docs/payloads/v4/all.md
const SPACEX_PAYLOADS_URL = 'https://api.spacexdata.com/v4/payloads'

app.get('/', (_, res) => res.status(200).send('Hello World'))

app.get('/spacex/payloads/count', (req, res) =>
  fetch(SPACEX_PAYLOADS_URL).then((response) =>
    response
      .json()
      .then((data) =>
        res.status(200).send(JSON.stringify({count: data.length}))
      )
  )
)

app.listen(8000, () => {
  console.log(`listening on port 8000`)
})
