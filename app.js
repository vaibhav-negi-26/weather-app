const geocode = require('./utility/geocode')
const forecast = require('./utility/forecast')
var place = process.argv[2]
if (!place) {
    console.log("Location is required!");
} else {
    geocode(place, (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastdata)
        })

    })
}