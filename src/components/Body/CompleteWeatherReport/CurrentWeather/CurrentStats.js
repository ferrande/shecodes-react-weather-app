import React from "react";

function CurrentStats() {
    return (
        <div>
            <p className="wind-humidity">
                <ul>
                    <li>
                        wind: <span id="wind"></span> km/h
                    </li>
                    <li>
                        humidity: <span id="humidity"></span>%
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default CurrentStats;