'use client'
import React, {useRef, useState, useEffect} from 'react'
import axios from 'axios';
import Options from './components/Options'
import WidgetComp from './components/WidgetComp'
import HeroSection from './components/HeroSection'
import Topvideos from './components/Topvideos'
import CricketSec from './components/CricketSec'
import SeeMore from './components/SeeMore'
 

const App = () => {
  const CricketSection = useRef(null)

  const colorSchematics = {
    cardBgColor:"#FFEDEB",
    cardColor:"#FFDAD8",
    primaryColor:"#FF888",
    secondaryColor:"",
    widgetBgColor:"#fce5e2",
    fontColor:"#410007",
    buttonBgColor:"#FFDAD8",
    buttonHoverColor:"#ffc8c6",
    footerFontColor:"",
    cardHoverColor:"#FFB3B1"
  }

    const [data, setData] = useState([])
    const apiUrl = "/fakeAPI.json"
    const apiCaller =  ()=>{
        try {
            axios.get(apiUrl).then(res =>setData([res.data]))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        apiCaller()
    }, [])

 

  return (

    <div>
      
    
      <Options colorVarient={colorSchematics} ref={CricketSection}/>
      <WidgetComp colorVarient={colorSchematics}/>
      <HeroSection colorVarient={colorSchematics} newsData={data}/>
      <Topvideos colorVarient={colorSchematics}/>
      <CricketSec ref={CricketSection} colorVarient={colorSchematics} newsData={data} />
   

      <SeeMore newsData={data}/>
    
     
    </div>
  )
}

export default App
