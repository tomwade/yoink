const express = require('express')
const OpenseaScraper = require("opensea-scraper")
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/', async (req, res) => {
	const result = await OpenseaScraper.offersByUrl("https://opensea.io/collection/rarebunniclub?search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW&search[priceFilter][symbol]=ETH&search[priceFilter][max]=0.12", {
		// debug: true,
		// logs: true
	});

  res.json(result['offers']);
})

app.get('/os', (req, res) => {
	res.send('Loading')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})