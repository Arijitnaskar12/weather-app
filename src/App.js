import React, { useState } from "react";


const App=()=>{
    const[longitude,setLongitude]=useState(0);
    const[latitude,setLatitude]=useState(0);
    const[hemisphere,setHemisphere]=useState("");
    const[month,setMonth]=useState(new Date().getMonth());
    
function getLocation(){
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((location)=>{
                setLongitude(location.coords.longitude);
                setLatitude (location.coords.latitude);

                if(location.coords.latitude>0)
                {
                    setHemisphere("Northern hemisphere");
                }else if(location.coords.latitude<0)
                {
                    setHemisphere("Southern hemisphere")
                }else{
                    setHemisphere("Equator");
                }
        
            });
        }
    
      
    }
    return  (
        <div>
            <h1>Longitude: {longitude}</h1>
            <h1>Latitude:{latitude}</h1>
            <h1>Hemisphere:{hemisphere}</h1>
            <button onClick={getLocation}>Get Location</button>
            {
               (hemisphere==="Northern hemisphere" && (month>=2 && month<=9)) ||
                (hemisphere=="Souhtern hemisphere" &&(month<2 ||month>9)) ?
                (
                    <div>
                        <h1>It's Summer in the {hemisphere}</h1>
                        <p>आया मौसम थंडे थंडे पावसाळे का</p>
                        <img src="https://i.ytimg.com/vi/HzErgJjLN0A/maxresdefault.jpg"
                        alt="summer"
                        />
                    </div>
                ):(
                    ( hemisphere==="Northern hemisphere" && (month<2 || month>9))
                     ||  (hemisphere==="Southern hemisphere" && month>=2 && month<=9)?
                     (
                        <div>
                        <h1>It's Winter in the {hemisphere}</h1>
                        <p>आया मौसम ठंडा ठंडा पावसाळे का</p>
                        <img src="https://pbs.twimg.com/media/DpePTTuWsAAxmhT.jpg" 
                        alt="winter"
                        />
                    </div>
                     ):
                        ( <h1>Relax we are fetching ... </h1>)
                )
            }
            </div>
    )
}
export default App;