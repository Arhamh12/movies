import React from "react";
import { useEffect, useState } from "react";

export default function useFetchData(url=""){
    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        const option = {method: "GET"};
        fetch(url ,option)
        .then((res)=>res.json()
        )
        .then((res)=>{

        setInterval(() => {
            setData(res.results)
            isLoading(false)
            }, 3000);
          
        })
      });
      return [data, loading];
};