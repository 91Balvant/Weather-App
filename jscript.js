const url = 'https://api.weatherstack.com/current?access_key=74bb5133bd9f61d185ee9ec57b8ae863&query=';
const input = document.querySelector('.input');
const put = document.querySelector('.content');


document.querySelector('.btn').addEventListener('click', function(){
    put.innerHTML= '';
    const usertxt = input.value;  // Get the current value of the input
    console.log(url);
    const final_q = url+usertxt;

    
const app =  async (data)=>{
    const req =  await fetch(data);
    const res =  await req.json();
    weather(res)
}
 
const weather = (api_data)=>{ 
document.querySelector('.c_name').innerHTML = api_data.location.country+'/'+api_data.location.name;
const temp = document.createElement('div');
temp.classList.add('card');
    console.log(api_data.location)
    temp.innerHTML = `  <img src="./img/celsius.gif" alt="temperature_logo">
        <div class="info">
            <h2>Temperature : ${api_data.current.temperature}</h2>
        </div>`;
    
put.appendChild(temp);

const w_code = document.createElement('div');
w_code.classList.add('card');
    console.log(api_data.location)
    w_code.innerHTML = `  <img src="./img/sun.gif" alt="weather_logo">
        <div class="info">
            <h2>Weather code : ${api_data.current.weather_code}</h2>
        </div>`;
    
put.appendChild(w_code);

const cloudcover = document.createElement('div');
cloudcover.classList.add('card');
cloudcover.innerHTML = `  <img src="./img/clouds.gif" alt="">
        <div class="info">
            <h2>Cloudcover : ${api_data.current.cloudcover}</h2>
        </div>`;  
put.appendChild(cloudcover);

const humidity = document.createElement('div');
humidity.classList.add('card');
humidity.innerHTML = `  <img src="./img/humidity.gif" alt="">
        <div class="info">
            <h2>Humidity : ${api_data.current.humidity}</h2>
        </div>`;
put.appendChild(humidity);

const pressure = document.createElement('div');
pressure.classList.add('card');
pressure.innerHTML = `  <img src="./img/resilience.gif" alt="">
        <div class="info">
            <h2>pressure : ${api_data.current.pressure}</h2>
        </div>`;
put.appendChild(pressure);

const latlong = document.createElement('div');
latlong.classList.add('card');
latlong.innerHTML = `  <img src="./img/emerging-industries.gif" alt="">
        <div class="info">
            <h2>Latitude : ${api_data.location.lat}</h2>
            <h2>Longitude : ${api_data.location.lon}</h2>
        </div>`;
put.appendChild(latlong);


}
app(final_q)


})


