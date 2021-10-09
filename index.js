const cheerio = require('cheerio')
const express = require('express')
const axios = require('axios')
const {response} = require("express");
const PORT = 8000

const app = express()

const url = 'https://www.etmoney.com/blog/new-tax-regime-or-old-what-should-you-pick/'

axios(url)
.then(response=>{
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.singleentry',html).each(function (){
        const title = $(this).text()
        articles.push({
            title
        })
    })
    console.log(articles)
}).catch(err => console.log(err))

app.listen(PORT, ()=> console.log('Server runnning on port 8000'))