import { useEffect, useState } from 'react';

const useFetch = () => {
    const[service,setService] = useState([]);
    //fetch all service data
    useEffect(()=>{
        fetch('/service.json')
        .then((res) => res.json())
        .then((data) => setService(data))
    },[]);

    return [service];
};

export default useFetch;