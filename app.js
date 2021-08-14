window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription= document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let tempicon = document.querySelector("temp-icon");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

            const proxy= "https://cors-anywhere.herokuapp.com/"
            const api= `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a410304e09c2ce3747918d7d44308231`

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    const {temp}= data.main;
                    const {name}= data;
                    const {id, description} = data.weather[0];

                    //set DOM elements from api

                    temperatureDegree.textContent = Math.round(temp-273);
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent= name;

                    if(id<710){
                        tempicon.src = 'http://openweathermap.org/img/wn/13d@2x.png'
                    }// icon not working throwing error

                    //else if( id<)
                })
        });


    }

    
});