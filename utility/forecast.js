const request = require('request')

const forecast = (lat, long, callback) => {
    const drakUrl = 'https://api.darksky.net/forecast/99840a089b5eac0c9a0a0049b2f18c42/'+lat+','+long
    request({
        url: drakUrl,
        json: true
    }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined)
        } else if (response.body.error) {
            callback("Unable to find location.", undefined)
        } else {
            const data = response.body
            callback(undefined, `${data.daily.data[0].summary} It is currently ${data.currently.temperature} degree out there. There is a ${data.currently.precipProbability}% change of rain.`)        
        }
    })
}
module.exports = forecast