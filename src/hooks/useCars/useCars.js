import { useEffect, useState } from "react"

const useCars=()=>{
    const [cars,setCars]=useState();

    useEffect(()=>{
        fetch('https://evening-shore-63424.herokuapp.com/car')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return [cars,setCars];
}

export default useCars;