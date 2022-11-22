const searchButton = document.querySelector(".search-btn")
const userInput = document.querySelector(".user-input")
const message = document.querySelector(".msg")
const listCity = document.querySelector(".cities")
const apiKey = "1f6c9299d087287624ec7fe05bd2e4df"

const searchHandler = event =>{
    event.preventDefault()
    const inputVal = userInput.value;
    if(inputVal.length === 0  ){
        message.innerHTML= `Please enter a valid data`
    }
    const URL = ` https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const{main,name,sys,weather} = data
            const weatherIcon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            const li = document.createElement("li");
            li.classList.add("city");
            const tempreture = Math.round(main.temp)
            const markUp = `
            <h2 class="city-name" data-name = ${name},${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class="city-temp">${tempreture}</div>
           
            <figure>
                <img class="city-icon" src="${weatherIcon}"></img>
                <figurecaption>${weather[0]["description"]}</figurecaption>
            </figure>
            
            
            `;
            console.log(main)
            inputVal.innerHTML = ""
            li.innerHTML = markUp;
            listCity.appendChild(li)


        })
        .catch(()=>{
            message.innerHTML = "Search a valid city"
        })
        

   

    

   
   
    
}
searchButton.addEventListener("click",searchHandler)
// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=1f6c9299d087287624ec7fe05bd2e4df&units={standard}