import React, { useEffect, useState } from 'react';
import axios from "axios";

const celestrackUrl = "http://celestrak.org/";

const AxiosHelloWorld = () => {

    const [IssTleData, setIssTleData] = useState("Fetching Data...");

    useEffect(() => {
        axios.get(`${celestrackUrl}NORAD/elements/gp.php?CATNR=25544&FORMAT=tle`)
        .then((response) => {
            // handle success
            setIssTleData(response.data);
        })
        .catch((error) => {
            // handle error
            setIssTleData(`Error: ${error}`)
        });
    }, []);


  return (
    <div className="AxiosHelloWorld">
        {IssTleData}
    </div>
  );
}

export default AxiosHelloWorld;
