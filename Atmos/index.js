const cityName = document.getElementById("inp")
const display = document.getElementById("display")
const temp = document.getElementById("temp")
const rangeMain = document.getElementById("range-main")
const feelLike = document.getElementById("feelslike")
const humidity = document.getElementById("humidity")
const latestWeather = document.getElementById("latestWeather")
const daily = document.getElementById("daily")
const err = document.getElementById("err")
const tim = document.getElementById("tim")
const c1 = document.getElementById("c1")
const t1 = document.getElementById("t1")
const i1 = document.getElementById("i1")
const c2 = document.getElementById("c2")
const t2 = document.getElementById("t2")
const i2 = document.getElementById("i2")
const c3 = document.getElementById("c3")
const t3 = document.getElementById("t3")
const i3 = document.getElementById("i3")
const c4 = document.getElementById("c4")
const t4 = document.getElementById("t4")
const i4 = document.getElementById("i4")
const c5 = document.getElementById("c5")
const t5 = document.getElementById("t5")
const i5 = document.getElementById("i5")
const key = ""

async function getData() {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value.toLowerCase()}&appid=${key}&units=metric&cnt=6`)

    const data = await res.json()

    try {

        display.textContent = `${data.city.name}`
        temp.textContent = `${data.list[0].main.temp} °C`
        rangeMain.textContent = `${data.list[0].main.temp_min} °C - ${data.list[0].main.temp_max} °C`
        feelLike.textContent = `Feels like ${data.list[0].main.feels_like}°C`
        humidity.textContent = `Humidity: ${data.list[0].main.humidity}%`
        
        c1.textContent = `${data.list[1].main.temp} °C`
        i1.src = `http://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`
        
        c2.textContent = `${data.list[2].main.temp} °C`
        i2.src = `http://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`
       
        c3.textContent = `${data.list[3].main.temp} °C`
        i3.src = `http://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`
        
        c4.textContent = `${data.list[4].main.temp} °C`
        i4.src = `http://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`
        
        c5.textContent = `${data.list[5].main.temp} °C`
        i5.src = `http://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`
       
        err.style.display = "none"
        latestWeather.style.display = "block"
        daily.style.display = "block"


        // For setting time 
         
        function time (num, el) {
            let date = new Date (data.list[num].dt * 1000)
        
        const options = {
            hour12: true,
            hour: "numeric",
            minute: "numeric"
        }
        
        let time = date.toLocaleTimeString("en-US", options)
 
        let dayNum = date.getDay()

        let day
        
        if (dayNum == 0) {
            day = "Sunday"
        }
        if (dayNum == 1) {
            day = "Monday"
        }
        if (dayNum == 2) {
            day = "Tuesday"
        }
        if (dayNum == 3) {
            day = "Wednesday"
        }
        if (dayNum == 4) {
            day = "Thursday"
        }
        if (dayNum == 5) {
            day = "Friday"
        }
        if (dayNum == 6) {
            day = "Saturday"
        }

        el.textContent = `${day}, ${time}`
        }

        time(0, tim)
        time(1, t1)
        time(2, t2)
        time(3, t3)
        time(4, t4)
        time(5, t5)

        console.log(data)
    }

    catch (e) {
        console.log(e)
        latestWeather.style.display = "none"
        daily.style.display = "none"
        err.style.display = "block"
        err.textContent = "City Doesn't Exist!"
    }
}