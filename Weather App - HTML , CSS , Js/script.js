const container = document.getElementById('container')
const form = document.getElementById('form')
const search = document.getElementById('search')
const getWeather = async (city) => {

    const url = `https://api.api-ninjas.com/v1/weather?city=${city}`
    
      const response = await fetch(url, {
    
        headers: {
          'X-Api-Key': 'r5G9K9MJb5jC+gWV3awFMA==1MOqUWqBRN99b8DQ'
        }
        
    })
    const data = await response.json()
    return showWeather(data)
    console.log(data)
    
}




form.addEventListener(
    'submit', 
    function(event){
        getWeather(search.value)
        event.preventDefault()
        return 
    }
)

const showWeather = (data) => {
    container.innerHTML = `
    <main>
    <div class="row" id="row-1">
    <form id="form">
    <input style="width: 100%;
    max-width: 220px;
    height: 45px;
    padding: 12px;
    border-radius: 12px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;font-size: 17px;
    font-weight: 300;
    border-radius: 21px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 5px gray;"type="search" id="search" placeholder="   Search with your City">
    
    </form>
    </div>
    </main>
    <div id="temp"> <h1 style = 'font-size:75px'>${data.temp}℃</h1></div>
    <div class="cards" id="cards">
    
    <div id="card-1" class="card">
    <h2>Min temp</h2>
    <div class="Values" style = 'font-size:45px'>${data.min_temp}℃</div>
    </div>
    <div id="card-2" class="card">
    <h2>Max Temp</h2>
    <div class="Values" style = 'font-size:45px'>${data.max_temp}℃</div>
    </div>
    <div id="card-3" class="card">
    <h2>Humidity</h2>
    <div class="Values" style = 'font-size:45px'>${data.humidity}%</div>
    </div>
    <div id="card-4" class="card">
    <h2>Wind Speed</h2>
    <div class="Values" style = 'font-size:45px'>${data.wind_speed} m/s </div>
    </div>
    </div>
    `
    document.body.div.input.style =  `.search:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }
  
  .search:active {
    transform: scale(0.95);
  }
  
  .search:focus {
    border: 2px solid grey;
  }`
}






























