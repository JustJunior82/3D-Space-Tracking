import React, { useEffect, useState } from 'react';

const celestrackUrl = "http://celestrak.org/";

const FetchHelloWorld = () => {

    const [IssTleData, setIssTleData] = useState("Fetching Data...");

    useEffect(() => {
        fetch(`${celestrackUrl}NORAD/elements/gp.php?CATNR=25544&FORMAT=tle`)
        .then(response => response.json())
        .then(data => setIssTleData(data));
    }, []);


  return (
    <div className="FetchHelloWorld">
        {IssTleData}
    </div>
  );
}

export default FetchHelloWorld;
