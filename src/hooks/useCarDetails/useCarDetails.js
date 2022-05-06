import { useEffect, useState } from "react"

const useCarDetails= carId =>{
const [car,setCar]=useState({});

useEffect(()=>{
    const url=`https://evening-shore-63424.herokuapp.com/car/${carId}`;
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>setCar(data))
},[carId]);
return [car];
}

export default useCarDetails;