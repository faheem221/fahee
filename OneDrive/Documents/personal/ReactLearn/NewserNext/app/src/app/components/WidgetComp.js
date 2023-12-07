'use client'
import axios from 'axios'
import React,{ useCallback, useEffect, useState} from 'react'
import {FaIndianRupeeSign, FaDollarSign} from 'react-icons/fa6'
import {PiArrowsLeftRight} from 'react-icons/pi'
const WidgetComp = (props) => {
    const rupee = <FaIndianRupeeSign/>
    const dollar = <FaDollarSign/>
    const [currencyData, setCurrencyData] = useState([])
    const currencyApi = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"
  
    const currencyApiCaller = async () =>{
        try {
            await axios.get(currencyApi).then((res)=>{setCurrencyData(res.data)})
        } catch (error) {
            console.log(error)
        }
    }
   useEffect(()=>{
        currencyApiCaller()
        
   },[])

   
   
   const [weatherData, setWeatherData] = useState([]);
   const [location, setLocation] = useState({latitude:null, longitude:null})
   
    const getLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
            },
            (error) => {
              console.error('Error getting location:', error.message);
            }
          );
        } else {
          console.error('Geolocation is not supported by your browser');
        }
      }catch (error) {
        console.error('Error getting location:', error);
      }
    };

     
    useEffect(()=>{
      if(location.latitude == null || location.longitude == null){
        getLocation()
      }
      else{
        const sendDataToApi =  () => {
          try {
              axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`).then(res=>{setWeatherData([res.data]);})

          } catch (error) {
            console.error('Error sending data to API:', error);
          }
        };
    
        sendDataToApi();
      }
    }, [location])

     console.log(weatherData)
  return (
    <div className='w-full flex justify-center items-center mt-8'>
      <div className='w-full max-w-[1300px] flex justify-between items-center iphone:px-5 ipadTablet:px-5  '>
            
            
            <div className={`iphone:w-[170px] iphone:h-[90px] ipadTablet:w-[250px] ipadTablet:h-[140px]  bg-[#fce5e2] dark:bg-[#281900] rounded-2xl relative`}>
                <div className={`ipadTablet:text-[1.5em] iphone:text-[1.05em] text-[${props.colorVarient.fontColor}] text-center font-poppins font-medium mt-2 dark:text-[#EDE0DF]`}>Currency</div>
                <div className='flex justify-around items-center font-quicksand'>

                    <div className={`ipadTablet:w-[90px] iphone:w-[60px] ipadTablet:h-[70px] iphone:h-[40px] bg-[${props.colorVarient.cardColor}] dark:text-[#bdb0af] rounded-lg flex justify-center items-center ipadTablet:text-[2em] iphone:text-[1.5em]`}>
                        <span className='text-[1.1em] '>{rupee}</span> {Math.floor(currencyData.inr)}
                    </div>
                    <div className={`ipadTablet:w-[90px] ipadTablet:h-[70px] iphone:w-[60px] iphone:h-[40px]  bg-[${props.colorVarient.cardColor}] dark:text-[#bdb0af] rounded-lg flex justify-center items-center ipadTablet:text-[2em] iphone:text-[1.5em]`}>
                        <span className='text-[1.1em]'>{dollar}</span> 01
                    </div>
                </div>
                <PiArrowsLeftRight className='iphone:text-[1.7em] dark:text-[#856d6d] ipadTablet:text-[3em] absolute translate-x-[-50%] translate-y-[-25%] top-[50%] left-[50%]' />
            </div>



            <div className={` ipadTablet:w-[250px] ipadTablet:h-[140px] iphone:w-[170px] iphone:h-[90px] bg-[#fce5e2] dark:bg-[#281900]  rounded-2xl`}>
                <div className={`font-poppins text-center ipadTablet:text-[1.5em] iphone:text-[1.2em] text-[${props.colorVarient.fontColor}] font-medium mt-2 dark:text-[#EDE0DF]`}>New Delhi, In</div>
                <div className='flex justify-around items-center ipadTablet:px-6 iphone:px-9 mt-1'>
                    <div className='ipadTablet:w-[70px] iphone:w-[40px]'><img src="https://cdn-icons-png.flaticon.com/512/4150/4150897.png"/></div>
                    <span className='font-quicksand ipadTablet:text-[3em] iphone:text-[2.2em] dark:text-[#bdb0af]'>{ weatherData.map((data)=>{return(data.current.temperature_2m)})}&deg;c</span>
                </div>
            </div>

            


      </div>
    </div>
  )
}

export default WidgetComp
