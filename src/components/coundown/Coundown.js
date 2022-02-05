import { useState, useEffect } from "react"

const Countdown = ()=>{

    const [countdown, setCountdown] = useState(5)
    
     function onTimesup(){
         alert('Hello')
    }    

     useEffect(()=>{
         if(countdown===0) {
             onTimesup()
             return}

         let timer= setInterval(()=>{
             setCountdown(countdown-1)
         },1000)

         return()=>{
            clearInterval(timer)
         }
     },[countdown])

    return (
        <>
            
            <h1> Countdown: {countdown}</h1>
        </>
    )
}
export default Countdown