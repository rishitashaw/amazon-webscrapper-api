const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000

const apiKey= '62fadce8fbc6f5ea7aba449b5765f9de'
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
        res.json(response)

    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, ()=> console.log(`running on port ${PORT}`));