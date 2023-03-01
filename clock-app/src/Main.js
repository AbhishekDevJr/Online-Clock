import React from 'react';

function Main(){
    return(
        <div className = "main">
            <div className = "clock-container">
                <div className = "left-digit">
                    <h1>1</h1>
                </div>

                <div className = "right-digit">
                    <h1>20</h1>
                    <p>AM</p>
                </div>
            </div>
        </div>
    );
}

export default Main;