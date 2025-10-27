import {useStatue, useEffect } from "react";
import black from "/black.png";
function Main() {
  // const date = new Date()
  const [date, setDate] = useStatue(new Date())

  setInterval(() => {
    const date = new Date()
    setDate(date.getSeconds())

  }, 1000)
  
  return(
    <>
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div 
      className={'w-[400px] h-[450px] bg-[url(/black.png)] bg-no-repeat bg-center bg-cover'}
      style={{ backgroundImage:  'url(${black})'}}
      >{date.getHours()}:{date.getMinutes()}:

      </div>
    </div>
    </>
  )
}
