'use strict'
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const getHTML = require('html-get');

module.exports = function(app)
{
    var responseData = "";
    (async () => {
        const { url, html, stats } = await getHTML('https://extractor.esoft-africa.com/')
        console.log(url, stats, html.length)
        // console.log(html)
        
        responseData = html;
    })()
    return responseData
    // app.get('/getHTML', (req, res) => {
    //     res.send(responseData)
    // });
}