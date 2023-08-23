import React from "react";

function CurrentStats({ wind, humidity }) {
    return (
        <div className="text-center">
            <ul>
                <li>
                    <span className="stats">wind:</span> <span>{Math.round(wind)}</span> km/h
                </li>
                <li>
                    <span className="stats">humidity:</span> <span>{Math.round(humidity)}</span>%
                </li>
            </ul>
        </div>
    )
}

export default CurrentStats;