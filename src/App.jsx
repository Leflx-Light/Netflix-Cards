import React from 'react'
import HBO from './HBO';
import Netflix from './Netflix';


const favSeries = 'HBO';


/*
const FavS = () =>{
  if(favSeries === 'netflix')
  {
   return <Netflix/>
  } else {
   return <HBO/>
  }
}
*/







const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix Series</h1>
    {/* <FavS/> */}
    {(favSeries === "netflix") ?  <Netflix/> : <HBO/>}
  </>
)

export default App