import { useEffect, useState } from "react"

const useTravelServices = ()=> {
    const [services,setServices]= useState([])

    useEffect( () => {
        fetch('travelData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return[services,setServices];
}

export default useTravelServices;