
const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000

const apiKey= process.env.API_KEY
const baseUrl=`http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

app.get('/',(req, res)=>{
    res.send('welcome to amazon web scrapper api')
})

//get product details
app.get('/products/:productId', async(req, res) => {
    const {productId} = req.params;

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)
        res.json(JSON.parse(response))

    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, ()=> console.log(`running on port ${PORT}`));