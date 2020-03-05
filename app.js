const geocode = require('./utility/geocode')
const forecast = require('./utility/forecast')
var place = process.argv[2]
if (!place) {
    console.log("Location is required!");
} else {
    geocode(place, (error, { latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude,longitude, (error, forecastdata) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastdata)
        })

    })
}