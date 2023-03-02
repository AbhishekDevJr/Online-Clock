
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Main(){
    let currDateObj = new Date();
    const [hour, setHour] = useState(currDateObj.getHours());
    const [minutes, SetMinutes] = useState(currDateObj.getMinutes());
    const [seconds, setSeconds] = useState(currDateObj.getSeconds());
    
    useEffect(() => {
        console.log('Built by Abhishek Choudhari');
    }, []);

    function setCurrentTime(){
        setInterval(() => {
            let newTime = new Date();
            setHour(newTime.getHours());
            SetMinutes(newTime.getMinutes());
            setSeconds(newTime.getSeconds());
        }, 1000);
    }

    setCurrentTime();

    return(
        <div className = "main">
            <div className = "clock-container">
                <div className = "left-digit">
                    <h1>{hour}</h1>
                </div>

                <div className = "right-digit">
                    <h1>{minutes}</h1>
                    <p>{seconds}</p>
                </div>

                <div className = "line">

                </div>
            </div>
        </div>
    );
}

export default Main;