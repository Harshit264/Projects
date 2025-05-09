const permission = document.querySelector(".permission")
const notnow = document.getElementById("notnow")
const pl = document.getElementById("pl")
const nav = document.querySelector("nav")
const search = document.getElementById("search")
const searchbtn = document.getElementById("searchbtn")
const app = document.querySelector(".app")
const loading = document.querySelector(".loading-screen")
const startup = document.querySelector(".startup-screen")

const cityname = document.querySelector(".city-name")
const countryname = document.querySelector(".country-name")
const weathericon = document.querySelector(".weather-icon")
const temp = document.querySelector(".temp")
const feelslike = document.querySelector(".feels-like")
const wind = document.querySelector(".wind-speed")
const humidity = document.querySelector(".humidity")
const pressure = document.querySelector(".pressure")
const rain = document.querySelector(".rain")

const t1 = document.getElementById("t1")
const i1 = document.getElementById("i1")
const t2 = document.getElementById("t2")
const i2 = document.getElementById("i2")
const t3 = document.getElementById("t3")
const i3 = document.getElementById("i3")
const t4 = document.getElementById("t4")
const i4 = document.getElementById("i4")
const t5 = document.getElementById("t5")
const i5 = document.getElementById("i5")
const t6 = document.getElementById("t6")
const i6 = document.getElementById("i6")

const ipkey = "" /*Geoapify*/
const weatherapi = "" /*Openweathermap*/

const timeout = setTimeout(() => {
    startup.style.display = "none"
    permission.style.display = "flex"
}, 4000)

function kelvintocelcius(kelvin) {
    return Math.round(kelvin - 273.15)
}

function updateinfo(data) {
    cityname.textContent = data.name;
    countryname.textContent = data.sys.country;
    weathericon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    temp.textContent = `${kelvintocelcius(data.main.temp)}°C`;
    feelslike.textContent = `Feels like ${kelvintocelcius(data.main.feels_like)}°C`;
    wind.textContent = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity}%`;
    pressure.textContent = `${data.main.pressure} hPa`;
    rain.textContent = data.rain ? `${data.rain['1h']}mm` : '0mm';
    app.style.display = "initial"
    loading.style.display = "none"
}

function updateinfoforecast(data){
    t1.textContent = `${kelvintocelcius(data.list[0].main.temp)}°C`
    i1.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    t2.textContent = `${kelvintocelcius(data.list[1].main.temp)}°C`
    i2.src = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`
    t3.textContent = `${kelvintocelcius(data.list[2].main.temp)}°C`
    i3.src = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`
    t4.textContent = `${kelvintocelcius(data.list[3].main.temp)}°C`
    i4.src = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`
    t5.textContent = `${kelvintocelcius(data.list[4].main.temp)}°C`
    i5.src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
    t6.textContent = `${kelvintocelcius(data.list[5].main.temp)}°C`
    i6.src = `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`
}

function getloc_getweather() {
    fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${ipkey}`)
    .then(
        res => res.json()
    )

    .then((data) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.location.latitude}&lon=${data.location.longitude}&appid=${weatherapi}`)
            .then(res => res.json())
            .then(data => updateinfo(data))
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.location.latitude}&lon=${data.location.longitude}&appid=${weatherapi}`)
            .then(res => res.json())
            .then(data => updateinfoforecast(data))
    })
}

function getweather() {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherapi}`)
            .then(res => res.json())
            .then(data => updateinfo(data))
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherapi}`)
            .then(res => res.json())
            .then(data => updateinfoforecast(data))
        }, (err) => {
            if (err.code === 1) {
                getloc_getweather()
            }
    });
}

function locationsearch() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${weatherapi}`)
        .then(res => res.json())
        .then(data => updateinfo(data))
        .catch(err => {
            search.style.border = "2px solid red"
            loading.style.display = "none"
            setTimeout(() => {
                search.style.border = "initial"
            }, 2000)
            console.log(err)
        })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&appid=${weatherapi}`)
        .then(res => res.json())
        .then(data => updateinfoforecast(data))
        .catch(err => {
            search.style.border = "2px solid red"
            loading.style.display = "none"
            setTimeout(() => {
                search.style.border = "initial"
            }, 2000)
            console.log(err)
        })
}

notnow.addEventListener("click", () => {
    permission.style.display = "none"
    loading.style.display = "Flex"
    getloc_getweather()
})

pl.addEventListener("click", () => {
    permission.style.display = "none"
    loading.style.display = "Flex"
    getweather()  
})

searchbtn.addEventListener("click", () => {
    permission.style.display = "none"
    loading.style.display = "Flex"
    locationsearch()
    search.value = ""
})