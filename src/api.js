const apikey = "464ee00f01d3251eadc2d0b8761aaa6a"
// const url= `https://api.openweathermap.org/data/2.5/weather?uints=metric&q=${city}&lon=India&appid=${apikey}`

async function getData(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?uints=units&dt={time}&q=${city}&lon=India&appid=${apikey}`)
    var data =await response.json()
    return data
}
getData()
export default getData;